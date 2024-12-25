class WordGame {
    constructor() {
        this.currentLevel = null;
        this.currentCategory = null;
        this.score = 0;
        this.currentWord = null;
        this.currentWordIndex = 0;
        this.gameArea = document.querySelector('.game-area');
        this.balloonsContainer = document.getElementById('balloons-container');
        this.currentWordElement = document.getElementById('current-word');
        this.gameActive = false;
        this.startScreen = document.getElementById('startScreen');
        this.gameScreen = document.getElementById('gameScreen');
        
        // Ses yöneticisini başlat
        this.soundManager = new SoundManager();
        
        this.missedBalloonCount = 0;
        this.totalBalloons = 4; // Her turda oluşturulan balon sayısı
        
        this.initGame();
    }

    initGame() {
        // Kategori seçimi
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentCategory = btn.dataset.category;
                document.querySelector('.category-selection').style.display = 'none';
                document.querySelector('.difficulty-selection').style.display = 'block';
            });
        });

        // Kategoriye dön butonu
        document.querySelector('.back-to-category').addEventListener('click', () => {
            document.querySelector('.difficulty-selection').style.display = 'none';
            document.querySelector('.category-selection').style.display = 'block';
        });

        // Zorluk seviyesi seçimi
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.startScreen.style.display = 'none';
                this.gameScreen.style.display = 'block';
                this.startGame(btn.dataset.level);
            });
        });

        // Ana menüye dönüş butonu
        document.getElementById('backButton').addEventListener('click', () => {
            this.gameActive = false;
            this.clearBalloons();
            this.gameScreen.style.display = 'none';
            this.startScreen.style.display = 'block';
            document.querySelector('.category-selection').style.display = 'block';
            document.querySelector('.difficulty-selection').style.display = 'none';
            this.score = 0;
            document.getElementById('score').textContent = '0';
            this.soundManager.stopAll();
        });
    }

    startGame(level) {
        this.clearBalloons();
        this.currentLevel = level;
        this.currentWordIndex = 0;
        this.score = 0;
        this.gameActive = true;
        document.getElementById('score').textContent = this.score;
        this.showNextWord();
        this.soundManager.play('background');
    }

    showNextWord() {
        if (!this.gameActive) return;

        this.missedBalloonCount = 0; // Sayacı sıfırla
        
        // Seçilen kategoriye göre kelime listesini al
        const words = this.currentCategory === 'english' ? englishWords : spellingWords;
        const categoryWords = words[this.currentLevel];
        
        // Kelime listesi kontrolü
        if (!categoryWords || categoryWords.length === 0) {
            console.error('Kelime listesi bulunamadı:', this.currentCategory, this.currentLevel);
            alert('Bir hata oluştu. Ana menüye dönülüyor...');
            this.gameActive = false;
            this.gameScreen.style.display = 'none';
            this.startScreen.style.display = 'block';
            document.querySelector('.category-selection').style.display = 'block';
            document.querySelector('.difficulty-selection').style.display = 'none';
            return;
        }
        
        if (this.currentWordIndex >= categoryWords.length) {
            alert(`Tebrikler! Oyun bitti. Toplam puanınız: ${this.score}`);
            this.gameActive = false;
            return;
        }

        this.currentWord = categoryWords[this.currentWordIndex];
        this.currentWordElement.textContent = this.currentWord.tr;

        // Debug için log ekleyelim
        console.log('Mevcut kelime:', this.currentWord);

        // Yanlış kelimeler için diğer seçenekleri al
        const wrongWords = this.getWrongWords(3);
        console.log('Yanlış kelimeler:', wrongWords);

        // Tüm kelimeleri karıştır ve balonlar oluştur
        const allWords = [this.currentWord.en, ...wrongWords];
        this.shuffleArray(allWords);
        console.log('Tüm kelimeler:', allWords);

        // Balonları oluştur
        allWords.forEach((word, index) => {
            const balloon = new Balloon(
                word, 
                this.balloonsContainer, 
                (word, balloon) => this.checkAnswer(word, balloon),
                index,
                allWords.length
            );
            this.balloonsContainer.appendChild(balloon.element);
            
            // Kaçırılan balon eventi
            balloon.element.addEventListener('balloonMissed', () => {
                this.missedBalloonCount++;
                if (this.missedBalloonCount >= this.totalBalloons) {
                    this.clearBalloons();
                    this.showNextWord();
                }
            });
            
            // Her balon için farklı hız - arkadaki balonlar biraz daha hızlı
            const baseSpeed = 0.8;
            const speedVariation = 0.1; // Hız varyasyonunu azalttık
            const speed = baseSpeed + (Math.random() * speedVariation);
            balloon.animate(speed);
        });

        this.currentWordIndex++;
    }

    getWrongWords(count) {
        // Seçilen kategoriye göre kelime listesini al
        const words = this.currentCategory === 'english' ? englishWords : spellingWords;
        const categoryWords = words[this.currentLevel];
        
        if (this.currentCategory === 'spelling') {
            return this.currentWord.similar.slice(0, count);
        } else {
            const wrongWords = [];
            while (wrongWords.length < count) {
                const randomWord = categoryWords[Math.floor(Math.random() * categoryWords.length)].en;
                if (randomWord !== this.currentWord.en && !wrongWords.includes(randomWord)) {
                    wrongWords.push(randomWord);
                }
            }
            return wrongWords;
        }
    }

    checkAnswer(word, balloon) {
        if (!this.gameActive) return;

        if (word === this.currentWord.en) {
            this.score += 10;
            document.getElementById('score').textContent = this.score;
            this.soundManager.play('correct');
            
            // Tüm balonları temizle ve yeni kelimeye geç
            this.clearBalloons();
            this.showNextWord();
        } else {
            this.score = Math.max(0, this.score - 5);
            document.getElementById('score').textContent = this.score;
            this.soundManager.play('wrong');
            balloon.remove();
            this.missedBalloonCount++;
            
            // Tüm balonlar kaçırıldıysa veya patlatıldıysa
            if (this.missedBalloonCount >= this.totalBalloons) {
                this.clearBalloons();
                this.showNextWord();
            }
        }
    }

    clearBalloons() {
        const balloons = this.balloonsContainer.querySelectorAll('.balloon');
        balloons.forEach(balloon => balloon.remove());
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

// Oyunu başlat
window.addEventListener('DOMContentLoaded', () => {
    new WordGame();
}); 
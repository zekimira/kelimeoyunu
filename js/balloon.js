class Balloon {
    constructor(word, gameArea, onClickCallback, index, totalBalloons) {
        this.element = document.createElement('div');
        this.element.className = 'balloon';
        this.element.textContent = word;
        
        // Canlı renkler
        const colors = [
            '#FF1E1E', '#FF9900', '#FFD700', 
            '#32CD32', '#00BFFF', '#8A2BE2', 
            '#FF69B4', '#FF4500', '#00FF7F'
        ];
        
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const gradient = `linear-gradient(135deg, ${randomColor}, ${this.adjustBrightness(randomColor, -20)})`;
        
        this.element.style.background = gradient;
        this.element.style.boxShadow = `0 5px 15px ${randomColor}40`;
        
        // Grid bazlı pozisyonlama
        const isMobile = window.innerWidth <= 768;
        const columns = isMobile ? 2 : 4; // Mobilde 2, masaüstünde 4 sütun
        const columnWidth = gameArea.offsetWidth / columns;
        const column = index % columns;
        
        // Balonun yatay pozisyonu
        const minX = column * columnWidth + 20; // Kenarlardan minimum uzaklık
        const maxX = (column + 1) * columnWidth - 150; // Balon genişliğini çıkar
        const randomX = minX + (Math.random() * (maxX - minX));
        
        // Balonun dikey başlangıç pozisyonu
        const baseStartY = -100;
        const spacing = 120; // Dikey mesafeyi azalttık (200'den 120'ye)
        const randomStartY = baseStartY - (index * spacing) - (Math.random() * 50); // Rastgele mesafeyi de azalttık (100'den 50'ye)
        
        this.element.style.left = `${randomX}px`;
        this.element.style.top = `${randomStartY}px`;
        
        // Mobil için boyut ayarlaması
        if (isMobile) {
            this.element.style.minWidth = '100px';
            this.element.style.maxWidth = '130px';
            this.element.style.height = '120px';
            this.element.style.fontSize = '16px';
            this.element.style.padding = '15px';
        }
        
        this.element.addEventListener('click', () => onClickCallback(word, this));
    }

    adjustBrightness(hex, percent) {
        const num = parseInt(hex.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return `#${(1 << 24 | (R < 255 ? R < 1 ? 0 : R : 255) << 16 | (G < 255 ? G < 1 ? 0 : G : 255) << 8 | (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1)}`;
    }

    animate(speed) {
        let pos = parseInt(this.element.style.top);
        const baseSpeed = speed;
        const isMobile = window.innerWidth <= 768;
        const screenHeight = window.innerHeight;
        
        const animate = () => {
            if (!this.element.isConnected) return;
            
            if (pos >= screenHeight) {
                if (this.element.parentElement) {
                    this.element.dispatchEvent(new CustomEvent('balloonMissed'));
                    this.element.remove();
                }
                return;
            }
            
            // İlk iki balon normal hızda, diğerleri biraz daha hızlı
            const speedMultiplier = parseInt(this.element.style.top) < -200 ? 1.2 : 1;
            const currentSpeed = isMobile ? 
                baseSpeed * 0.8 * speedMultiplier : 
                baseSpeed * speedMultiplier;
            
            pos += currentSpeed;
            
            // Sallanma efekti - mobilde daha az sallanma
            const wobbleIntensity = isMobile ? 8 : 15;
            const wobble = Math.sin(pos * 0.02) * wobbleIntensity;
            this.element.style.transform = `translateX(${wobble}px)`;
            
            this.element.style.top = `${pos}px`;
            requestAnimationFrame(animate);
        };
        animate();
    }

    remove() {
        // Patlama animasyonu
        this.element.style.transform = 'scale(1.2)';
        this.element.style.opacity = '0';
        setTimeout(() => {
            if (this.element.parentElement) {
                this.element.remove();
            }
        }, 300);
    }
} 

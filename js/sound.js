class SoundManager {
    constructor() {
        this.sounds = {
            background: document.getElementById('background-music'),
            pop: document.getElementById('pop-sound'),
            correct: document.getElementById('correct-sound'),
            wrong: document.getElementById('wrong-sound')
        };

        // Ses seviyelerini ayarla
        this.sounds.background.volume = 0.3;
        this.sounds.pop.volume = 0.4;
        this.sounds.correct.volume = 0.5;
        this.sounds.wrong.volume = 0.4;
    }

    play(soundName) {
        const sound = this.sounds[soundName];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log('Ses çalma hatası:', e));
        }
    }

    stopAll() {
        Object.values(this.sounds).forEach(sound => {
            sound.pause();
            sound.currentTime = 0;
        });
    }
} 
class MediaPlayer {
    constructor(config) {
        const { element } = config;
        this.media = element;
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay(){
        this.media.paused === false 
            ? this.media.pause()
            : this.media.play()
    }
    mute(){
        this.media.muted = true
    }
    unmute(){
        this.media.muted = false
    }
    toggleMute(){
        this.media.muted = !this.media.muted;
    }
}


export default MediaPlayer;
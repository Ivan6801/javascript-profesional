import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector('video');
const button = document.querySelector('button');
const muteButton = document.getElementById('mute-botton');

muteButton.onclick = () => player.toggleMute();

const player = new MediaPlayer({ element: video });
button.onclick = () => video.paused ? player.play() : player.pause();

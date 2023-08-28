const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('current-time');
const volume = document.getElementById('volume');

// volume.value = 0.1;

play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
stop.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

audio.addEventListener('timeupdate', () => {
  currentTime.innerText = `\n ${(audio.currentTime).toFixed()}s`;
});

volume.addEventListener('change', () => (audio.volume = volume.value));

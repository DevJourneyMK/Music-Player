const audio = document.querySelector("audio");
const play = document.querySelector("#play");
const duration = document.querySelector("#duration");

isAudioPlaying = false;

function playAudio() {
  isAudioPlaying = true;
  audio.play();
  play.classList.replace("fa-play", "fa-pause");
  image.classList.add('rotating');
}

function pauseAudio() {
  isAudioPlaying = false;
  audio.pause();
  play.classList.replace("fa-pause", "fa-play");
  image.classList.remove('rotating');
}

play.addEventListener("click", function () {
  if (isAudioPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
});

const data = [
  {
    singerName: "Sophie Divine",
    songName: "All the way in to the desert",
    info: "image-1",
  },
  {
    singerName: "Jemma Barsby",
    songName: "In to the sky",
    info: "image-2",
  },
  {
    singerName: "Ecclestone",
    songName: "All the way to the moon",
    info: "image-3",
  },
];

const singer = document.getElementById("singer");
const mySong = document.getElementById("song");
const image = document.querySelector("img");
const myForward = document.getElementById("forward");
const myBackward = document.getElementById("backward");
const myProgressBar = document.querySelector(".progressbar");
const currentTime = document.getElementById('currentTime')

function loadSong(song) {
  singer.innerText = song.singerName;
  mySong.innerText = song.songName;
  image.src = `IMAGES/${song.info}.jpg`;
  audio.src = `AUDIO/${song.info}.mp3`;
}

loadSong(data[0]);

let songIndex = 1;

function nextSong() {
  if (songIndex > data.length - 1) {
    songIndex = 0;
  }

  loadSong(data[songIndex]);
  songIndex++;
  playAudio();
}

function preSong() {
  if (songIndex < 0) {
    songIndex = data.length - 1;
  }

  loadSong(data[songIndex]);
  songIndex--;
  playAudio();
}

myForward.addEventListener("click", nextSong);

myBackward.addEventListener("click", preSong);

audio.addEventListener("timeupdate", getData);

function getData(event) {
  let myCurrentTime = event.srcElement.currentTime;
  let myDuration = event.srcElement.duration;

  let audioDurationPercentage = (myCurrentTime / myDuration) * 100;
  myProgressBar.style.width = `${audioDurationPercentage}%`;


  const durationInMinutes = Math.floor(myDuration / 60);
  let durationInSeconds = Math.floor(myDuration % 60);

  if (durationInSeconds < 10) {
    durationInSeconds = `0${durationInSeconds}`;
  }

  let totalTime = `${durationInMinutes}:${durationInSeconds}`;
  duration.innerText = totalTime;





  // -----------------------------

  const currentTimeInMinutes = Math.floor(myCurrentTime / 60);
  let currentTimeInSeconds = Math.floor(myCurrentTime % 60);

  if (currentTimeInSeconds < 10) {
    currentTimeInSeconds = `0${currentTimeInSeconds}`;
  }

  let totalCurrentTime = `${currentTimeInMinutes}:${currentTimeInSeconds}`;
  currentTime.innerText = totalCurrentTime;

  // --------------


  
}

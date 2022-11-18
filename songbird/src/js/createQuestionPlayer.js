function createQuestionPlayer(audioPlayer, audioSrc, blockBEM) {
  const audio = new Audio(audioSrc);

  audio.addEventListener("loadeddata", () => {
    audioPlayer.querySelector(`.${blockBEM}__time-length`).textContent =
      getTimeCodeFromNum(audio.duration);
    audio.volume = 0.75;
  });

  const timeline = audioPlayer.querySelector(`.${blockBEM}__timeline`);
  timeline.addEventListener("click", (e) => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
    audio.currentTime = timeToSeek;
  });

  setInterval(() => {
    const progressBar = audioPlayer.querySelector(`.${blockBEM}__progress`);
    progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    audioPlayer.querySelector(`.${blockBEM}__time-current`).textContent =
      getTimeCodeFromNum(audio.currentTime);
  }, 500);

  const volumeSlider = audioPlayer.querySelector(`.${blockBEM}__volume-slider`);
  volumeSlider.addEventListener("click", (e) => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    audioPlayer.querySelector(`.${blockBEM}__volume-percentage`).style.width =
      newVolume * 100 + "%";
  });

  const playBtn = audioPlayer.querySelector(`.${blockBEM}__toggle-play-btn`);
  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      playBtn.firstElementChild.firstElementChild.setAttribute(
        "href",
        "./assets/icons/sprite.svg#icon-pause"
      );
      audio.play();
    } else {
      playBtn.firstElementChild.firstElementChild.setAttribute(
        "href",
        "./assets/icons/sprite.svg#icon-play"
      );
      audio.pause();
    }
  });

  const volumeBtn = audioPlayer.querySelector(`.${blockBEM}__volume-btn`);
  volumeBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;

    if (audio.muted) {
      volumeBtn.firstElementChild.firstElementChild.setAttribute(
        "href",
        "./assets/icons/sprite.svg#icon-volume-mute2"
      );
    } else {
      volumeBtn.firstElementChild.firstElementChild.setAttribute(
        "href",
        "./assets/icons/sprite.svg#icon-volume-medium"
      );
    }
  });

  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) {
      return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    } else {
      return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
      ).padStart(2, 0)}`;
    }
  }
  return audio;
}

export default createQuestionPlayer;

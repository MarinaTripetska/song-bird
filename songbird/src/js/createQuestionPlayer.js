function createQuestionPlayer(audio, audioPlayer, blockBEM) {
  const htmlTemple = `
              <div class="${blockBEM}__timeline">
                <div class="${blockBEM}__progress"></div>
              </div>

              <div class="${blockBEM}__controls">
                <div class="play-container">
                  <button type="button" class="${blockBEM}__toggle-play-btn">
                    <svg width="20" height="20">
                      <use href="./assets/icons/sprite.svg#icon-play" />
                    </svg>
                  </button>
                </div>

                <div class="${blockBEM}__time">
                  <div class="${blockBEM}__time-current">0:00</div>
                  <div class="${blockBEM}__time-divider">/</div>
                  <div class="${blockBEM}__time-length"></div>
                </div>

                <div class="${blockBEM}__vol-box">
                  <button type="button" class="${blockBEM}__vol-btn">
                    <svg width="20" height="20">
                      <use
                        href="./assets/icons/sprite.svg#icon-volume-medium"
                      />
                    </svg>
                  </button>

                  <div class="${blockBEM}__vol-slider">
                    <div class="${blockBEM}__vol-percentage"></div>
                  </div>
                </div>
              </div>
  `;
  audioPlayer.innerHTML = htmlTemple;

  const timeline = audioPlayer.querySelector(`.${blockBEM}__timeline`);
  const progressBar = audioPlayer.querySelector(`.${blockBEM}__progress`);
  const timeCurrent = audioPlayer.querySelector(`.${blockBEM}__time-current`);
  const volumeSlider = audioPlayer.querySelector(`.${blockBEM}__vol-slider`);
  const volPercentage = audioPlayer.querySelector(
    `.${blockBEM}__vol-percentage`
  );
  const playBtn = audioPlayer.querySelector(`.${blockBEM}__toggle-play-btn`);
  const spriteIcoPlay = playBtn.firstElementChild.firstElementChild;
  const volumeBtn = audioPlayer.querySelector(`.${blockBEM}__vol-btn`);
  const spriteIcoVolume = volumeBtn.firstElementChild.firstElementChild;

  audio.addEventListener("loadeddata", () => {
    audioPlayer.querySelector(`.${blockBEM}__time-length`).textContent =
      getTimeCodeFromNum(audio.duration);
    audio.volume = 0.75;
  });
  audio.addEventListener("pause", () => {
    spriteIcoPlay.setAttribute("href", "./assets/icons/sprite.svg#icon-play");
  });
  audio.addEventListener("play", () => {
    spriteIcoPlay.setAttribute("href", "./assets/icons/sprite.svg#icon-pause");
  });

  timeline.addEventListener("click", (e) => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
    audio.currentTime = timeToSeek;
  });

  setInterval(() => {
    progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    timeCurrent.textContent = getTimeCodeFromNum(audio.currentTime);
  }, 500);

  volumeSlider.addEventListener("click", (e) => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    volPercentage.style.width = newVolume * 100 + "%";
  });

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  volumeBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;

    if (audio.muted) {
      spriteIcoVolume.setAttribute(
        "href",
        "./assets/icons/sprite.svg#icon-volume-mute2"
      );
    } else {
      spriteIcoVolume.setAttribute(
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
}

export default createQuestionPlayer;

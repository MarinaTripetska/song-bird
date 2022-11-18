function createAnswerDesc(bird) {
  return `
          <div>
            <div>
              <img src="${bird.image}" alt="bird photo">
              <div>
                <h3>${bird.name}</h3>
                <p>${bird.species}</p>

                <div class="answer-audio audio-player">
                  <div class="audio-player__timeline">
                    <div class="audio-player__progress"></div>
                  </div>

                  <div class="audio-player__controls">
                    <div>
                      <button type="button" class="audio-player__toggle-play-btn">
                        <svg width="20" height="20">
                          <use href="./assets/icons/sprite.svg#icon-play" />
                        </svg>
                      </button>
                    </div>

                    <div class="audio-player__time">
                      <div class="audio-player__time-current">0:00</div>
                      <div class="audio-player__time-divider">/</div>
                      <div class="audio-player__time-length"></div>
                    </div>

                    <div class="audio-player__volume-box">
                      <button type="button" class="audio-player__volume-btn">
                        <svg width="20" height="20">
                          <use
                            href="./assets/icons/sprite.svg#icon-volume-medium"
                          />
                        </svg>
                      </button>

                      <div class="audio-player__volume-slider">
                        <div class="audio-player__volume-percentage"></div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <p>
                ${bird.description}
              </p>
          </div>`;
}

export default createAnswerDesc;

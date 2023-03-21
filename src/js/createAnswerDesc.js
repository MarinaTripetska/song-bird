function createAnswerDesc(bird) {
  return `
            <div class="description__thumb">
              <div class="description__img-box">
                <img class="description__img" src="${bird.image}" alt="bird photo">
              </div>

              <div class="description__header">
                <h3 class="description__title">${bird.name}</h3>
                <p class="description__species">${bird.species}</p>

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
              <p class="description__desc">
                ${bird.description}
              </p>

          `;
}

export default createAnswerDesc;

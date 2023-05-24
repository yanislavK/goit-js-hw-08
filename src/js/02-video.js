import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
//=====================================

const videoPlayer = new Player(`vimeo-player`);

videoPlayer.on(
  `timeupdate`,
  throttle(time => {
    localStorage.setItem(`update-current-time`, time.seconds);
  }, 1000)
);

videoPlayer.setCurrentTime(localStorage.getItem(`update-current-time`))
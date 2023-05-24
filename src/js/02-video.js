import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
//=====================================

const videoPlayer = new Player('vimeo-player');

videoPlayer.on(
  'timeupdate',
  throttle(time => {
    localStorage.setItem('videoplayer-current-time', time.seconds);

    console.log(time);
  }, 1000)
);

videoPlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

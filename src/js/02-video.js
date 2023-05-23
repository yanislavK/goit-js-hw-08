import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const videoPlayer = new Player('vimeo-player');

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const API_KEY = 'YOUR_API_KEY';
const VIDEO_ID = 'YOUR_UNLISTED_VIDEO_ID';


function onYouTubeIframeAPIReady() {
    const player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: VIDEO_ID,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}


function onPlayerReady(event) {
    event.target.playVideo();
}


function onPlayerStateChange(event) {
    
}


function onYouTubeIframeAPIReady() {
    const player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: VIDEO_ID,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}


(function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})();

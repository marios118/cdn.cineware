document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('video_id');
    const seasonNumber = urlParams.get('s');
    const episodeNumber = urlParams.get('e');
    const loadingScreen = document.getElementById('loading-screen');
    const videoContainer = document.getElementById('video-container');
    const videoFrame = document.getElementById('video-frame');

    if (videoId === '65334' && seasonNumber === '6' && episodeNumber === '2') {
        videoFrame.src = "https://goofy-banana.com/e/uf69qbzvyzqf";
    } else if (videoId && seasonNumber && episodeNumber) {
        videoFrame.src = `https://multiembed.mov/directstream.php?video_id=${videoId}&tmdb=1&s=${seasonNumber}&e=${episodeNumber}`;
    } else if (videoId) {
        videoFrame.src = `https://multiembed.mov/directstream.php?video_id=${videoId}&tmdb=1`;
    } else {
        loadingScreen.innerText = 'Error: Video not found or invalid parameters.';
        return;
    }

    setTimeout(() => {  
        loadingScreen.style.display = "none";
        videoContainer.style.display = "block";
        videoFrame.style.pointerEvents = "auto";
    }, 2000);
});

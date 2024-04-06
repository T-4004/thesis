document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('video-feed');

    videoElement.onload = () => {
        console.log('Video feed loaded');
    };

    videoElement.onerror = () => {
        console.error('Error loading video feed');
    };
    
})


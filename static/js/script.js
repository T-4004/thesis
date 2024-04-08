document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('video-feed');

    videoElement.onload = () => {
        console.log('Video feed loaded');
    };

    videoElement.onerror = () => {
        console.error('Error loading video feed');
    };

    // Check if the video feed is loaded and then show the refresh button
    videoElement.addEventListener('load', () => {
        const refreshButtonContainer = document.getElementById('refresh-button-container');
        refreshButtonContainer.style.display = 'block'; // Show the refresh button
    });
});

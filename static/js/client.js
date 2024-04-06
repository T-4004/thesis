// This is a new file

// Function to check the face detection status from the server
function checkFaceDetectionStatus() {
    // Perform an AJAX request to the server endpoint that provides the face detection status
    $.ajax({
        url: '/api/face-detection-status', // Assuming the endpoint is '/api/face-detection-status'
        type: 'GET',
        success: function(response) {
            // Handle the response from the server
            if (response.status === 'success') {
                // If the face detection is successful, do something with the result
                console.log('Face detection successful:', response.data);
            } else {
                // If the face detection is not successful, handle the error
                console.error('Face detection failed:', response.error);
            }
        },
        error: function(xhr, status, error) {
            // Handle any error that occurred during the AJAX request
            console.error('Error checking face detection status:', error);
        }
    });
}

// Call the checkFaceDetectionStatus function periodically
setInterval(checkFaceDetectionStatus, 5000); // Check every 5 seconds
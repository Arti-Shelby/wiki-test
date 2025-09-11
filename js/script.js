// JavaScript to change the background image on selection change
const backgroundPicker = document.getElementById('backgroundPicker');
const body = document.body;

// Event listener for when the user selects an option
backgroundPicker.addEventListener('change', function() {
    const selectedImage = backgroundPicker.value; // Get the selected value (image file name)
    body.style.backgroundImage = `url('${selectedImage}')`; // Update the body background
    body.style.backgroundSize = "cover"; // Ensure the background image covers the page
    body.style.backgroundPosition = "center"; // Center the image
    body.style.backgroundAttachment = "fixed"; // Keep the background fixed while scrolling
});

// Set default background image (optional)
body.style.backgroundImage = "url('./img/skul-profile-backgrounds-rare.jpg')";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundAttachment = "fixed";
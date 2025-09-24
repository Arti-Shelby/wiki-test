// Background picker

const backgroundPicker = document.getElementById('backgroundPicker');
const body = document.body;

backgroundPicker.addEventListener('change', function() {
    const selectedImage = backgroundPicker.value; 
    body.style.backgroundImage = `url('${selectedImage}')`; 
    body.style.backgroundSize = "cover"; 
    body.style.backgroundPosition = "center"; 
    body.style.backgroundAttachment = "fixed"; 
});

body.style.backgroundImage = "url('./img/skul-profile-backgrounds-rare.jpg')";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundAttachment = "fixed";

// Header animation

let lastScroll = 0;
const header = document.querySelector(".header");

setTimeout(() => {
    window.addEventListener("scroll", () => {
        const currentScrole = window.pageYOffset;

        if (currentScrole > lastScroll && currentScrole > 100) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }

        lastScroll = currentScrole;
    });
}, 700);
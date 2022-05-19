const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');

const videoWorks = !!document.createElement('video').canPlayType;
if (videoWorks) {
    video.controls = false;
    videoControls.classList.remove('hidden');
}



function Subscribe() {
    var email = document.getElementById("Email_Subscribe").value;
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email === '') {
        alert("Please fill Your Email..");
        return false;
    } else if (!(email).match(validEmail)) {
        alert("Invalid Email!!!!");
        return false;
    } else {
        alert("Subscribed\nThank You for Subscribing our Website");
        return true;
    }
}
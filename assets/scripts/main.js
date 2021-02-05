// main.js

// TODO

var volumeInput = document.getElementById("volume-number");
var volumeSlider = document.getElementById("volume-slider");
var honkButton = document.getElementById("honk-btn");
var audio = document.getElementById("horn-sound");

var soundImage = document.getElementById("sound-image");
var airHorn = document.getElementById("radio-air-horn");
var carHorn = document.getElementById("radio-car-horn");
var partyHorn = document.getElementById("radio-party-horn");

// event listeners for volume inputs
volumeInput.addEventListener("change", function() {
    setVolume(this.value);
});
volumeSlider.addEventListener("change", function() {
    setVolume(this.value);
});

// event listener for buttion event
honkButton.addEventListener("click", playAudio);

// event listeners for horn selection
airHorn.addEventListener("click", function() {
    setHorn(this.id);
});
carHorn.addEventListener("click", function() {
    setHorn(this.id);
});
partyHorn.addEventListener("click", function() {
    setHorn(this.id);
});

function setVolume(volume) {
    const factor = 0.01;
    audio.volume = volume*factor;

    volumeInput.value = volume;
    volumeSlider.value = volume;
    var volumeImage = document.getElementById("volume-image");
    if (volume >= 67) {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
        honkButton.disabled = false;
    }
    else if (volume >= 34) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
        honkButton.disabled = false;
    }
    else if (volume >= 1) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
        honkButton.disabled = false;
    }
    else {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        honkButton.disabled = true;
    }
}

function playAudio(event) {
    event.preventDefault();
    audio.play();
}

function setHorn(id) {
    if (id == "radio-air-horn") {
        audio.src = "./assets/media/audio/air-horn.mp3";
        soundImage.src = "./assets/media/images/air-horn.svg";
    }
    else if (id == "radio-car-horn") {
        audio.src = "./assets/media/audio/car-horn.mp3";
        soundImage.src = "./assets/media/images/car.svg";
    }
    else if (id == "radio-party-horn") {
        audio.src = "./assets/media/audio/party-horn.mp3";
        soundImage.src = "./assets/media/images/party-horn.svg";
    }
}
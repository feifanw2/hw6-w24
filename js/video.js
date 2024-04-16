

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });



document.addEventListener("DOMContentLoaded", function() {
    
    var playButton = document.getElementById("play");
    var pauseButton = document.getElementById("pause");
    var slowerButton = document.getElementById("slower");
    var fasterButton = document.getElementById("faster");
    var skipButton = document.getElementById("skip");

	var volumeSlider = document.getElementById("slider");
	var volumeSpan= document.getElementById("volume");

    var muteButton = document.getElementById("mute");
	var video = document.getElementById("player1");
	

	playButton.addEventListener("click", function() {
		video.play(); 
		volumeSpan.textContent = volumeSlider.value + "%";
    });
    volumeSlider.addEventListener("input", function() {
        volumeSpan.textContent = volumeSlider.value + "%";
        video.volume = volumeSlider.value / 100;
        if (video.muted && volumeSlider.value > 0) {
            video.muted = false;
            muteButton.textContent = "Mute";
        }
    });
    function updateVolumeInformation() {
        if (video.muted) {
            volumeSpan.textContent = "0";
            volumeSlider.value = 0;
        } else {
            volumeSpan.textContent = volumeSlider.value;
        }
    }
    
	pauseButton.addEventListener("click", function() {
        video.pause();
    });

	slowerButton.addEventListener("click", function() {
        video.playbackRate -= 0.1; 
		console.log(video.playbackRate);
    });
	fasterButton.addEventListener("click", function() {
        video.playbackRate += 0.1; 
		console.log(video.playbackRate);
    });
	skipButton.addEventListener("click", function() {
        video.currentTime += 10; 
		if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        }
		console.log( video.currentTime);
    });
    muteButton.addEventListener("click", function() {
        video.muted = !video.muted;
        updateVolumeInformation();
        if (video.muted) {
            muteButton.textContent = "Unmute";
            volumeSlider.value = 0;
        } else {
            muteButton.textContent = "Mute";
        }
    });
}); 

document.addEventListener('DOMContentLoaded', function () {
	const video = document.getElementById('player1');
	const volumeSlider = document.getElementById('vintage');

	volumeSlider.addEventListener('click', function () {
	video.classList.add('oldSchool');
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const video = document.getElementById('player1');
	const removeButton = document.getElementById('orig');

	removeButton.addEventListener('click', function () {
		video.classList.remove('oldSchool');
	});
})
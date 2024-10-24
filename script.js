const audio = document.getElementById("audio");
const audioSource = document.getElementById("audioSource");
const playButton = document.getElementById("playButton");
const musicListItems = document.querySelectorAll("#musicList li");

let selectedMusic = musicListItems[0].getAttribute("data-src");
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const sliders = document.querySelectorAll(".slider");

// Ajustements pour une sensibilité accrue
analyser.fftSize = 2048; // Taille réduite pour des mises à jour plus rapides
analyser.minDecibels = -90; // Augmente la sensibilité pour les sons faibles
analyser.maxDecibels = -10; // Limite la valeur maximale

function changeAndPlayMusic(selectedMusic) {
	audioSource.src = selectedMusic;

	audio.load();
	audio
		.play()
		.then(() => {
			console.log("Audio is playing");
			audioContext.resume().then(() => {
				const source = audioContext.createMediaElementSource(audio);
				source.connect(analyser);
				analyser.connect(audioContext.destination);
				animateSliders();
			});
		})
		.catch((error) => {
			console.error("Error playing audio:", error);
		});
}

musicListItems.forEach((item) => {
	item.addEventListener("click", function () {
		selectedMusic = this.getAttribute("data-src");
		changeAndPlayMusic(selectedMusic);
	});
});

playButton.addEventListener("click", function () {
	changeAndPlayMusic(selectedMusic);
});

function animateSliders() {
	const dataArray = new Uint8Array(analyser.frequencyBinCount);

	function updateSliders() {
		analyser.getByteFrequencyData(dataArray);

		sliders.forEach((slider, index) => {
			const value = dataArray[index] || 0;
			slider.style.height = `${value / 2}px`; // Ajustement pour plus de réactivité
		});

		requestAnimationFrame(updateSliders);
	}

	updateSliders();
}

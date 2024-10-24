const audio = document.getElementById("audio");
const audioSource = document.getElementById("audioSource");
const playButton = document.getElementById("playButton");
const musicListItems = document.querySelectorAll("#musicList li"); // Sélectionne tous les éléments de la liste

let selectedMusic = musicListItems[0].getAttribute("data-src"); // Initialiser avec la première musique
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const sliders = document.querySelectorAll(".slider"); // Sélectionne tous les sliders

// Fonction pour changer et jouer la musique
function changeAndPlayMusic(selectedMusic) {
	audioSource.src = selectedMusic;

	// Mettre à jour la source audio et démarrer le contexte
	audio.load();
	audio
		.play()
		.then(() => {
			console.log("Audio is playing");
			// Démarrer l'analyseur après que la musique ait commencé à jouer
			audioContext.resume().then(() => {
				const source = audioContext.createMediaElementSource(audio);
				source.connect(analyser);
				analyser.connect(audioContext.destination);
				animateSliders(); // Appel de la fonction pour animer les sliders
			});
		})
		.catch((error) => {
			console.error("Error playing audio:", error);
		});
}

// Écoute l'événement de clic sur chaque élément de la liste de musiques
musicListItems.forEach((item) => {
	item.addEventListener("click", function () {
		selectedMusic = this.getAttribute("data-src"); // Récupère le chemin de la musique à partir de l'attribut data-src
		changeAndPlayMusic(selectedMusic);
	});
});

// Écoute l'événement de clic sur le bouton de lecture
playButton.addEventListener("click", function () {
	changeAndPlayMusic(selectedMusic); // Joue la musique sélectionnée ou la première musique par défaut
});

// Fonction pour animer les sliders
function animateSliders() {
	const dataArray = new Uint8Array(analyser.frequencyBinCount);

	function updateSliders() {
		analyser.getByteFrequencyData(dataArray);

		sliders.forEach((slider, index) => {
			const value = dataArray[index] || 0; // Obtenir la valeur correspondante du tableau
			slider.style.height = `${value / 2}px`; // Ajuster la hauteur du slider en fonction de la fréquence
		});

		requestAnimationFrame(updateSliders); // Continuer la mise à jour
	}

	updateSliders(); // Démarrer la mise à jour des sliders
}

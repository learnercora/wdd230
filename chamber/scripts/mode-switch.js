const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const checkbox = document.querySelector('input[type="checkbox"]');
const card = document.querySelectorAll(".card");
const h3 = document.querySelectorAll("h3");


if (checkbox.checked) {
	main.classList.remove('light-mode-for-main');
	main.classList.add('dark-mode-for-main');
	card.forEach((cardElement) => {
		cardElement.classList.remove('light-mode-for-card');
		cardElement.classList.add('dark-mode-for-card');
	});
	h3.forEach((h3Element) => {
		h3Element.classList.remove('light-mode-for-h3');
		h3Element.classList.add('dark-mode-for-h3');
	});
} else {
	main.classList.remove('dark-mode-for-main');
	main.classList.add('light-mode-for-main');
	card.forEach((cardElement) => {
		cardElement.classList.remove('dark-mode-for-card');
		cardElement.classList.add('light-mode-for-card');
	});
	h3.forEach((h3Element) => {
		h3Element.classList.remove('dark-mode-for-h3');
		h3Element.classList.add('light-mode-for-h3');
	});
}

modeButton.addEventListener("click", () => {
	if (checkbox.checked) {
		main.classList.remove('light-mode-for-main');
		main.classList.add('dark-mode-for-main');
		// main.style.background = '#011638';
		card.forEach((cardElement) => {
			cardElement.classList.remove('light-mode-for-card');
			cardElement.classList.add('dark-mode-for-card');
			// cardElement.style.background = '#2e294e';
			// cardElement.style.color = "#fff";
			// cardElement.style.border = "solid 3px #e8c1c5";
		});
		h3.forEach((h3Element) => {
			h3Element.classList.remove('light-mode-for-h3');
			h3Element.classList.add('dark-mode-for-h3');
			// h3Element.style.color = "#fff";
		});
	} else {
		main.classList.remove('dark-mode-for-main');
		main.classList.add('light-mode-for-main');
		// main.style.background = '#fff';
		// main.style.color = "#2e294e";
		card.forEach((cardElement) => {
			cardElement.classList.remove('dark-mode-for-card');
			cardElement.classList.add('light-mode-for-card');
			// cardElement.style.background = '#fff';
			// cardElement.style.color = "#000";
			// cardElement.style.border = "solid 3px #2e294e";
		});
		h3.forEach((h3Element) => {
			h3Element.classList.remove('dark-mode-for-h3');
			h3Element.classList.add('light-mode-for-h3');
			// h3Element.style.color = "#2e294e";
		});
	}
});
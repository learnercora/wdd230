const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const checkbox = document.querySelector('input[type="checkbox"]');
const card = document.querySelectorAll(".card");
const h3 = document.querySelectorAll("h3");

if (checkbox.checked) {
	main.style.background = '#011638';
	card.forEach((cardElement) => {
		cardElement.style.background = '#2e294e';
		cardElement.style.color = "#fff";
		cardElement.style.border = "solid 3px #e8c1c5";
	});
	h3.forEach((h3Element) => {
		h3Element.style.color = "#fff";
	});
} else {
	main.style.background = '#eceaed';
	main.style.color = "#2e294e";
	card.forEach((cardElement) => {
		cardElement.style.background = '#eceaed';
		cardElement.style.color = "#000";
		cardElement.style.border = "solid 3px #2e294e";
	});
	h3.forEach((h3Element) => {
		h3Element.style.color = "#2e294e";
	});
}

modeButton.addEventListener("click", () => {
	if (checkbox.checked) {
		main.style.background = '#011638';
		card.forEach((cardElement) => {
			cardElement.style.background = '#2e294e';
			cardElement.style.color = "#fff";
			cardElement.style.border = "solid 3px #e8c1c5";
		});
		h3.forEach((h3Element) => {
			h3Element.style.color = "#fff";
		});
	} else {
		main.style.background = '#eceaed';
		main.style.color = "#2e294e";
		card.forEach((cardElement) => {
			cardElement.style.background = '#eceaed';
			cardElement.style.color = "#000";
			cardElement.style.border = "solid 3px #2e294e";
		});
		h3.forEach((h3Element) => {
			h3Element.style.color = "#2e294e";
		});
	}
});
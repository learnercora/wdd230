const gridbutton = document.querySelector("#grid-btn");
const listbutton = document.querySelector("#list-btn");
const display = document.querySelector("#companies");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("show-in-grid");
	display.classList.remove("show-in-list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("show-in-list");
	display.classList.remove("show-in-grid");
}

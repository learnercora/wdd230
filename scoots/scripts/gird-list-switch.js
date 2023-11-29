const gridbutton = document.querySelector("#grid-btn");
const listbutton = document.querySelector("#list-btn");
const display = document.querySelector("#companies");

gridbutton.addEventListener("click", () => {
	display.classList.add("show-in-grid");
	display.classList.remove("show-in-list");
});

listbutton.addEventListener("click", ()=>{
    display.classList.add("show-in-list");
	display.classList.remove("show-in-grid");
});
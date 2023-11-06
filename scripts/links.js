const baseURL = "https://learnercora.github.io/wdd230/";
const linksURL = "https://learnercora.github.io/wdd230/data/links.json";

const menu = document.querySelector('section ul');
// console.log(menu);

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    weeks.forEach( (week) => {
        let ulE = document.createElement("ul");
        let liE = document.createElement("li");
        let aE = document.createElement("a");

        liE.innerHTML = `${week.lesson}`;
        console.log(week)
        // aE.setAttribute("href", "123");
        // aE.setAttribute("target", "_blank");


        ulE.appendChild(liE);
        ulE.appendChild(aE);

        menu.appendChild(ulE);
    });
}

getLinks();
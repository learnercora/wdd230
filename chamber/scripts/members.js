const baseURL = "https://learnercora.github.io/wdd230/chamber";
const linksURL = "https://learnercora.github.io/wdd230/chamber/data/members.json";

const companiesE = document.querySelector('#companies');

async function getCompanies() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    companies.forEach( (company) => {
        console.log(company);
        // create li
        // let liE = document.createElement("li");

        // liE.innerHTML = `Week ${company.lesson}: `;

        // create a
        // company.links.forEach( (link, index) => {
        //     let aE = document.createElement("a");

        //     aE.innerHTML = link.title;            
        //     aE.setAttribute("href", link.url);
        //     aE.setAttribute("target", "_blank");
            
        //     liE.appendChild(aE);
            
        //     // add "|"" between link
        //     if ( company.links.length - index > 1) {
        //         liE.appendChild(document.createTextNode(" | "));;
        //     }

            
        // })
        // companiesE.appendChild(liE);
    });
}

getCompanies();
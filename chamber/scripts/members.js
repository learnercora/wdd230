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
        // create section
        let sectionE = document.createElement("section");
        let imgE = document.createElement("img");
        let h2E = document.createElement("h2");
        let p1E = document.createElement("p");
        let p2E = document.createElement("p");
        let aE = document.createElement("a");

        imgE.setAttribute("src", `./images/${company.imageFileName}`);
        imgE.setAttribute("alt", `company logo of ${company.names}`);
        imgE.setAttribute("loading", "lazy");
        imgE.setAttribute("width", "200px");
        imgE.setAttribute("height", "250px");

        h2E.innerHTML = company.names;

        p1E.innerHTML = `${company.addresses}`;
        p2E.innerHTML = `${company.phone}`;

        aE.innerHTML = `${company.names} Website`;
        aE.setAttribute("href", company.webUrl);
        aE.setAttribute("target", "_blank");

        sectionE.appendChild(imgE);
        sectionE.appendChild(h2E);
        sectionE.appendChild(p1E);
        sectionE.appendChild(p2E);
        sectionE.appendChild(aE);
        
        companiesE.appendChild(sectionE);
    });
    
}

getCompanies();
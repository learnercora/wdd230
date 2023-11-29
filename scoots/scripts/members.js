const baseURL = "https://learnercora.github.io/wdd230/chamber";
const linksURL = "https://learnercora.github.io/wdd230/chamber/data/members.json";
const darkmode = document.querySelector('input[type="checkbox"]');

const companiesE = document.querySelector('#companies');

async function getCompanies() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    companies.forEach( (company) => {
        // create elements
        let sectionE = document.createElement("section");
        let imgE = document.createElement("img");
        let h2E = document.createElement("h3");
        let p1E = document.createElement("p");
        let p2E = document.createElement("p");
        let p3E = document.createElement("p");
        let p4E = document.createElement("p");
        let aE = document.createElement("a");

        sectionE.classList.add("card");

        imgE.setAttribute("src", `./images/${company.imageFileName}`);
        imgE.setAttribute("alt", `company logo of ${company.names}`);
        imgE.setAttribute("loading", "lazy");
        imgE.style.maxWidth = "20rem";

        h2E.innerHTML = company.names;

        p1E.innerHTML = `Membership Level: ${company.membershipLevel}`;
        p2E.innerHTML = `${company.addresses}`;
        p3E.innerHTML = `${company.phone}`;
        p4E.innerHTML = `Build Year: ${company.buildYear}`;

        aE.innerHTML = `${company.webUrl}`;
        aE.setAttribute("href", company.webUrl);
        aE.setAttribute("target", "_blank");

        sectionE.appendChild(imgE);
        sectionE.appendChild(h2E);
        sectionE.appendChild(p1E);
        sectionE.appendChild(p2E);
        sectionE.appendChild(p3E);
        sectionE.appendChild(p4E);
        sectionE.appendChild(aE);

        companiesE.appendChild(sectionE);
    });
}

getCompanies();
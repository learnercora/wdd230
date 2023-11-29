const baseURL = "https://learnercora.github.io/wdd230/scoots";
const linksURL = "https://learnercora.github.io/wdd230/scoots/data/rental-options.json";

const rentalTbodyE = document.querySelector('#rental-price-table-tbody');

async function getRentalInfo() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data.rentalPricing);
    displayRentalOptions(data.rentalPricing);
}

const displayRentalOptions = (rentals) => {
    // console.log(rentals);
    rentals.forEach( (rental) => {
        // create elements
        let trE = document.createElement("tr");
        let th1E = document.createElement("th");
        let imgE = document.createElement("img");
        let th2E = document.createElement("th");
        let td1E = document.createElement("td");
        let td2E = document.createElement("td");
        let td3E = document.createElement("td");
        let td4E = document.createElement("td");
        let td5E = document.createElement("td");

        imgE.setAttribute("src", rental.imageFileUrl);
        imgE.setAttribute("alt", `sample image of ${rental.rentalType}`);
        imgE.setAttribute("loading", "lazy");
        imgE.style.width = "300px";

        th2E.innerHTML = rental.rentalType;
        td1E.innerHTML = rental.maxPerson;
        td2E.innerHTML = rental.reservation.halfDay3h;
        td3E.innerHTML = rental.reservation.fullDay;
        td4E.innerHTML = rental.walkIn.halfDay3h;
        td5E.innerHTML = rental.walkIn.fullDay;

        th1E.appendChild(imgE);

        trE.appendChild(th1E);
        trE.appendChild(th2E);
        trE.appendChild(td1E);
        trE.appendChild(td2E);
        trE.appendChild(td3E);
        trE.appendChild(td4E);
        trE.appendChild(td5E);

        rentalTbodyE.appendChild(trE);
    });
}

getRentalInfo();
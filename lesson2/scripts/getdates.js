function formatDateToTwoDigits(value) {
    if (value < 10) {
        return `0${value}`
    } else {
        return `${value}`
    }
}

let oLastModif = new Date(document.lastModified);
let date = formatDateToTwoDigits(oLastModif.getDate());
let month = formatDateToTwoDigits(oLastModif.getMonth()+1);
let year = formatDateToTwoDigits(oLastModif.getFullYear());
let hh = formatDateToTwoDigits(oLastModif.getHours());
let mm = formatDateToTwoDigits(oLastModif.getMinutes());
let ss = formatDateToTwoDigits(oLastModif.getSeconds());

const lastModifiedElement = document.querySelector('#lastModified');

// console.log(oLastModif,date,month,year,hh,mm,ss)
lastModifiedElement.innerHTML = 
    `©${new Date().getFullYear()} | 
    Lin, Chih-Yun | 
    Last Updated: ${month}/${date}/${year} ${hh}:${mm}:${ss}`;

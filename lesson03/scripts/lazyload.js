// getdates
const yearElement = document.querySelector('footer p');
yearElement.innerHTML = `©${new Date().getFullYear()}<br/>Lin, Chih-Yun<br/>Taiwan`;

const lastModifiedElement = document.querySelector('#lastModified');
let oLastModif = new Date(document.lastModified);
lastModifiedElement.innerHTML = oLastModif

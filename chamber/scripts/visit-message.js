
const visitMessageElement = document.querySelector('#visit-message');
let lastVisitTime = Number(window.localStorage.getItem("numVisits-c-discover")) || 0;

const oneDay = 24 * 60 * 60 * 1000; 
const currentVisitTime = Date.now();
// console.log("currentVisitTime",currentVisitTime);
// console.log("lastVisitTime",lastVisitTime);

if (lastVisitTime === 0) { //first visit
    visitMessageElement.innerHTML = "Welcome! Let us know if you have any questions.";
} else if ( (currentVisitTime - lastVisitTime) < oneDay ) { //visits is less than a day
    visitMessageElement.innerHTML = "Back so soon! Awesome!";
} else {
    const diffDays = Math.round(Math.abs((currentVisitTime - lastVisitTime) / oneDay));
    const dayUnit = diffDays > 1 ? "days" : "day";
    visitMessageElement.innerHTML = `You last visited ${diffDays} ${dayUnit} ago.`;
}

localStorage.setItem("numVisits-c-discover", currentVisitTime);

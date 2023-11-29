
// JavaScript to set the current date and time
window.onload = function() {
    const timestampField = document.getElementById("timestamp");
    const now = new Date();
    const timestamp = now.toISOString().slice(0, 19).replace("T", " ");
    // console.log("timestamp",timestamp)
    timestampField.value = timestamp;
};
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const goToPersonRoute = () => {
    window.location.href = "/person"; // Navigate to the '/person' route
}

const goToMenuRoute = () => {
    window.location.href = "/menu"; // Navigate to the '/menu' route
}

button1.addEventListener("click", goToPersonRoute);
button2.addEventListener("click", goToMenuRoute);


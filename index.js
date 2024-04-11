const button1 = document.getElementById("button1");
const button2 = document.querySelector(".button2"); // Using querySelector to select the button by class

const goToPersonRoute = () => {
    const link = "https://hotels-23w1.onrender.com/person"; 
    window.location.href = link;
}

const goToMenuRoute = () => {
    const link = "https://hotels-23w1.onrender.com/menu"; 
    window.location.href = link;
}

button1.addEventListener("click", goToPersonRoute);
button2.addEventListener("click", goToMenuRoute);


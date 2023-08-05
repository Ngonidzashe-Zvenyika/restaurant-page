import logo from "./chef.jpg";

export default function home() {
    const container = document.createElement("div");
    container.classList.add("home-container");

    const chef = document.createElement("img");
    chef.classList.add("chef");
    chef.src = logo;
    chef.alt = "chef";

    const aboutHeading = document.createElement("h2");
    aboutHeading.innerText = "About Us";
    const about = document.createElement("p");
    about.innerText = "Billy loved every moment of bringing people together with a tasty meal and we strive to continue living his dream. It's not just about food, it's about family. We welcome you to join us :)";

    const hoursHeading = document.createElement("h2");
    hoursHeading.innerText = "Hours";
    const hours = document.createElement("p");
    hours.innerText = "Mon/Wed: 0800 - 1600\n Tue/Thur: 1000 - 1800\n Sat: 1300 - 2300\n Sun: 1200 - 1400";

    container.appendChild(chef);
    container.appendChild(aboutHeading);
    container.appendChild(about);
    container.appendChild(hoursHeading);
    container.appendChild(hours);
    return container;
}
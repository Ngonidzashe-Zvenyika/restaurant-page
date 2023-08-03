export default function home() {
    const div = document.createElement("div");
    div.classList.add("home-container");

    const aboutHeading = document.createElement("h2");
    aboutHeading.innerText = "About Us";
    const about = document.createElement("p");
    about.innerText = "Billy loved every moment of bringing people together with a tasty meal and we strive to continue living his dream. It's not just about food, it's about family.";

    const hoursHeading = document.createElement("h2");
    hoursHeading.innerText = "Hours";
    const hours = document.createElement("p");
    hours.innerText = "Mon: 8am - 4pm \n Tue: 10am - 6pm \n Wed: 8am - 4pm \n Thu: 10am - 6pm \n Fri: 8am - 2pm \n Sat: 1pm - 11pm \n Sun: 12pm - 2pm \n";

    const name = document.createElement("h2");
    name.innerText = "We hope to see you soon!";

    div.appendChild(aboutHeading);
    div.appendChild(about);
    div.appendChild(hoursHeading);
    div.appendChild(hours);
    div.appendChild(name);
    return div;
}
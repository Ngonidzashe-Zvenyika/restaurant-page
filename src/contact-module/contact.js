import call from "./call.svg";
import  mail from "./mail.svg";
import home from "./home.svg";
import location from "./location.png";

export default function contacts() {
    const contact = document.createElement("div");
    contact.classList.add("contact-container");

    const numberContainer = document.createElement("div");
    numberContainer.classList.add("icon-container");
    const numberIcon = document.createElement("img");
    numberIcon.classList.add("icon");
    numberIcon.src = call;
    const number = document.createElement("p");
    number.innerText = "+61 37 433 8753";
    numberContainer.appendChild(numberIcon);
    numberContainer.appendChild(number);

    const emailContainer = document.createElement("div");
    emailContainer.classList.add("icon-container");
    const emailIcon = document.createElement("img");
    emailIcon.classList.add("icon");
    emailIcon.src = mail;
    const email = document.createElement("p");
    email.innerText = "billysburgers@gmail.com";
    emailContainer.appendChild(emailIcon);
    emailContainer.appendChild(email);

    const addressContainer = document.createElement("div");
    addressContainer.classList.add("icon-container");
    const addressIcon = document.createElement("img");
    addressIcon.classList.add("icon");
    addressIcon.src = home;
    const address = document.createElement("p");
    address.innerText = "422 Nemo St, Victoria, Australia"
    addressContainer.appendChild(addressIcon);
    addressContainer.appendChild(address);

    const pin = document.createElement("img");
    pin.classList.add("location-pin");
    pin.src = location;
    pin.alt = "Billy's Burgers Location."

    div.appendChild(numberContainer);
    div.appendChild(emailContainer);
    div.appendChild(addressContainer);
    div.appendChild(pin);
    return div;
}
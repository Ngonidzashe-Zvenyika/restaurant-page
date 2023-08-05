import call from "./call.svg";
import  mail from "./mail.svg";
import location from "./location.jpg";

export default function contact() {
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

    const address = document.createElement("p");
    address.innerText = "4 Nemo St, West Hollywood"

    const pin = document.createElement("img");
    pin.classList.add("location-pin");
    pin.src = location;
    pin.alt = "Billy's Burgers Location."

    contact.appendChild(numberContainer);
    contact.appendChild(emailContainer);
    contact.appendChild(address);
    contact.appendChild(pin);
    return contact;
}
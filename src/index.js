import "./style.css";
import home from "./home-module/home.js";
import menu from "./menu-module/menu.js";
import contact from "./contact-module/contact.js";
import background from "./background.jpg";

const body = document.querySelector("body");
body.innerHTML = "<header><h1>Billy's Burgers</h1><nav><button class='home'>Home</button><button class='menu'>Menu</button><button class='contacts'>Contact</button></nav></header><main></main><footer>Made by <a href='https://github.com/Ngonidzashe-Zvenyika'>Ngonidzashe Zvenyika</a></footer>";

const backdrop = document.createElement("img");
backdrop.classList.add("backdrop");
backdrop.src = background;
backdrop.alt = "background";
body.appendChild(backdrop);

const main = document.querySelector("main");
main.appendChild(home());

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
    if (button.classList.contains("home")) button.classList.add("selected");
    button.addEventListener("click", () => {
        main.replaceChildren();
        buttons.forEach(button => button.classList.remove("selected"));
        button.classList.add("selected"); 
        switch (true) {
            case (button.classList.contains("home")):  
                main.appendChild(home());
                break;
            case (button.classList.contains("menu")):   
                main.appendChild(menu());
                break;
            case (button.classList.contains("contacts")):   
                main.appendChild(contact());
                break;
        };
    });
};
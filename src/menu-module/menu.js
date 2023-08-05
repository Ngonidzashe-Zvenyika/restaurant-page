import beef from "./beef-burger.jpg";
import breakfast from "./breakfast-burger.jpg";
import pork from "./pork-burger.jpg";
import chicken from "./chicken-burger.jpg";
import sandwich from "./sandwich.jpg";
import wedges from "./wedges.jpg";
import fries from "./fries.jpg";
import caesar from "./caesar.jpg";
import greek from "./greek.jpg";
import cocktail from "./cocktail.jpg";

export default function menu() {
    const div = document.createElement("div")
    div.classList.add("menu-container");
    div.appendChild(item("Classic Beef Burger", "Premium beef patty, Glazed onion, Billy's sauce, Toasted bun", "$8", beef));
    div.appendChild(item("Breakfast Burger", "Premium beef patty, Fried egg, Cheddar, Rocket, Billy's sauce, Toasted bun", "$10", breakfast));
    div.appendChild(item("Pulled Pork Burger", "Succulant smoked swine, Vegetable garnish, Billy's sauce, Toasted bun", "$12", pork));
    div.appendChild(item("Chicken Burger", "Shredded chicken, Avocado, Parmesian sauce, Toasted bun", "$11", chicken));
    div.appendChild(item("Steak Sandwich", "Prime steak, Lettuce, Pickle, Glazed onion, Tomato, Billy's sauce, Toasted bun", "$12", sandwich));
    div.appendChild(item("Potato wedges", "Uniform portion of wedges lightly seasoned with kosher salt", "$8", wedges));
    div.appendChild(item("Crispy fries", "Uniform portion of fries with chilli flakes", "$6", fries));
    div.appendChild(item("Caesar salad", "Shredded chicken, Lettuce,  Onion, Parmesian, Caesar's dressing", "$7", caesar));
    div.appendChild(item("Greek salad", "Cherry tomato, Feta, Olives, Onion, Cucumber, Pepper, Greek dressing", "$5", greek));
    div.appendChild(item("Billy's Cocktail", "Assorted non-alchoholic cocktails", "$3", cocktail));
    return div;
}

function item(item, aboutItem, amount, src) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = src;
    image.alt = item;

    const description = document.createElement("div");
    description.classList.add("description");

    const name = document.createElement("h2");
    name.innerText = item;

    const ingredients = document.createElement("p");
    ingredients.classList.add("ingredients");
    ingredients.innerText = aboutItem;

    const price = document.createElement("h3");
    price.classList.add("price")
    price.innerText = amount;

    description.appendChild(name);
    description.appendChild(ingredients);
    description.appendChild(price);
    
    menuItem.appendChild(image);
    menuItem.appendChild(description);
    return menuItem;
}
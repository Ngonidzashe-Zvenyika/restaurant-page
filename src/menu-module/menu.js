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
    div.appendChild(item("Classic Beef Burger", "Premium Beef Patty, Glazed Onion, Billy's Sauce, Toasted Bun", "$8", beef));
    div.appendChild(item("Breakfast Burger", "Premium Beef Patty, Egg, Cheddar, Rocket, Billy's Sauce, Toasted Bun", "$10", breakfast));
    div.appendChild(item("Pulled Pork Burger", "Succulant Smoked Swine, Vegetable Garnish, Billy's Sauce, Toasted Bun", "$12", pork));
    div.appendChild(item("Chicken Burger", "Shredded Chicken, Avocado, Parmesian Sauce, Toasted Bun", "$11", chicken));
    div.appendChild(item("Steak Sandwich", "Prime Steak, Lettuce, Pickle, Glazed Onion, Tomato, Billy's Sauce, Toasted Bun", "$12", sandwich));
    div.appendChild(item("Potato Wedges", "Uniform portion of wedges lightly seasoned with kosher salt", "$8", wedges));
    div.appendChild(item("Crispy Fries", "Uniform portion of fries with a cross-sectional area of one centimeter each with chilli flakes", "$6", fries));
    div.appendChild(item("Caesar Salad", "Shredded Chicken, Lettuce,  Onion, Parmesian, Caesar's Dressing", "$7", caesar));
    div.appendChild(item("Greek Salad", "Cherry Tomato, Feta, Olives, Onion, Cucumber, Pepper, Greek Dressing", "$5", greek));
    div.appendChild(item("Billy's Cocktail", "Assorted Fruit Cocktail", "$3", cocktail));
    return div;
}

function item(item, aboutItem, amount, source) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = source;

    const description = document.createElement("div");
    description.classList.add("description");

    const name = document.createElement("h3");
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
import pageLoad from './pageLoad';
import createHomepage from "./homepage";
import createMenu from "./menu";
import createContactPage from "./contact";

function createTabs() {
    const nav = document.querySelector("nav");

    const homeTab = document.createElement("button");
    homeTab.classList.add("tabs");
    const menuTab = document.createElement("button");
    menuTab.classList.add("tabs");
    const contactTab = document.createElement("button");
    contactTab.classList.add("tabs");

    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";

    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);

    homeTab.addEventListener('click', () => {
        clearContent();
        createHomepage();
    })

    menuTab.addEventListener('click', () => {
        clearContent();
        createMenu();
    })

    contactTab.addEventListener('click', () => {
        clearContent();
        createContactPage();
    })
}

export default createTabs;

function clearContent() {
    const contentDiv = document.querySelector("#content");

    contentDiv.innerHTML = "";
}

pageLoad();
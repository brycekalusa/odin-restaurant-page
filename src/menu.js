function createMenu() {
    const contentDiv = document.querySelector("#content");

    const menuList = document.createElement("ul");
    const menuItem1 = document.createElement("li");
    menuItem1.textContent = "Food 1";
    const menuItem2 = document.createElement("li");
    menuItem2.textContent = "Food 2";
    const menuItem3 = document.createElement("li");
    menuItem3.textContent = "Food 3";
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    contentDiv.appendChild(menuList);
}

export default createMenu;
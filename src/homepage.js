function createHomepage() {
    const contentDiv = document.querySelector("#content");

    const restImg = document.createElement("img");
    restImg.setAttribute("src", "https://www.tempetourism.com/wp-content/uploads/Alter-Ego-in-Canopy-hotel.jpg");
    restImg.setAttribute("alt", "restaurant");

    const restHead = document.createElement("h1");
    restHead.innerText = "Amazing Restaurant";

    const restText = document.createElement("p"); 
    restText.innerText = "Come eat at our fine establishment";

    contentDiv.appendChild(restImg);
    contentDiv.appendChild(restHead);
    contentDiv.appendChild(restText);
}

export default createHomepage;
function createContactPage() {
    const contentDiv = document.querySelector("#content");
    const contactNumber = document.createElement("h3");
    contactNumber.textContent = "(123)-456-789"
    const contactEmail = document.createElement("h3");
    contactEmail.textContent = "info@amazingrestaurant.com";

    contentDiv.appendChild(contactNumber);
    contentDiv.appendChild(contactEmail);
}

export default createContactPage;
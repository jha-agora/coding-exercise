/**
 * This function binds together the "checked" state of the two newsletter
 * subscription toggles.
 */
function addNewsletterEvents(){
    //Get references to our checkbox elements
    let checkbox1 = document.getElementById("newsletter-checkbox1");
    let checkbox2 = document.getElementById("newsletter-checkbox2");

    //When either event is emitted, the "checked" state of it's target checkbox is reflected to the other
    checkbox1.addEventListener("click", () => checkbox2.checked = checkbox1.checked );
    checkbox2.addEventListener("click", () => checkbox1.checked = checkbox2.checked );
}

export default addNewsletterEvents;
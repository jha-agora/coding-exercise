/**
 * This function determines the behavior of the registration buttons
 */
function addRegistrationEvents(){
    //Get references to all the elements in play
    let button1 = document.getElementById("registration-button1");
    let button2 = document.getElementById("registration-button2");


    button1.addEventListener("click", handleRegistrationClicked);
    button2.addEventListener("click",  handleRegistrationClicked);
}

function handleRegistrationClicked(e){
    if (!document.getElementById("newsletter-checkbox1").checked){
        alert("Please select the Free Newsletter checkbox before proceeding.")
        return;
    }

    fetchEndpoint((result) => {
        let resultLabel = document.getElementById(e.srcElement.id + "-result");
            resultLabel.innerHTML = result.submitok;

            //Resetting some style properties for a transition effect
            resultLabel.style.opacity = 1;
            resultLabel.style.transform = "translateY(0px)";
    })
}

/*
 * 
 * @param {Function} onComplete - Callback for request completed
 */
function fetchEndpoint(onComplete = function(){}){
    /**
     * Request to the API endpoint using Fetch. Using a CORS proxy for development purposes.
     */
    var proxyURL = "https://cors-anywhere.herokuapp.com/";
    var URL = 'https://ykx8pov945.execute-api.us-east-1.amazonaws.com/test-Prod/testFunction'
    fetch(proxyURL + URL)
    .then((response) => {
        //Get JSON from ReadableStream
        response.json().then((result) => {

            //Invoke the onComplete callback
            onComplete(JSON.parse(result))

        })
    })
    .catch((err) => {
        console.warn(err);
    })
}

export default addRegistrationEvents;
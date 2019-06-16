import countdown from "./countdown";
import padNumber from "./pad-number";
import addNewsletterEvents from "./newsletter-events";
import addRegistrationEvents from "./registration-events";

/**
 * Wait for DOMContentLoaded before creating any DOM-dependent events
 */
document.addEventListener("DOMContentLoaded", () => {
    /**
     * Add some events to the page
     */
    addNewsletterEvents();
    addRegistrationEvents();
    
    /**
     * Initiate our countdown
     */
    let days = document.getElementById("countdown__days");
    let hours =  document.getElementById("countdown__hours");
    let min =  document.getElementById("countdown__min");
    let sec =  document.getElementById("countdown__sec");
    countdown((count) => {
        days.innerHTML = count.days;
        hours.innerHTML = padNumber(count.hours, 2);
        min.innerHTML = padNumber(count.min, 2);
        sec.innerHTML = padNumber(count.sec, 2);
    })

});




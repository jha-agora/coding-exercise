/**
 * This function begins the event countdown timer and invokes a callback
 * on every tick (seconds)
 * 
 * @param {Function} onTick - Callback invoked every second after this function is called
 * @returns Object;
 */
function countdown(onTick = function(){}){

    /**
     * Get the current date and add five days. Also sets
     * the time to 12:00AM.
     */
    var nowDate = new Date();
    var eventDate = new Date();
        eventDate.setDate(nowDate.getDate() + 5);
        eventDate.setHours(0,0,0,0);
    
    //Calculate the time between the two dates in seconds
    const secondsRemaining = (eventDate.getTime() - nowDate.getTime()) / 1000;
    
    //Start our actual countdown
    let decrement = 0;
    setInterval(() => {
        /*
         * Get the value of secondsRemaining minus the number of seconds
         * the timer has aleady been running.
         */
        let seconds = secondsRemaining - decrement;

        /**
         * Calculate our days, hours, mins, and seconds
         */
        let days = Math.floor(seconds /  86400);
        seconds = seconds % 86400; //Sets the remaining time for the next calculation (hours)
        let hours = Math.floor(seconds / 3600);
        seconds = seconds % 3600;
        let min = Math.floor(seconds / 60);
        seconds = seconds % 60;

        //Invoke the onTick callback with our current countdown values
        onTick({
            days: days,
            hours: hours,
            min: min,
            sec: Math.floor(seconds)
        });

        //Decrement by one second
        decrement += 1;
    }, 1000)
}

export default countdown;


/**
 * Pads a number with zeros
 * 
 * @param {Number} number - The number to pad
 * @param {Number} padding - Number of total digits the string should contain
 */
function padNumber(number, padding){
    if (number.toString().length < padding)
        return "#".repeat(padding - number.toString().length).concat(number.toString()).replace(/#/g, "0");

    return number;
}

export default padNumber;

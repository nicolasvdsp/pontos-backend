const { capitalize } = require('lodash');

function sayHi() {
    console.log("hi");
}

function checkIfPropertiesNotEmpty(object) {
    //initialize object
    let errorfeedback = {};

    //convert parameter object to array (._doc to enter the object inside the mongoose object) and loop
    Object.entries(object._doc).forEach(([property, value]) => {
        // add empty property to errorfeedback{} with custom message
        if(value === "" && !property.match(/(tags|link|key)/)) {
            errorfeedback[property] = `${capitalize(property)} can\'t be empty.`;
        }
    });
    return errorfeedback;
}

module.exports = {
    sayHi,
    checkIfPropertiesNotEmpty
};
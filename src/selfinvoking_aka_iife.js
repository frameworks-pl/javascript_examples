
var getProtected;
var setProtected;

//example of IIFE (Immediately Invoked Function Expression)
(function () {
    var protected = "protected";

    //assigning to the global variable getProtected defined above
    getProtected = function() {
        return protected;
    }

    //assigning to the global variable setProtected defined above
    setProtected = function(value) {
        protected = value;
    }


})(); //we are calling the function immediatelly here

//now var protected is not available to the global scope but still can be obtained/set by getProtected/setProtected functions

console.log(typeof protected); //undefined
console.log(getProtected()); //protected






// DECLARE a function
function declaredFunction() {
    // do something
}


// EXPRESS a function
var expressedFunction = function() {
  // do something  
};


// DECLARATIONS are hoisted to the top on page load.
// EXPRESSIONS are not


// CLOSURES
function addSomething(a) {
    return function (b) {
        return a + b;
    };
}
var addFive = addSomething(5);
var fivePlusTen = addFive(10);


// CALLBACKS || HIGHER-ORDER FUNCTIONS
var calculator = {
    calculate: function(num1, num2, callback) {
        return callback(num1, num2);
    }
};

var sum = function (num1, num2) {
    return num1 + num2;
};

var sumOfFiveAndTwo = calculator.calculate(5,2,sum);
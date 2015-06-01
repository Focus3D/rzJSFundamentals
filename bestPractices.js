// A FEW TOOLS TO KNOW

// when using simple if/else: ternary operator
var string = "This is a string";
var isString = typeof string === "string" ? true : false;
console.log(isString);


// when using multiple if/else but with simple logic: switch
var colorChosen = "orange";

switch(colorChosen) {
    case "blue":
        console.log("I love blue!");
    break;
    case "red":
        console.log("I love red!");
    break;
    case "orange":
        console.log("I love orange!");
    break;
    default:
        console.log("I don't know that color.");
}

// Using operators in return statements 
// good when coupled with recursion to test "any" or "every" for truthy
function either(on,off) {
    return on || off;
}

function both(on,off) {
    return on && off;
}

var on = false, off = true;

console.log(either(on,off)); // returns true
console.log(both(on,off)); // returns false
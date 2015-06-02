var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7];
console.log("Array: " + numbersArray);

// (.length())
// Get length/size of array
console.log("Array Length: " + numbersArray.length);


// (.pop())
// Remove the LAST item AND store it as a variable
var lastItem = numbersArray.pop();
console.log("This was the last item: " + lastItem);
console.log("Array After Pop: " + numbersArray);


// (.push())
// ADD an item to the END of the array
var newItem = 7;
numbersArray.push(newItem);
console.log("Array After Push: " + numbersArray);


// (.reverse())
// Reverse the original array
numbersArray.reverse();
console.log("Same array after reverse: " + numbersArray);


// (.shift())
// Get FIRST item AND remove it from array
console.log("First Item (Shift): " + numbersArray.shift());
console.log("Array After Shift: " + numbersArray);


// (.sort())
// Sort the items of the array (no rules give least to greatest)
console.log("Sorted array no rules: " + numbersArray.sort());

function greatestToLeast(a, b) {
    return b - a;
}
console.log("Sorted greatest to least: " + numbersArray.sort(greatestToLeast));


// (.splice())
// REMOVE item(s) from array, optionally add.
// splice accepts index,amount,newItem
// returns an array of removed items
console.log("Items Removed With Splice: " + numbersArray.splice(2, 3));
console.log("Array After Splice: " + numbersArray);


// (.unshift())
// ADD item to the BEGINNING of array
numbersArray.unshift(7);
console.log("Array after unshift: " + numbersArray);


// (.concat())
// Joins two arrays to create another
var negativeNumbers = [-1, -2, -3, -4, -5];
var newArray = numbersArray.concat(negativeNumbers);
console.log("Combined Arrays: " + newArray);


// (.join())
// Creates a string from an array separated by a given string
var string = newArray.join(" + ");
console.log("String from join: " + string);


// (.slice())
// Returns NEW array by REMOVING edges from array.
// slice accepts index,index (excluded, included)
// starts cursor 0 at very beginning (not first item)
// removes everything between two cursors
var sliceArray = newArray.slice(3, 7);
console.log("New Array From Slice: " + sliceArray);


// (.indexOf()) and (.lastIndexOf())
// FIND and element in an array
var fruits = ["apples", "oranges", "grapes", "bananas", "apples"];

var firstAppleIndex = fruits.indexOf("apples");
var lastAppleIndex = fruits.lastIndexOf("apples");
var firstMangoIndex = fruits.indexOf("mangos"); // Not found returns -1


// (.forEach())
// ITERATE over the array
var numbersArray = [1, 2, 3, 4, 5];
numbersArray.forEach(function(item) {
    // console.log(item);
});


// (.every())
// TEST EVERY element for truthy
var names = ["Brandon", "Destinee", "Harvey", "June", 24];

function isString(item) {
    return typeof item === "string";
}

var everyNameIsAString = names.every(isString);


// (.some())
// TEST ANY element for truthy
var places = ["Los Angeles", "New York", "Miami", "Chicago", 33];

function isNumber(item) {
    return typeof item === "number";
}

var anyPlaceIsANumber = places.some(isNumber);


// (.filter())
// CREATE NEW array from elements that are truthy
var companies = ["Apple", "Google", "Coca Cola", "General Electric"];

function startsWithG(item) {
    return item[0] === "g" || item[0] === "G";
}

var companiesThatStartWithG = companies.filter(startsWithG);


// (.map())
// CREATE NEW array from elements with function rules
var oneThroughFive = [1, 2, 3, 4, 5];

function multiplyByTwo(item) {
    return item * 2;
}

var twoFourSixEightTen = oneThroughFive.map(multiplyByTwo);


// (.reduce())
// CREATE NEW VALUE from elements with function rules
var tensToThousand = [1, 10, 100, 1000];

function addTheNumbers(previousValue, currentValue) {
    return previousValue + currentValue;
}

var number = tensToThousand.reduce(addTheNumbers);
// 2nd optional parameter: initial value to reduce
var sum = tensToThousand.reduce(addTheNumbers, 0);

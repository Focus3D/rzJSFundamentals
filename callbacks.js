// REWRITING NATIVE JAVASCRIPT FUNCTIONS FROM SCRATCH
// FOR PRACTICE WITH HIGHER ORDER FUNCTIONS

var myArray = [1,2,3,4,5];

// array.forEach()
function each(array, callback) {
    if (Array.isArray(array)) {
        for (var i = 0; i < array.length; i++) {
            callback(array[i],i);
        }
    }
}

// array.map() using the above each() function
function arrayMap(array, callback) {
    var tempArray = [];
    each(array, function(item,index) {
        tempArray.push(callback(item,index));
    });
    return tempArray;
}

// array.filter() using the above each() function
function arrayFilter(array, callback) {
    var tempArray = [];
    each(array, function(item) {
        if (callback(item)) {
            tempArray.push(item);
        }
    });
    return tempArray;
}

// array.reduce()/.concat() using the above each() function
function arrayReduce(array, callback) {
    var finalValue = array[0];
    each(array.slice(1), function(item) {
        finalValue = callback(finalValue, item);
    });
    return finalValue;
}

// python's .zip() functionality, using the above arrayMap() function
// given arrays of equal size
function arrayZip(array1, array2 /*,... */) {
    var params = Array.prototype.slice.call(arguments);
    return arrayMap(params[0], function(a, i) {
        return arrayMap(params, function(item) {
            return item[i];
        });
    });
}

var secondArray = [6,7,8,9,10];

var newArray = arrayZip(myArray, secondArray);

function arrayIndexOf(array, item) {
    // indexOf() stops once the item is found
    for (var i=0; i<array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
}

var findFour = arrayIndexOf(myArray, 4);

console.log(findFour);

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

// array.map() using the above .each() function
function arrayMap(array, callback) {
    var tempArray = [];
    each(array, function(item,index) {
        tempArray.push(callback(item,index));
    });
    return tempArray;
}

// array.filter() using the above .each() function
function arrayFilter(array, callback) {
    var tempArray = [];
    each(array, function(item) {
        if (callback(item)) {
            tempArray.push(item);
        }
    });
    return tempArray;
}

// array.reduce()/.concat() using the above .each() function
function arrayReduce(array, callback) {
    var finalValue = array.shift();

    each(array, function(item) {
        finalValue = callback(finalValue, item);
    });
    
    return finalValue;
}

// python's .zip() functionality, using the above .each() function
// given arrays of equal size
function arrayZip(array1,array2) {
    var outterArray = [];
    var innerArray = [];
    var params = Array.prototype.slice.call(arguments);

    each(params[0], function(a,i) {
        each(params, function(item, index) {
            innerArray.push(params[index][i]);
        });
        outterArray.push(innerArray);
        innerArray = [];
    });
    
    return outterArray;
}

var secondArray = [6,7,8,9,10];

var newArray = arrayZip(myArray,secondArray);

// indexOf() using the above .each() function
function arrayIndexOf(haystack, needle) {
    var found = -1;
    
    each(haystack, function(item,index) {
        if (item === needle && found === -1) {found = index;}
    });
    
    return found;
}

var findFour = arrayIndexOf(myArray, 4);

console.log(findFour);
var str = "The 10 quick brown foxes jumped over the lazy dog.";

// (.charAt())
// Returns the character at a certain index
console.log("Character at index 8: " + str.charAt(8));


// (.indexOf()) AND (.lastIndexOf())
// Returns the index of the first instance of a given character
console.log("First index of \"r\": " + str.indexOf("r"));
console.log("Last index of \"r\": " + str.lastIndexOf("r"));


// (.search())
// Same as indexOf(), but accepts a regex
console.log("First index of \"10\": " + str.search(/10/));


// (.match())
// Returns an array of all of the matches of a regex
// Useful for trying to figure out how many times something appears
// Get a match, then get the length of the returned array.
console.log("Matches of \"r\": " + str.match(/the/gi));


// (.replace())
// Returns a string with matched regex replaced with given string
console.log("\"The\" to \"why\": " + str.replace(/the/gi, 'why'));


// (.slice())
// Returns substring string by REMOVING edges of full string
// Replacement for substr and substring bc it accepts backwards indexes
// Accepts two index arguments
console.log("Sliced String: " + str.slice(4, -4));


// (.split())
// Turns string by a given string into an array
console.log("Split string into array by space: " + str.split(" "));


// (.toLowerCase())
// Makes string all lower case
console.log("Lower Case String: " + str.toLowerCase());


// (.toUpperCase())
// Makes string all upper case
console.log("Upper Case String: " + str.toUpperCase());

var date = new Date();
var dateWasBorn = new Date(1991,3,29,4,12,46);
var yearWasBorn = dateWasBorn.getFullYear();
var monthWasBorn = dateWasBorn.getMonth(); // 0 to 11
var dayOfMonthWasBorn = dateWasBorn.getDate();
var dayOfWeekWasBorn = dateWasBorn.getDay(); // 0 to 6


// Date comparison
var newerDate = date > dateWasBorn ? date : dateWasBorn;
var olderDate = date < dateWasBorn ? date : dateWasBorn;

console.log(olderDate);
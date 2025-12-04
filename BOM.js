//..............................................Window object Methods.............................................//

//window//
console.log("Window Object Methods");
let width = window.innerWidth;
let height = window.innerHeight;
console.log("Width:" + width);
console.log("Height:"+height);

//alert//
//window.alert("This is an alert box!")

//confirm//
window.alert("Press a button!");


//history//
console.log("History");
window.history.back();
window.history.forward();
window.history.go(-1);
console.log("History Length:"+ window.history.length);

//location//
console.log(location.href);   // Full URL(https://www.w3schools.com/js/js_number_methods.asp)

console.log(location.hostname); // Domain name(www.w3schools.com)

console.log(location.pathname); // File path (/js/js_number_methods.asp)

//Navigator//
console.log("Navigator");
console.log("Browser Info:");
console.log("User Agent: " + navigator.userAgent);
console.log("Platform: " + navigator.platform);
console.log("Language: " + navigator.language);
console.log("Online Status: " + navigator.onLine);

//Timing//
console.log("S")


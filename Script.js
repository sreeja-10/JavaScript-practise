//String//
console.log("String");
let color ="red";
let lastname="Smith";
console.log(color);
//Object//
console.log("Object");
const car = {type:"Beleno", model :"2020", color: "blue"};
console.log(car.model);
//Array//
console.log("Array");
const bike = ["Yamaha", "Honda", "Suziki"];
console.log(bike[2]);
//Symbol//
console.log("Symbol");
const x = Symbol();
const y = Symbol();
console.log(x ==y);
//Date Object//
console.log("Date Object");
const date = new Date("2025-11-28");
console.log(date);
//BigInt//
console.log("BigInt");
let p = 1234567890123456789012345n;
let q = BigInt(1234567890123456789012345)
console.log(q);
//Area Calculation//
console.log("Area Calculation");
length = 250;
breadth = 150;
area = length*breadth;
console.log(area);
//String Concatenation//
console.log("String Concatenation");
let a = "16" + "volvo";
console.log(a);
//Variable Declaration//
console.log("Variable Declaration");
var d;
d="6";
d="7"
console.log(d);
//Concatenation//
console.log("Concatenation");
let carname1 = "volvo";
let carname2 = "BMW";
console.log(carname1 + " " + carname2);
//If //
console.log("If");
let age = 18;
if(age >=18) {
console.log("eligible to vote.");
} else {
    console.log("not eligible to vote");
}
//If else//
console.log("If else");
let marks = 85;
if (marks >=90) {
        console.log("Grade A");

} else if (marks >=75 && marks <90) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
//Ternary//
console.log("Ternary");
let text = (age < 18) ? "Minor" : "Adult";
console.log(text)
//Switch//
console.log("Switch");
switch (marks) {
    case 90:
        console.log("Grade A");
        break;
        case 75:
        console.log("Grade B");
        break;
        default:
            console.log("Grade C");
            break;
            }
//Boolean//
console.log("Boolean");
let c = 8;
(c == 8); // equals false
(c != 8); // equals true
console.log(c!=8);

//Switch Day//
console.log("Switch Day");
switch (new Date().getDay () ) {
    case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);
//...........................................Comparison Operator...............................................//
console.log("Comparision");
let m =5;
console.log(m!=5);
let n=10;
console.log(n!=10);

//Logical AND//
console.log("Logical AND");
let e= 2;
let f=10;
let z = (e < 20 && f > 5)
console.log(z)
//Logical OR//
console.log("Or");
let g = 3;
let h = 7;
let w = (g < 5 || h >5)
console.log(w)
//..............................................Loops..........................................................//
//FOR Loop
console.log("FOR Loop");
let i = 5;
for (let j=1; j <=i; j++) {
    console.log(j);
}
//WHILE Loop//
console.log("WHILE Loop");
let l =7;
while(l<10) {
    console.log(l);
    l++;
}
//Do WHILE Loop//
console.log("DO WHILE Loop");
let k =1;
do {
    console.log(k)
k++;
} while (k <5);
console.log("Code for array");
//Break//
console.log("Code for break");
for (let s=0;s<10;s++) {
    if (s==5) {
        break;
    }
    console.log(s);
}
//Continue//
console.log("Code for continue");
for (let t=0;t<10;t++) {
    if(t==5) {
        continue;
    }
    console.log(t);
}
//Array//
let arrays=[1,2,3,4,5,6,7];
for (let r=0;r<=arrays.length;r++) {
    console.log(r);
console.log(arrays[r]);
}
//Strings,Length//
console.log("Strings");
let str = "Hello World!";
console.log(str.length)
//String Declaration//
console.log("Declaring");
let city = "New York";
let message= "Welcome";
console.log("City:", city);
console.log("Message:", message);
console.log("String Template");
//.............................................Template Strings................................................//
//Backticks//
console.log("Backticks");
let user = `Alaric`;
console.log(user);
console.log("quotes in string");
//Quotes Inside String//
let quote = `He said,
He said, "It's a beautiful day!`
console.log(quote);
//Quotes Inside String//
console.log("Multiline string");
let txt =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(txt)
 //Interpolation//
console.log("Interpolation");
let firstName = "Robin";
let lastName = "Hood";
let fullName =`${firstName} ${lastName}`;
console.log(fullName)
//.................................................String Methods................................................//
console.log("string methods");
let ext1 = "Welcome to JavaScript";
console.log(ext1.length);
// charCodeAt()//
console.log("charCodeAt");
let text1 = "HELLO";
let value = text1.charCodeAt(1);
console.log(value);
//codePointAt//
console.log("codepointAt");
let text2 = "World";  
let code = text.codePointAt(0);
console.log(code)
//String at//
const name = "Harry Potter";
let letter = name.at(2);
console.log(letter);
//  String concat//
console.log("String concat");
let text3 = "Hello";
let text4 = "World";
let text5 = text3.concat(" ", text4);
console.log(text5);
//Property Access [ ]//
console.log("Property Access");
let text6 = "JavaScript:";
let char = text6[4];
console.log(char);
//String slice()//
console.log("String slice");
let text7 = "Apple, Banana, kiwi";
let part = text7.slice(7, 13);
console.log(part);
//String substr()//
console.log("String substr()")
let text8 = "Apple, Banana, kiwi";
let part1 = str.substring(7, 6);
console.log(part1);
//UpperCase()//
console.log("UpperCase");
let text9 = "Inidia";
let upper = text9.toUpperCase();
console.log(upper);
//Lowercase()// 
console.log("LowerCase");
let text10 = "CHINA";
let lower = text10.toLowerCase();                             
console.log(lower);
//wellformed//
console.log("wellformed");
let text11 = "Hello World ";
let result = text11.isWellFormed();
console.log(result);
//trim(),trimStart,trimEnd//
console.log("trim");
let v1 = "      Hello World!      ";
console.log(v1.trimEnd());
//padStart()//
let text12 = "6";
let padded = text12.padStart(5,"0");
console.log(padded);
//padEnd()//
let text13 = "6";
let padded1 = text13.padEnd(5,"0");
console.log(padded1);
//repeat()//
console.log("repeat");
let text14="Hello";
let repeated = text14.repeat(31);
console.log(repeated);
//replace()//
console.log("replace");
let text15 = "dog is friendly dog";
let newText = text15.replace("dog", "cat");
console.log(newText);
//replaceAll()//
console.log("replaceAll");
let text16 = "I like cats. cats are great pets.";
let newText1 = text16.replaceAll("cats", "dogs");
console.log(newText1);
//split()//
console.log("Split");
let text17 = "Apple,Banana,kiwi";
let fruits = text17.split(",");
console.log(fruits);
//..........................................Searching Methods................................................//
//indexof()//
console.log("indexof");
let text18 = " red blue green pink";
let position = text18.indexOf("blue");
console.log(position);
//lastIndexof()//
console.log("lastIndexof");
let text19 = " red blue green pink";
let position1 = text19.indexOf("pink");
console.log(position);
//search()//
console.log("search");
let text20 = "Welcome to JavaScript";
let position2 = text20.search("to");
console.log(position2);
//match()//
console.log("match");
let text21 = "The rain in SPAIN stays mainly in the plain";
let result1 = text21.match(/ain /g);
console.log(result1);
//matchAll()//
console.log("matchAll");
let text22 = "The rain in SPAIN stays mainly in the plain";
let result2 = text21.matchAll(/ain /g);
console.log(result1);
//includes()//
console.log("includes");
let text23 = "Hello world, welcome to the universe.";
let result3 = text23.includes("world",12);
console.log(result3);
//startsWith()//
console.log("startsWith"); 
let text24 = "Hello world, welcome to the universe.";
let result4 = text24.startsWith("Hello");
console.log(result4);
//constructor//
console.log("constructor");
let text26 = "Hello World";
let result6 = text26.constructor;
console.log(result6);

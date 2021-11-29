alert("This is a Popup message");

console.log("hello dear");

3 // thi returns 3 also.

3 + 2.1 // this returns 5.1

    -
    20 + -19 + (-10) - (-1) + 24 //this returns -4

5 > 10 // this returns false

5 != 10 // this returns true

console.log('we can use single quote instead of double quotes');

console.log("we can" + " add strings to each others which is called concatenation");

console.log("Hello " + 5 * 10); //this modifies 50 to be string instead of integer and returns Hello 50
//  ____________________________________________________________________________________
var totalAfterTax = 53.3; // this is how camelCase works, 1st word is lowercase and the rest is uppercase
//  ____________________________________________________________________________________
var fahrenheit = celsius * 1.8 + 32; //this is to convert from F to C degrees
var celsius = 30;
console.log(fahrenheit);
//  ____________________________________________________________________________________

var string = "normal";
"normal" [4]; // this will return a
string[2]; // this will return r
string.charAt(5); //this will return l

console.log("The man whispered, \"I can't breathe. \""); // we can use (\") to can type ("") without syntax errors

console.log("Up up\n\tdown down"); // special charactars for new line and tab.

"Yes" != "yes" // note the uppercase and the lower case.

var my_string = "a"; // Pick a string. Your string can have any number of characters.
var ASCII_value = my_string.charCodeAt(0); // Calculate the ASCII value of the first character, i.e. the character at the position 0. 
console.log(ASCII_value); // this will return 97

//  ____________________________________________________________________________________
var name = "Udacity";
for (var i = 0; i < name.length; i++) { //for loop to print all the ASCII code values of the word "Udacity"
    console.log(name.charCodeAt(i));
} // outputs are (85,100,97,99,105,116,121)

var joke = "Are we there yet?" + "\nI guess not."; //this is string concatenation.
console.log(joke); // the output will be the 2 statements.

var student = "john";
var statusJoin = true;
var statusDismess = false;
if (statusJoin) {
    console.log("Welcome " + student + " to the mission of Captain Jack.")
        // that means that if statusJoin is true, print this message, if it's false ,show nothing.
}
//  ____________________________________________________________________________________
// escaping characters are \==\\, \"==", \'==', \n, \t
"Yes" != "yes" // because the upper and lower case 1st letter.
"1" == 1 //true , because JS converts 1 to string and compares with 1
    '' == false // true, because the empty string will be converted to "0"
    "julia" + 1 // output will be julia1, as JS converts 1 to string == implicit coercion.
    "1" === 1 //false , because this is called strict equality with 3 equal signs.

var answer = "I am a man" == "I am a man"; // this boolean will return true or false, will not return a value
console.log(answer); //the output is true.

var xx = null; // this is null or resereved for future
var yy;
console.log(yy); // this will return undefined.

Math.sqrt(-10); // NAN or not-a-number ... returns as there is no squre root for negative integers.

var h = 7;
var j = 9;
if (h >= j) {
    console.log("true");
} else { // if-else statement.
    console.log("false");
}

var weather = "sunny";
if (weather === "snow") {
    console.log("Bring a coat");
} else if (weather === "rain") { // else-if statement used for more than two options.
    console.log("Bring a rain jacket");
} else {
    console.log("wear what you wanna wear");
}


var numb = 47;
if (numb % 2 === 0) { //this is how to use modulo or % sign in if statement. NOTE : % means remainder .
    console.log("even");
} else {
    console.log("odd");
}
//  ____________________________________________________________________________________
// the next part is about a game named "whodunit" 
var room = "ballroom";
var suspect = "Mr. Kalehoff";
var weapon = ""; //this is like null or will be identified later.
var solved = false;
// this is like a switch to control the game, it is by default off and it will be on when the right choice selected.

if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved = true;
} else if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon = "knife";
    solved = true;
} else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = "poison";
    solved = true;
}

if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
//  ____________________________________________________________________________________
//this is to make an ice-cream preferences of limited choices

var flavor = "vanilla";
var vessel = "cone";
var toppings = "peanuts";

var comp1 = (flavor === "vanilla" || flavor === "chocolate");
var comp2 = (vessel === "cone" || vessel === "bowl");
var comp3 = (toppings === "sprinkles" || toppings === "peanuts");

if (comp1 === true && comp2 === true && comp3 === true) {
    /*
     note: we can express the if-condition by using this formula and without assigning comp1,comp2, and comp :
    if ((flavor === "vanilla" || flavor ==="chocolate") && (vessel === "cone" || vessel ==="bowl") && 
    (toppings === "sprinkles" || toppings ==="peanuts")) {
    */
    console.log(" I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
} else {
    console.log("not found");
}

//  ____________________________________________________________________________________
//this is a program to choose the perfect size for you, but you have to achieve the 3 conditions.

var shirtWidth = 26;
var shirtLength = 33;
var shirtSleeve = 9.63;

if ((20 > shirtWidth && shirtWidth >= 18) && (29 > shirtLength && shirtLength >= 28) && (8.38 > shirtSleeve && shirtSleeve >= 8.13)) {
    console.log("s");
} else if ((22 > shirtWidth && shirtWidth >= 20) && (30 > shirtLength && shirtLength >= 29) && (8.63 > shirtSleeve && shirtSleeve >= 8.38)) {
    console.log("M");
} else if ((24 > shirtWidth && shirtWidth >= 22) && (31 > shirtLength && shirtLength >= 30) && (8.88 > shirtSleeve && shirtSleeve >= 8.63)) {
    console.log("L");
} else if ((26 > shirtWidth && shirtWidth >= 24) && (33 > shirtLength && shirtLength >= 31) && (9.63 > shirtSleeve && shirtSleeve >= 8.88)) {
    console.log("XL");
} else if ((28 > shirtWidth && shirtWidth >= 26) && (34 > shirtLength && shirtLength >= 33) && (10.13 > shirtSleeve && shirtSleeve >= 9.63)) {
    console.log("2XL");
} else if ((shirtWidth === 28) && (shirtLength === 34) && (shirtSleeve === 10.13)) {
    console.log("3XL");
} else {
    console.log("NA");
}
//  ____________________________________________________________________________________
// this is another way to present this program, notice that you can check photos for tables.
var shirtWidth = 21;
var shirtLength = 99;
var shirtSleeve = 8.40;

var size = "NA";

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    size = "S";
} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    size = "M";
} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    size = "L";
} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    size = "XL";
} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    size = "2XL";
} else if ((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)) {
    size = "3XL";
} else {
    size = "NA";
}
console.log(size);
//  ____________________________________________________________________________________
/* the falsy values of JS are :
1- boolean value - false
2- empty string ""
3- number zero 0
4- null value
5- undefined value
6 NaN value 
other than that , all values are truthy. */
//  ____________________________________________________________________________________
if (null) {
    console.log("null will be compared with truthy at 1st");
} else {
    console.log("null will be compared then with falsy,so, this message will appear.");
}
//  ____________________________________________________________________________________
//this is ternary operator :
var huh = false;
var color = huh ? "blue" : "red";
// this means if huh is true,print color = blue, if it's false, print color = red.
console.log(color);
//of course the output is red, because huh is false.
//  ____________________________________________________________________________________
//heavy use of ternary operator :

var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");
// means, if eatsplants ture, choose 1st bracket and inside it if eatanimals true, choose omnivores
console.log(category);
//  ____________________________________________________________________________________
//this is how I translate the ternary operator to if-else statement.
var eatsPlants = true;
var eatsAnimals = false;

if (eatsPlants && eatsAnimals) {
    console.log("omni");
} else if (!eatsPlants && eatsAnimals) {
    console.log("carni");
} else if (eatsPlants && !eatsAnimals) {
    console.log("herbi");
} else {
    console.log("undefined");
}
//  ____________________________________________________________________________________
// switch statements ( in case of a lot of if-else statements and one var is changing)


var education = "an Associate's degree";
var salary = 0;

switch (education) {

    case "no high school diploma":
        salary = "25,636";
        break;
    case "a high school diploma":
        salary = "35,256";
        break;
    case "an Associate's degree":
        salary = "41,496";
        break;
    case "a Bachelor's degree":
        salary = "59,124";
        break;
    case "a Master's degree":
        salary = "69,732";
        break;
    case "a Professional degree":
        salary = "89,960";
        break;
    case "a Doctoral degree":
        salary = "84,396";
        break;
}
console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");

// salary.toLocalString("en-US") to display the , in the number i.e.  12,345

//  ____________________________________________________________________________________
/*
"Fizzbuzz" is a famous interview question used in programming interviews. It goes something like this:
Loop through the numbers 1 to 100
If the number is divisible by 3, print "Fizz"
If the number is divisible by 5, print "Buzz"
If the number is divisible by both 3 and 5, print "FizzBuzz"
If the number is not divisible by 3 or 5, print the number
*/
var x = 1;
while (x <= 100) {

    if (x % 3 === 0 && x % 5 === 0) {
        console.log("FizzBuzz");
    } else if (x % 5 === 0) {
        console.log("Buzz");
    } else if (x % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(x);
    }

    x = x + 1;

}

var x = 99;
while (x <= 99 && x > 1) {
    console.log(x + " bottles of juice on the wall!" + x + " bottles of juice! Take one down, pass it around... " + (x - 1) + " bottles of juice on the wall!");
}
while (x = 1) {
    console.log(x + " bottle of juice on the wall!" + x + " bottle of juice! Take one down, pass it around... " + (x - 1) + " bottle of juice on the wall!");

}

//  ____________________________________________________________________________________
//   Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.
var x = 99;
while (x <= 99 && x > 1) {
    console.log(x + " bottles of juice on the wall!" + x + " bottles of juice! Take one down, pass it around... " + (x - 1) + " bottles of juice on the wall!");
    x = x - 1;
}
if (x = 1) {
    console.log(x + " bottle of juice on the wall!" + x + " bottle of juice! Take one down, pass it around... " + x + " bottle of juice on the wall!");

}
//  ____________________________________________________________________________________
// this is the best way to do this iteration , because the (bootle and booles) word difference .
var num = 99;

while (num >= 1) {
    // Last iteration. Note occurances of bottle, bottle, bottleS
    if (num === 1) {
        console.log(num + " bottle of juice on the wall! " +
            num + " bottle of juice! Take one down, pass it around... " +
            (num - 1) + " bottles of juice on the wall!");
    }
    // Second-last iteration. Note occurances of bottleS, bottleS, bottle
    else if (num === 2) {
        console.log(num + " bottles of juice on the wall! " +
            num + " bottles of juice! Take one down, pass it around... " +
            (num - 1) + " bottle of juice on the wall!");
    }
    // All other iterations. Note occurances of bottleS, bottleS, bottleS
    else {
        console.log(num + " bottles of juice on the wall! " +
            num + " bottles of juice! Take one down, pass it around... " +
            (num - 1) + " bottles of juice on the wall!");
    }
    num = num - 1;
}
//  ____________________________________________________________________________________
/* NASA's countdown to launch includes checkpoints where 
NASA engineers complete certain technical tasks. 
During the final minute, NASA has 6 tasks to complete:
*/

var time = 60;

while (time >= 0) {

    if (time === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (time === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (time === 16) {
        console.log("Activate launch pad sound suppression system ");
    } else if (time === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (time === 6) {
        console.log("Main engine start");
    } else if (time === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    } else {
        console.log("T-" + time + " seconds");
    }

    time = time - 1
}
//  ____________________________________________________________________________________
// this is switch-statement instead of repeated else-if statement :

var time = 60;

while (time >= 0) {

    switch (time) {
        case 50:
            console.log("Orbiter transfers from ground to internal power");
            break;
        case 31:
            console.log("Ground launch sequencer is go for auto sequence start");
            break;
        case 16:
            console.log("Activate launch pad sound suppression system ");
            break;
        case 10:
            console.log("Activate main engine hydrogen burnoff system");
            break;
        case 6:
            console.log("Main engine start");
            break;
        case 0:
            console.log("Solid rocket booster ignition and liftoff!");
            break;
        default:
            console.log("T-" + time + " seconds");
    }

    time = time - 1
}

//  ____________________________________________________________________________________
// this is how to get factorial for a number i.e. 4(factorial) = 4! = 4*3*2*1 = 24

let solution = 1; // note : we use let instead of var

for (let i = 1; i <= 12; i++) { // let can be used in any scope, but var can be global or local.
    solution *= i;
}

console.log(solution);
//  the output equal 479001600
//  ____________________________________________________________________________________
// my solution for the factorial of 12 is :
var x = 1;
var solution = 1;

for (x = 1; x <= 12; x++) {
    solution = solution * x; // note : here we can write it as : solution *= x ;
}

console.log(solution);
//  ____________________________________________________________________________________
// a function to reverse a name :
function reverseString(reverseMe) {

    var reversed = "";

    for (var i = reverseMe.length - 1; i >= 0; i--) {

        reversed = reversed + reverseMe[i];
    }

    return reversed;
}
console.log(reverseString("Julia"));

console.log("hi, " + reverseString("jamessss") + " my name is " + reverseString("Julia"));

// note that you don't have a particular no. of characters, because you bind the function with (reverseMe.length - 1)
//  ____________________________________________________________________________________
//the next will be how to make a function with good argument :
function sayHello(greetings) {
    var message = "Hello!";
    var x = message + greetings; // x assigned to var message + whatever you'll assign to greetings variable.
    return x;
}
console.log(sayHello("tamer")); //note that you assigned "tamer" string to var greetings
//  ____________________________________________________________________________________
// this is how to print a string multiple times by using for loop inside a function :
var sound = ""; //suppose that you have empty string
function laugh(num) { // here is a function and parameter inside called num
    for (var x = 0; x < num; x++) { //the range is between zero and the input number , so zero < x < input , but count 0 also as a number
        sound = sound + "ha"; // the new string will be the old string(which is void) + the new one.
    }
    sound = sound + "!"; // here is to add the exclamation mark in the end
    return sound; // you should return something before you exit the function
}

console.log(laugh(7)); // here we output 0+6 of the string ha + ! (try it)
//  ____________________________________________________________________________________
//this is how to get a prime number ;
function isPrime(integer) { // interger here is a parameter
    for (var x = 2; x < integer; x++) { // the range is between 2 and (number -1)
        if (integer % x === 0) {
            console.log(integer + " is divisible by " + x);
            return false;
        }
    }
    return true;
}

isPrime(25);
//  ____________________________________________________________________________________

// This is very very important example of functions ... needed to be revised more than once.
// It is all about printing out a right-angle triangle. 
// creates a line of * for a given length
function makeLine(length) {
    var line = "&";

    for (var j = 1; j <= length; j++) {
        line += "* ";

    }

    return line + "\n";

}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
    // Let's build a huge string equivalent to the triangle
    var triangle = "K";

    /*
    triangle = (k) + (& * ) ... note the last brackets only will be printed out in all cases ...
    triangle = (k&* ) + (& * * ) .. last bracket
    triangle = (k&* & * * ) + (& * * * ) ....also last bracket .. and so on.. this is THE KEY.
    */
    var lineNumber = 1;

    for (lineNumber = 1; lineNumber <= length; lineNumber++) {
        // We will not print one line at a time.
        // Rather, we will make a huge string that will comprise the whole triangle
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}

console.log(buildTriangle(5));
// note : as I said, needed to be revised more than once
// ______________________________________________________

var git = function(food) { // assign a function to var or var with function type

    var eat = ""; // empty string, will use it later

    for (var i = 0; i <= food; i++) {
        eat = eat + "delicious!"; // here we added what we want... 
    }

    return eat; // the output of the function....
};


function helloCat(callbackFunc) { // make a new func. with a parameter that call for another func.

    return " I like it, " + callbackFunc(6);
} // we said that callbackFunc whatever the function we will call back, it will have 6 as an argument.

helloCat(git); // here we call back the function of git with an argument = 6 

// the output will be: I like it + return eat .. 
//note : this is the only order way that is possible, if you try to move around, you'll get error.

//  ____________________________________________________________________________________

// this is the easiest way to print the previous triangle :
var laugh = function(haNumber) {
    var joke = "";
    for (i = 1; i <= haNumber; i++) {

        joke += "* ";
        console.log(joke);
    }

}

laugh(10);
// try it ... it is so easy right now, just put the console.log inside.
//  ____________________________________________________________________________________

// this is how to deal with anonymous functions and assign it to a variable
var laugh = function(haNumber) {
    var joke = "";
    for (i = 1; i <= haNumber; i++) {

        joke += "ha";

    }
    console.log(joke + "!");
}

laugh(3);

//________________________________________________________________________________________________________
// You can even pass a function into another function inline. 
// This pattern is commonly used in JavaScript, and can be helpful streamlining your code.
// function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
}

// call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

//________________________________________________________________________________________________________

// this is an example of an array that we need to change some indecies of it (the hard way)

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
for (var index = 0; index < prices.length; index++) {
    //change the value of first element
    if (index === 0) {
        prices[index] = 11;
    }
    //change the value of third element
    else if (index === 2) {
        prices[index] = 33;
    }
    //change the value of seventh element
    else if (index === 6) {
        prices[index] = 77;
    }
}
console.log(prices);
//________________________________________________________________________________________________________
// this is how we can incapsulate a function inside the method forEach() loop :
let donuts = ["jelly donut", "vanilla donut", "choco donut"];

donuts.forEach(function foo(rebe) {
    rebe += " hole";
    rebe = rebe.toUpperCase();
    console.log(rebe);
});
// output will be (JELLY DONUT HOLe,VANILLA DONUT HOLE,CHOCO DONUT HOLE)
//________________________________________________________________________________________________________
// this is how we can use the splice() method in arrays
let odds = [11, 33, 55, 77, 99];
odds.splice(2, 0, 44);
odds.splice(3, 1);
odds.splice(3, 1, 44)
odds.splice(-1, 1)
odds.splice(5, 0, 111);
console.log(odds);
// try using different odds.splice() to understand each one.
//_______________________________________________________________________________________________________

//this is how to deal with arrays inside an array and itrate over them both in the same time
// this is done by checking each element by using numbers[row][column]

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for (let row = 0; row < numbers.length; row++) {
    for (let column = 0; column < numbers[row].length; column++) { // note, we compared with numbers[row].length

        if (numbers[row][column] % 2 === 0) { // if modulo of each element is divisible by 2, then it's even
            numbers[row][column] = "even";
        } else {
            numbers[row][column] = "odd"; // else, it's odd
        }
    }
}
console.log(numbers);

//________________________________________________________________________________________________________
let words = ["cat", "in", "hat"];
// inline function with forEach() loop :
words.forEach(function(word, num, all) {
    console.log("word " + num + " in " + all.toString() + " is " + word)
});
// note  all.toString() combined all strings to one 
// word refers to elements, num refers to index, and all refers to the whole array
//________________________________________________________________________________________________________

// You can test your code with a smaller array first
let test = [12, 29, 11, 3];

// Write your code here
test.forEach(function(item, index) {
    if (item % 3 === 0) {
        // The commented statements below would not be able to change the value of item
        // because the `item` is a COPY of actual element, while actual is test[index]
        // item = item + 100;
        // console.log("The updated element is "+item+" and actual is "+test[index]);
        test[index] = test[index] + 100; // very very important....
    }
    //else 
    //    console.log("Element "+item+" is not divisible by 3");
});
console.log(test); // the output will be (112,29,11,103), because only 12,3 is divisible by 3
//________________________________________________________________________________________________________

// this is an example of map() function , which takes an array, modifies it and set it to new array
let price = [250, 350, 450, 550]; // the old array
let discountedPrice = price.map(function(discountedElement) { // setting the modified old array to new array 
    discountedElement = discountedElement - (discountedElement * (10 / 100));
    return discountedElement;
});
console.log(price, discountedPrice); // output is old array + new modified one.
//_____________________________________________________________________________________________________________

let bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

let totals = bills.map(function(elem1) {
    let tip = elem1 * (15 / 100);
    elem1 += tip; // note we can set this one instead elem1 *= 1.15 , which replaces the tip variables
    elem1.toFixed(2); // this is to round up the fractions to 2 decimals only
    return Number(elem1); // the toFixed will change num to strings, this is how to get back numbers
}); // we can use also  ---- return Number(element.toFixed(2));
console.log(totals);
//_____________________________________________________________________________________________________________

// this is an example of object and how to manipulate data inside it... 
let facebookProfile = {
    name: "sherif",
    friendsNumber: 4,
    oldMassages: ["hello,how are you?", "Good day to you", "have a nice time", "wait a second"],
    postMessage: function(message) { return facebookProfile.oldMassages.push(message); },
    deleteMessage: function(index, elem) { return facebookProfile.oldMassages.splice(index, elem); },
    addFriend: function() { return facebookProfile.friendsNumber = facebookProfile.friendsNumber + 1; },
    removeFriend: function() { return facebookProfile.friendsNumber = facebookProfile.friendsNumber - 1; }

};
/*    
another way to avoid getting error if the friends list = 0
 removeFriend: function(){
        if(facebookProfile.friends>0)
            facebookProfile.friends = facebookProfile.friends - 1;
    }
    
 */

console.log(facebookProfile.postMessage("let us talk"));
console.log(facebookProfile.oldMassages);
console.log(facebookProfile.deleteMessage(1, 1));
console.log(facebookProfile.oldMassages);
console.log(facebookProfile.addFriend());
console.log(facebookProfile.addFriend());
console.log(facebookProfile.addFriend());
console.log(facebookProfile.removeFriend());

//_____________________________________________________________________________________________________________

// This is an array of objects.
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// this is how we use forEach() loop for objects inside array
donuts.forEach(function(elem1) { // note, we used elem1 to enter inside the object

    // donut represents a single element of donuts array
    // donut is an object, therefore you can access its properties using a dot notation
    console.log(elem1.type + " donuts cost $" + elem1.cost + " each");
});
// this is how we make new array of the old one with modification on objects inside the array
let newDonuts = donuts.map(function(elem2) { // note, we used elem2 to enter inside the object
    elem2.type += " wow";
    elem2.cost += 0.5;
    return elem2
});
console.log(newDonuts);
//_____________________________________________________________________________________________________________
// this is how to make 5 rows X 5 columns of (*) or (#) :
// ALSO, this is the only way to defeat the console.log new line and put it all in the same line.
var shape = ["# ", "# ", "# ", "# ", "# "];

for (var j = 0; j < 5; j++) {
    var xyx = "";
    shape.forEach(function(i) {
        xyx += i;
    });
    console.log(xyx);
}
// test the output , as you can see , you have to make an array
//_____________________________________________________________________________________________________________
//______________________________________The DOM and JS ______________________________________________________

document.querySelector(".card"); // this is to select the 1st class of card
const nanodegreeCard = document.querySelector(".card"); // assign the calss to constant
nanodegreeCard.innerHTML // this will represent the inner content of the class "card"
nanodegreeCard.outerHTML // this will represent the whole class
nanodegreeCard.textContent // this will display all the text inside the element
myElement.textContent = 'The <strong>Greatest</strong> Ice Cream Flavors'; // doesn't work as expected
// the upper case will display <strong> </strong> in the text
myElement.innerHTML = 'The <strong>Greatest</strong> Ice Cream Flavors'; // works as expected
// the upper case will remove <strong></strong> and make "Greatest"  bold
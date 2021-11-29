alert("This is a Popup message");

console.log("hello dear");

3 // thi returns 3 also.

3 + 2.1 // this returns 5.1

- 20 + - 19 + ( - 10 ) - ( - 1 ) + 24  //this returns -4

5 > 10 // this returns false

5 != 10 // this returns true

console.log('we can use single quote instead of double quotes');

console.log("we can"+" add strings to each others which is called concatenation");

console.log("Hello " + 5*10); //this modifies 50 to be string instead of integer and returns Hello 50

var totalAfterTax = 53.3; // this is how camelCase works, 1st word is lowercase and the rest is uppercase

var fahrenheit = celsius * 1.8 + 32 ;   //this is to convert from F to C degrees
var celsius = 30 ;
console.log(fahrenheit);


var string = "normal" ;
"normal"[4];  // this will return a
string[2];  // this will return r
string.charAt(5); //this will return l

console.log("The man whispered, \"I can't breathe. \"");  // we can use (\") to can type ("") without syntax errors

console.log("Up up\n\tdown down"); // special charactars for new line and tab.

"Yes" != "yes"  // note the uppercase and the lower case.

var my_string = "a";     // Pick a string. Your string can have any number of characters.
var ASCII_value = my_string.charCodeAt(0);    // Calculate the ASCII value of the first character, i.e. the character at the position 0. 
console.log(ASCII_value);    // this will return 97


var name="Udacity";
for (var i=0; i<name.length; i++){ //for loop to print all the ASCII code values of the word "Udacity"
  console.log(name.charCodeAt(i));
}                                  // outputs are (85,100,97,99,105,116,121)

var joke = "Are we there yet?" + "\nI guess not.";    //this is string concatenation.
console.log(joke);   // the output will be the 2 statements.

var student = "john";
var statusJoin = true;
var statusDismess = false;
if (statusJoin){
    console.log("Welcome "+student+" to the mission of Captain Jack.") 
    // that means that if statusJoin is true, print this message, if it's false ,show nothing.
}

// escaping characters are \==\\, \"==", \'==', \n, \t
 "Yes" != "yes" // because the upper and lower case 1st letter.
 "1"==1 //true , because JS converts 1 to string and compares with 1
 ''== false // true, because the empty string will be converted to "0"
  "julia"+1 // output will be julia1, as JS converts 1 to string == implicit coercion.
  "1" === 1 //false , because this is called strict equality with 3 equal signs.

  var answer = "I am a man"=="I am a man"; // this boolean will return true or false, will not return a value
  console.log(answer); //the output is true.

  var xx = null; // this is null or resereved for future
  var yy ; console.log(yy); // this will return undefined.

  Math.sqrt(-10); // NAN or not-a-number ... returns as there is no squre root for negative integers.

  var h=7;
  var j=9;
  if (h>=j){
        console.log("true");
  }else{                        // if-else statement.
        console.log("false");
  }

  var weather="sunny";
  if (weather==="snow"){
    console.log("Bring a coat");
  } else if (weather==="rain"){    // else-if statement used for more than two options.
    console.log("Bring a rain jacket");
  }else{
    console.log("wear what you wanna wear");
  }


  var numb = 47;
  if (numb % 2 === 0){     //this is how to use modulo or % sign in if statement. NOTE : % means remainder .
    console.log("even");
  }else{
    console.log("odd");
  }


  var room1 = "diningRoom"
  var room1 = "gallery" 
  var room1 = "billiardsRoom"
  var room4 = "ballroom"

  var weapon1 = "knife";
  var weapon2 = "trophy";
  var weapon3 = "pool stick";
  var weapon4 = "poison";

  var suspect1 = "Mr. Parkes";
  var suspect2 = "Mr. Van Cleve";
  var suspect3 = "Mrs. Sparr";
  var suspect4 = "Mr. Kalehoff";

  for (suspect===)


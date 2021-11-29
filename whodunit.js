var room = "ballroom";
var suspect = "Mr. Kalehoff";
var weapon = "";
var solved = false;

if (room === "gallery" && suspect === "Ms. Van Cleve"){
  weapon = "trophy";
  solved = true;
}else if ( room === "billiards room" && suspect === "Mrs. Sparr"){
  weapon = "pool stick";
  solved = true;
}else if ( room === "dining room"){
    if (suspect === "Mr. Parkes"){   //another form to use if inside if instead of &&
  weapon = "knife";
  solved = true;
    }
}else if ( room === "ballroom" && suspect === "Mr. Kalehoff"){
  weapon = "poison";
  solved = true;
}

if (solved) {
    console.log(suspect + " did it in the "+ room +" with the " + weapon + "!");
}




}else if (flavor === "vanilla" || "chocolate" && vessel === "cone" || "bowl" && toppings === "sprinkles" || "peanuts"){
    console.log("Sorry, your order is not found");
  }
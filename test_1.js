/* global console */

 //use strict;

var status = function sense(emot) {
  console.log("I feel ..." + emot);
};

function realFeel(recallFunc, innerFeel){
  recallFunc(innerFeel);
}

realFeel(status, "thirsty");

var git = function(food) {

    var eat = "";

    for (var i = 0; i <= food; i++) {
        eat = eat + "delicious!";
    }

    return eat;
};


function helloCat(callbackFunc) {

    return " I like it, " + callbackFunc(6);
}

helloCat(git);
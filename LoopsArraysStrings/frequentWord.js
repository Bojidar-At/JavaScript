function findMostFreqWord(value) {
    var wordCounter = {}; // tozi obekt she sudurja dumite i sreshtu tqh broq im
    var wordsArray = value.split(/[\W]+/);

    for (var i = 0; i < wordsArray.length; i++) {
        wordCounter[wordsArray[i].toLowerCase()] = (wordCounter[wordsArray[i].toLowerCase()] || 0) + 1; // ako e 0 she inicializira 1, ako e pove4e she dobavi 1
    }

    var vals = Object.keys(wordCounter).map(function (key) { // polu4avame array s vsi4ki values
        return wordCounter[key];
    });

    var keys = Object.keys(wordCounter);
    keys.sort();

    var greatestValue = Math.max.apply(Math, vals);

    for (var a in keys) {
        if (keys[a].length > 0) {
            if (wordCounter[keys[a]] === greatestValue) {
                console.log("%s -> %d times", keys[a], greatestValue);
            }
        }
    }
    console.log();
}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');
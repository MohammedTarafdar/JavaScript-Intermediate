var speech = "Hello! I am Ashik. I am learning JavaScript. Would you like to join with me.";
// word count

var wordCount =0;
for(var i=0; i<speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){
        wordCount ++;
    }
}
wordCount++;
console.log(wordCount);

// count a from a string
var count = 0;
for(var i=0; i<speech.length; i++){
    var letter = speech[i];
    if(letter == "a"){
        count++
    } 
}
console.log("Total number of a is :", count);


// reverse a string

var statement = "Hello my friend !"

var reverse = "";
for(var i=0; i<statement.length; i++){
    var char = statement[i];
    reverse = char +reverse;
}
console.log(reverse);

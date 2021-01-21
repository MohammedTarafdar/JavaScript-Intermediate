
var randomNumber = Math.random()*6;
var output = Math.round(randomNumber);

console.log(output);
console.log(" ")

// How to get 10 random number at once

for(var i=0; i<10; i++){
    var randomNumber = Math.random()*6;
    var output = Math.round(randomNumber);
    console.log(output);
}
console.log("*******")

// create a function for random number

function getRandomNumber(n){
    var 
    for(var i=0; i<n; i++){
        var randomNumber = Math.random()*6;
        var output = Math.round(randomNumber);
        return output;
    }
    
}

var randomOutput = getRandomNumber(6);
console.log(randomOutput);



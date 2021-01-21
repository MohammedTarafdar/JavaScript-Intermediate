
// Max value from an array

var marks = [79, 56, 34, 57, 68, 83, 45, 92, 67, 59, 97, 31, 43, 47, 61, 95, 39, 73];
var maxMark = marks[0];
for(var i = 0; i < marks.length; i ++){
    var element = marks[i];
    if(element > maxMark){
        maxMark = element;
    }
}
console.log("Height marks is : ", maxMark)

// small marks from this array

var smallMark = marks[0];
for(var i = 0; i< marks.length; i ++){
    var smallElement = marks[i];
    if(smallElement<smallMark){
        smallMark = smallElement;
    }
    
}
console.log("Smallest mark is : ", smallMark);


// How to add all the elements from an array

var numberArray =[20, 30, 55, 65, 70, 61, 19];
var sum = 0;

for (var i =0; i < numberArray.length; i++){
    var element = numberArray[i];
    sum = sum+element;
}
console.log("Total of the numberArray is : ", sum);

// How to remove duplicat value from an array

var nameArray = ['Talha', 'Sumon', 'Sohel', 'Arif', 'Sumon', 'Ashraf', 'Arif'];
var uniqueName = [];
for(var i=0; i< nameArray.length; i++ ){
    var element = nameArray[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log("Unique Name Array :", uniqueName);


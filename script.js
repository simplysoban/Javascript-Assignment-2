var one = prompt("Enter a positive floating number: ");

console.log("POSITIVE:")

if(one>0){
    console.log("Your number: ", one);
    console.log("Round off value: ", Math.round(one));
    console.log("Floor value: ", Math.floor(one));
    console.log("Ceil value: ", Math.ceil(one));
}
else{
    console.log("Please enter a positive number.");
}



console.log("NEGATIVE:")

var two = prompt("Enter a negative floating number: ");

if(two<0){
    console.log("Your number: ", two);
    console.log("Round off value: ", Math.round(two));
    console.log("Floor value: ", Math.floor(two));
    console.log("Ceil value: ", Math.ceil(two));
}
else{
    console.log("Please enter a negative number.");
}
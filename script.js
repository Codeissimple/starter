'use strict';
/*
let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log(`I can drive :D`);

const interface = 'Audio';
const private = 5555;


function logger(){
    console.log('I\'m a function');
}
logger();


function fruitProcessor(apples, oranges) {
    
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(14, 89);
console.log(appleJuice);

*/
//function declaration

const age3 = calcAge1(1991); 
console.log('first call than declare');

function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//function expression
const calcAge2 = function(birthYear){
    return 2022 - birthYear;
}

const age2 = calcAge1(1991);
console.log(age1, age2);
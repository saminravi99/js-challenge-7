

// Celsius to Farhenheit
function celsiusToFarhenheit(celsius){
    var farhenheit = celsius * 9/5 + 32;
    return farhenheit;
}

let yourTemp = 50;
let yourTempFarhenheit = celsiusToFarhenheit(yourTemp);
console.log("Today's Temperature is " + yourTempFarhenheit + " Degree Farhenheit");


// Farhenheit to Celsius
function farhenheitToCelsius(farhenheit){
    var celsius = (farhenheit - 32) * 5/9;
    return celsius;
}

let yourTemps = 50;
let yourTempCelsius = farhenheitToCelsius(yourTemp);
console.log("Today's Temperature is " + yourTempCelsius + " Degree Celsius");



// Grade System 
function gradeSystem(score){
    if (score >= 0 && score < 33){
    console.log ( "Your Grade : F ")
    console.log("You Have failed")
}
else if (score >= 33 && score < 60){
    console.log ( "Your Grade : D ")
    console.log("You Have Passed")
}
else if (score >= 60 && score < 70){
    console.log ( "Your Grade : C ")
    console.log("You Have Passed")
}
else if (score >= 70 && score < 80){
    console.log ( "Your Grade : B ")
    console.log("You Have Passed")
}
else if (score >= 80 && score < 90){
    console.log ( "Your Grade : A ")
    console.log("You Have Passed")
}
else if (score >= 90 && score <= 100){
    console.log ( "Your Grade : A+ ")
    console.log("You Have Passed")
}
else{
    console.log("You are Einstein! Go to Nasa immediately!!")
}
}

let yourMarks = -120 ;
gradeSystem(yourMarks);






// Math of simple profit   

function isProfit(Principal, rateOfProfit, timeYear){
    return Principal * rateOfProfit * timeYear;
}

var P = 500;
var r = 30/100;
var n = 2;

var myProfit = isProfit(P,r,n);
console.log('My Profit is ' + myProfit + ' Taka');
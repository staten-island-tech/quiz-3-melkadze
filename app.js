////melkadze


///basics

//generic tip calculator
function tip(billValue, tipFraction) {
    return billValue * tipFraction;
}

//raph's specific tip calculator
function raphTip(billValue) {
    if (billValue < 50) {
        return tip(billValue, 0.2);
    } else if (billValue < 200.01) {
        return tip(billValue, 0.15);
    } else {
        return tip(billValue, 0.1);
    }
}

//raph's total (with tip) calculator
function raphTotal(billValue) {
    return raphTip(billValue) + billValue;
}


///arrays

//tip amount array
const tipArray = [raphTip(140), raphTip(45), raphTip(270)]

//total (with tip) amount array
const totalArray = [raphTotal(140), raphTotal(45), raphTotal(270)]


///array method

//filter function
function isAboveHundred(value) {
    return value > 100;
}

//filter method
const copyArray = totalArray.filter(isAboveHundred);


///printout

console.log("The amount Raphael will tip is:");
console.log(tipArray[0], tipArray[1], tipArray[2]);
console.log("The amount Raphael will pay in total is:");
console.log(totalArray[0], totalArray[1], totalArray[2]);
console.log("The part that proves I used an array filter method for bills over $100 is:");
console.log(copyArray[0], copyArray[1]);

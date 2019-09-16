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

//array method
const copyArray = totalArray.filer();

console.log(tipArray[0], tipArray[1], tipArray[2]);
console.log(totalArray[0], totalArray[1], totalArray[2]);
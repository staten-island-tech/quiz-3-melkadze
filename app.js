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




///////quiz four

//step four
//console.log(`Does Rob, who is ${massRob}kg and ${heightRob}m with a BMI of ${bmiRob}, have a higher BMI than that of Dejon, with ${massDejon}kg and ${heightDejon}m with a BMI of ${bmiDejon}? The answer is ${robHigherBMI}!`);

console.log("On a completely unrelated note:");

const rob = {
    fullName: 'Robert Grande',
    mass: 78,
    height: 1.69,
    getBMI: function(){
        bmi = (this.mass / ((this.height) * (this.height)));
        return bmi;
    }
}

const dejon = {
    fullName: 'Dejonious Kurticle',
    mass: 110,
    height: 1.95,
    getBMI: function(){
        bmi = (this.mass / ((this.height) * (this.height)));
        return bmi;
    }
}

console.log(`Does ${rob.fullName}, with a BMI of ${rob.getBMI()}, have a higher BMI than that of ${dejon.fullName}, with a BMI of ${dejon.getBMI()}?`);

if (dejon.getBMI() > rob.getBMI()) {
    console.log("Nope!");
} else if (dejon.bmi < rob.bmi) {
    console.log("Yep!");
} else {
    console.log("They're tied!");
}
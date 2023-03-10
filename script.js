"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");
/*
function logger() {
    console.log("My name is mio");
}

// calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {

    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

//function DECLARATION

/*
function calcAge1(birthYear) {
    //     const age = 2022 - birthYear;
    //     return age;
    return 2022 - birthYear;
}

const age1 = calcAge1(1999);
console.log(age1);

// function EXPRESSION
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1999);
console.log(age1, age2);
*/

// arrow function
/*
// birthYear => 2022 - birthYear;
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;

}

console.log(yearsUntilRetirement(1999, "mio"));
console.log(yearsUntilRetirement(2002, "kristinka"));
*/

/*
function cutPieces(fruit) {
    return fruit * 4;


}

function fruitProcessor(apples, oranges) {

    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);


    const juice = `Juice with ${applePieces} pieces of apple
     and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(2, 3));

*/
/*
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}


const yearsUntilRetirement = function (birthYear, firstName) {

    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;

    } else {
        console.log(`${firstName} is already retired`);
        return -1;

    }
    // return `${firstName} retires in ${retirement} years`;

}

console.log(yearsUntilRetirement(1999, "mio"));
console.log(yearsUntilRetirement(1950, "kristinka"));
*/

// FUNCTION NAME
// FUNCTION PARAMETERS
// FUNCTION BODY
// RETURN STATEMENT - OUTPUT VALUE Z FUNKCIE
// VOLANIE FUNCKCIE S ()
// ARGUMENTY A HODNOTY FUNKCIE, INPUT DATA
// VARIABLE NA ULOZENIE RETURNED VALUE

// arrow function
/*
// birthYear => 2022 - birthYear;
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;

}

console.log(yearsUntilRetirement(1999, "mio"));
console.log(yearsUntilRetirement(2002, "kristinka"));
*/
/*
const scoreDolphins = (44 + 23 + 71) / 3;
const scoreKoalas = (65 + 54 + 49) / 3;

console.log(scoreDolphins);
console.log(scoreKoalas);

const calcAverage = (scoreDolphins, scoreKoalas) => {


    return `Priemerne skore delfinov je ${scoreDolphins} a priemerne
skore koal je ${scoreKoalas}.`;

}

console.log(calcAverage(scoreDolphins, scoreKoalas));


const checkWinner = (scoreDolphins, scoreKoalas) => {

    if (scoreDolphins > scoreKoalas) {

        console.log(`Delfini vyhrali
         (${scoreDolphins} vs ${scoreKoalas})  `)

        return;
    }
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(44, 23, 71));


let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);


const checkWinner = function (avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win the trophy👌
        (${avgDolphins} vs ${avgKoalas})`);

    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);

    } else {
        console.log("No team wins");
    }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(300, 100);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

/*
const friend1 = "Jimmy";
const friend2 = "Kristinka";
const friend3 = "mio";

const friends = ["Jimmy", "Kristinka", "mio"]
console.log(friends);

const y = new Array(2018, 2002, 1999);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "petko";
console.log(friends);

const kikuska = ["Kristinka", "miova", 2022 - 2002, "laska", friends];
console.log(kikuska);

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}
const years = [1999, 2002, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);


const ages = [calcAge(years[0]), calcAge(years[2]),
calcAge(years[years.length - 1])];
console.log(ages);

*/

/*

const friends = ["Jimmy", "Kristinka", "mio"];

// add elements
const newLength = friends.push("Jay");

console.log(friends);
console.log(newLength);

friends.unshift("miso");
console.log(friends);

//remove elements
friends.pop();
const popped = friends.pop(); //last element
console.log(friends);
console.log(popped);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf("Kristinka"));
console.log(friends.indexOf("bob"));

friends.push(21);
console.log(friends.includes("Kristinka"));
console.log(friends.includes(21));

if (friends.includes("Kristinka")) {

    console.log("Moja laska je Kristinka");
}

*/

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip},
// and the total value ${tip + bill} `);

// ZADANIE
/*
const calcTip = function (bill) {

    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


// const calcTip = bill => bill >= 50 &&  <= 300
//     ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2],];


console.log(bills, tips, totals);

*/
/*
const mio = {
    firstName: "Petko",
    lastName: "Kristinkin",
    age: 2022 - 1999,
    job: "student",
    friends: ["miso", "samo", "pato"]
};
console.log(mio);

console.log(mio.friends[1]);
console.log(mio["firstName"]);

const nameKey = "Name";
console.log(mio["first" + nameKey]);
console.log(mio["last" + nameKey]);

const interestedIn = prompt("What do you want to know about me? Choose between firstName, lastName, age, job, and friends");



if (mio[interestedIn]) {
    console.log(mio[interestedIn]);

} else {
    console.log("Wrong input! Choose between firstName, lastName, age, job, and friends")
}

mio.location = "SVK";
mio["twitter"] = "@mioofficial2";
console.log(mio);


//challenge
console.log(`${mio.firstName} has ${mio.friends.length} friends, and his best friend
is ${mio.friends[0]}`);


*/

/*
const mio = {
    firstName: "Petko",
    lastName: "Kristinkin",
    birthYear: 1999,
    job: "student", //string
    friends: ["miso", "samo", "pato"], //array
    hasDriversLicense: true, //boolean

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function () {
    //     //console.log(this);
    //     return 2022 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}
        -year old ${mio.job}, and he has ${this.hasDriversLicense ? "a" : "no"}
        driver licence.`
    }

};

console.log(mio.calcAge());

console.log(mio.age);
console.log(mio.age);
console.log(mio.age);


//console.log(`${mio.firstName} je ${mio.calcAge()} rocny ${mio.job} `);
console.log(mio.getSummary());

*/
/*

const mark1 = {
    firstName: "Mark",
    lastName: "Miller",
    markMass: 78,
    markHeight: 1.69,

    calcBMI: function () {
        this.bmi = this.markMass / this.markHeight ** 2;
        return this.bmi;

    }





};

const john1 = {
    firstName: "John",
    lastName: "Smith",
    johnMass: 92,
    johnHeight: 1.95,

    calcBMI: function () {
        this.bmi = this.johnMass / this.johnHeight ** 2;
        return this.bmi;

    }

};

mark1.calcBMI();
john1.calcBMI();

console.log(mark1.bmi, john1.bmi);


if (mark1.bmi > john1.bmi) {
    console.log(`${mark1.firstName}'s BMI (${mark1.bmi}) is higher than
    ${john1.firstName}'s BMI (${john1.bmi})`)
} else if (john1.bmi > john1.bmi) {
    console.log(`${john1.firstName}'s BMI (${john1.bmi}) is higher than
    ${mark1.firstName}'s BMI (${mark1.bmi})`)



}

*/

//console.log("Lifting weights repetition 1 😜");

// for loop keeps running while condition is true

/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 😜`);
}
*/

/*
const mio = [
    "Petko",
    "Kristinkin",
    2022 - 1999,
    "student",
    ["miso", "samo", "pato"],
    true
];

const types = []

for (let i = 0; i < mio.length; i++) {

    console.log(mio[i], typeof mio[i]);

    // filling types of array
    //types[i] = typeof mio[i];

    types.push(typeof mio[i]);


}

console.log(types);

const years = [1999, 2002, 2020, 1974];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);

// continue and break

console.log("--ONLY STRINGS--")
for (let i = 0; i < mio.length; i++) {
    if (typeof mio[i] !== "string") continue;

    console.log(mio[i], typeof mio[i]);

}

console.log("--BREAK WITH NUMBER--")
for (let i = 0; i < mio.length; i++) {
    if (typeof mio[i] == "number") break;

    console.log(mio[i], typeof mio[i]);

}

*/
/*
const mio = [
    "Petko",
    "Kristinkin",
    2022 - 1999,
    "student",
    ["miso", "samo", "pato"],

];

for (let i = mio.length - 1; i >= 0; i--) {
    console.log(i, mio[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---Starting exercise${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting repetition ${rep}`)
    }
}

*/
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 😜`);
}
*/
/*
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 😜`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;


while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6) console.log("Loop has ended");
}

*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }

  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/

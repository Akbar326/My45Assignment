// Assignment Solution

// Task# 01
// Installation complete






//Task# 02
let personName: string = "Akbar";
console.log(`Hello ${personName}, would you like to learn some TypeScript today?`);






//Task# 03
let personName: string = "Akbar Ali";

// Lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);

// Uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);

// Titlecase
console.log("titlecase:", personName.replace(/\b\w/g,c=> c. toUpperCase()));






//Task# 04
const quote: string = "That it will never come again is what makes life so sweet.";
const author: string = "Emily Dickinson";

console.log(`${author} once Said, "${quote}"`);






//Task# 05
const quote: string = "Imagination is more important than knowledge.";
const famous_person: string = "Albert Einstein";

const message: string = `"${quote}" - ${famous_person}`;

console.log(message);






//Task# 06
const personName: string = "\t\n Akbar Ali \t\n";

console.log("Original:", personName);
console.log("Stripped:", personName.trim());






//Task# 07 & 08
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);






//Task# 09
const favoriteNumber: number = 7;
console.log(`My favorite number is ${favoriteNumber}`);






//Task# 10

Author: [Akbar]
Date: [Friday, Feburary, 16, 2024]

// Writing addition, subtraction, multiplication, and division operations that each result in the number 8.
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);






// Task# 11

// # Creating an array of names
names: ["Azlan", "Rohan", "Shayan", "Roshan", "Haider"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);






// Task# 12

names: ["Azlan", "Rohan", "Shayan", "Roshan", "Haider"];
message: "Do you like to play cricket";

console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);
console.log(names[3] + " " + message);
console.log(names[4] + " " + message);






// Task# 13

// # Creating an array of favorite transportation examples

let transportation: string[] = ["Honda bike", "Civic", "Vigo"]
transportation.map((items) => console.log(`I would like to own a ${items}`));






// Task# 14

let guestArr: string[] = ["Azlan", "Rohan", "Shayan"];

guestArr.map((items) => console.log(`Dear ${items}, You are cordially invited to dinner.`));






// // Task# 15

let guestArr: string[] = ["Azlan", "Rohan", "Shayan"];
let unavailable_guest: string[] = "Azlan";

console.log(unavailable_guest + " " + "can not attend the dinner.");


let new_guest: string[] = "Haider";

guestArr [guestArr.indexOf(unavailable_guest)] = new_guest;

console.log(guestArr);

guestArr.map((items) => 
console.log(`Dear ${items},You are cordially invited to dinner. `));






// Task# 16

//Part.1 
let guestArr: string[] = ["Haider", "Rohan", "Azlan" , "Shayan"];
let unavailable_guest: string[] = "Azlan";
let new_guest: string[] = "Huzaifa";

guestArr[guestArr.indexOf(unavailable_guest)] = new_guest;

console.log(guestArr);

guestArr.map((items) => 
console.log(`Dear ${items}, We have exciting news! We found a bigger dinner table and would love for you to join us.`));

// Part.2
let new_guest_beg: string = "Hammad";
guestArr.unshift(new_guest_beg);

console.log(guestArr);

// Part.3
let new_guest_mid: string = "Sufyan";
let middleIndex: number = guestArr.length/2;
guestArr.splice(middleIndex,0,new_guest_mid);

console.log(guestArr);

// Part.4
guestArr.push("Ansar");

console.log(guestArr);

// Part.5
guestArr.map((items) => 
console.log(`Dear ${items}, We have exciting news! We found a bigger dinner table and We would be honored to have you join us..`));






// Task# 17

// Part.1
let guests: string[] = ["Haider", "Rohan", "Azlan", "Shayan", "Sufyan"];

console.log("Due to limited space, only two people can be invited for dinner.");

// Part.2
while (guests.length > 2) {
    const removedGuest: string = guests.pop()!;
    console.log(`Sorry, ${removedGuest}, you are no longer invited to dinner`);
}

// // Part.3
let remainingGuests: string[] = ["Haider", "Rohan"];

remainingGuests.forEach((guest) => {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
});

// // Part.4
remainingGuests.pop();
remainingGuests.pop();

console.log("Final guest list:", remainingGuests);







// Task# 18

// Part.1
let placesToVisit: string[] = ["America", "Paris", "Dubai", "Turkey", "korea"];

// Part.2
console.log("Original order:", placesToVisit);

// Part.3
console.log("Alphabetical order:", [...placesToVisit].sort());

// Part.4
console.log("Original order after sorting:", placesToVisit);

// Part.5
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Part.6
console.log("Original order after reverse sorting:", placesToVisit);

// Part.7
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

//Part.8
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// Part.9
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Part.10
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);






// Task# 19

let guestArr: string[] = ["Azlan", "Rohan", "Shayan", "Haider", "Huzaifa"];

guestArr.map((items) => console.log(`Dear ${items}, You are cordially invited to dinner.`));

console.log(`Number of people invited to dinner: ${guestArr.length}`);






// Task# 20

let cities: string[] = ["karachi" , "Lahore" , "Peshawar" , "Islamabad"]
console.log("List of cities:");

console.log(cities);






// Task# 21

let person: { name: string, gender: string, age: number } = { name: "Akbar", gender: "Male", age: 30 };
console.log(person);





// Task# 22

const days: string[]  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Staurday"];
console.log(days[7]);
console.log(days[6]);






// Task# 23
let car: string = "subaru"

console.log("Is car == 'subaru'? predict True")
console.log(car == 'subaru')

console.log("Is car != 'honda city'? predict True")
console.log(car != 'honda city')

console.log("Is car == 'Subaru'? predict False")
console.log(car == 'Subaru')


console.log("Is car == 'SUBARU'? predict False")
console.log(car == 'SUBARU')

console.log("Is car.length == 6? predict True")
console.log(car.length == 6)

console.log("Is car.length !== 10? predict True")
console.log(car.length !== 10)

console.log("is 10 > 45 ? predict False")
console.log(10 > 45)

console.log("is 3 <= 2 ? predict False")
console.log(3 <= 2)

console.log("is 72 >= 83 ? predict False")
console.log(72 >= 83)

console.log("is 72 >= 63 ? predict False")
console.log(72 >= 63)






// Task# 24

// equality and inequality with strings
let string1: string = 'apple';
let string2: string = 'orange';

console.log("String Equality Test (True):", string1 === 'apple');
console.log("String Inequality Test (False):", string1 == 'orange');



// lower case function
let uppercaseString: string = 'HELLO';

console.log("Lowercase Test (True):", uppercaseString.toLowerCase() === 'hello');



// Numerical tests
let num1: number = 10;
let num2: number = 20;

console.log("Equality Test (False):", num1 === num2);
console.log("Inequality Test (True):", num1 !== num2);
console.log("Greater Than Test (False):", num1 > num2);
console.log("Less Than Test (True):", num1 < num2);
console.log("Greater Than or Equal To Test (False):", num1 >= num2);
console.log("Less Than or Equal To Test (True):", num1 <= num2);



// "and" and "or" operators
let isSunny: boolean = true;
let isWarm: boolean = false;

console.log("AND Operator Test (False):", isSunny && isWarm);
console.log("OR Operator Test (True):", isSunny || isWarm);



// item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];

console.log("Array Inclusion Test (True):", fruits.includes('banana'));

// item is not in an array
console.log("Array Exclusion Test (False):", !fruits.includes('pear'));






// Task# 25

let alien_color: string = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}


let alien_color: string = 'red';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}






// Task#26

// if block
let alien_color: string = 'green'

if (alien_color === 'red') {
  console.log("You just earned 5 points!");
} else {
  console.log("You just earned 10 points!");
}

// else block
let alien_color: string = 'yellow'

if (alien_color == 'green') {
 console.log("You just earned 5 points!");
} else {
 console.log("You just earned 10 points!");
}





// Task# 27

let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("You just earned 5 points!");
} else if (alien_color === 'yellow') {
    console.log("You just earned 10 points!");
} else {
    console.log("You just earned 15 points!");
}






// Task# 28

let age: number = 19;

if (age < 2) {
    console.log("You're a baby!");
} else if (age < 4) {
    console.log("You're a toddler!");
} else if (age < 13) {
    console.log("You're a kid!");
} else if (age < 20) {
    console.log("You're a teenager!");
} else if (age < 65) {
    console.log("You're an adult!");
} else {
    console.log("You're an elder!");
}






// Task# 29

let favorite_fruits: string[] = ['mango', 'orange', 'strawberry'];

if (favorite_fruits.includes('bananas')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like orange!");
}
if (favorite_fruits.includes('mango')) {
    console.log("You really like mango!");
}
if (favorite_fruits.includes('kiwis')) {
    console.log("You really like kiwis!");
}
if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberry!");
}






// Task# 30

let usernames: string[] = ['Azlan', 'Shayan', 'Admin', 'Huzaifa', 'Rohan'];

usernames.forEach(username => {
  if (username === 'Admin') {
    console.log("Hello Admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
});






// Task# 31

let usernames: string[] = ['Azlan', 'Shayan', 'Admin', 'Huzaifa', 'Rohan'];

if (usernames.length === 0) {
    console.log ("We need to find some users!")
} else {
    for (let user of usernames) {
        if (user === 'Admin') {
            console.log("Hello Admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${usernames}, thank you for logging in again.`);
        }
    }    
}


let usernames: string[] = [];

if (usernames.length === 0) {
    console.log ("We need to find some users!")
}






// Task# 32

let current_users: string[] = ['Azlan', 'Rohan', 'Admin', 'Roshan', 'Shayan'];
let new_users: string[] = ['Hammad', 'Shayan', 'Admin', 'Anas', 'Ansaar'];

let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken.`);
    } else {
        console.log(`Great ${new_user},  is still available.`);
    }
}






// Task# 33

let numbers: number[] = Array.from({ length: 9 }, (_, index) => index + 1);

for (let number of numbers) {
    if (number === 1) {
        console.log("1st");
    } else if (number === 2) {
        console.log("2nd");
    } else if (number === 3) {
        console.log("3rd");
    } else {
        console.log(`${number}th`);
    }
}






// Task# 34

let favorite_pizzas: string[] = ['pepperoni', 'hawaiian', 'veggie'];


for (let pizza of favorite_pizzas) {
    console.log(pizza);
}

console.log("\n");

for (let pizza of favorite_pizzas) {
    console.log(`I really love ${pizza} pizza!`);
}

console.log("\nI really love pizza!");






// Task# 35

let animals: string[] = ['dog', 'cat', 'rabbit'];

// Print the names of each animal
for (let animal of animals) {
    console.log(animal);
}

console.log("\n");

// Print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log("\n All of these are great pets! but i love cats more");






// Task# 36

function makeShirt(size: string, message: string): void{    
    console.log(`You order a ${size} shirt that says ${text}`);
}

makeShirt('Large', '"I love typescript"');
makeShirt('Large', '"I need a big shirt"');






// Task# 37

function makeShirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`You order a ${size} shirt that says ${text}`);
}

makeShirt();
makeShirt('Medium');

makeShirt('Small', 'Hello, TypeScript!');






// Task# 38

function describeCity(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
}

describeCity('Karachi');
describeCity('Paris', 'France');
describeCity('New York', 'America');






// Task# 39

function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

let location1 = cityCountry('Lahore', 'Pakistan');
let location2 = cityCountry('Paris', 'France');
let location3 = cityCountry('New York', 'USA');

console.log(location1);
console.log(location2);
console.log(location3);






// Task# 40

function makeAlbum (artist: string, title: string): {artist: string; title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}

let album = makeAlbum("azla", "light")
console.log(album);

let album = makeAlbum("shayan", "Red wave")
console.log(album);

let album = makeAlbum("haider", "sea breez")
console.log(album);






// Task# 41

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
const magicianNames: string[] = ['Azlan', 'Shayan', 'haider', 'Huzaifa'];
showMagicians(magicianNames);






// Task# 42

function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    let greatMagicians: string[] = magicians.map(magician => magician + " the Great");

    return greatMagicians;
}

let magicianNames: string[] = ['Azlan', 'Shayan', 'haider', 'Huzaifa'];

let greatMagicians: string[] = makeGreat(magicianNames);

showMagicians(greatMagicians);






// Task# 43

function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => magician + " the Great");
}

let magicianNames: string[] = ['Azlan', 'Shayan', 'haider', 'Huzaifa'];

let greatMagicians: string[] = makeGreat([...magicianNames]);

showMagicians(magicianNames);

showMagicians(greatMagicians);






// Task# 44

function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    
    for (let i = 0; i < items.length; i++){
        console.log(`-${items[i]}`)

    }
}

console.log("Enjoy your sandwich")


orderSandwich('capsicum', 'tomato', 'chicken');
orderSandwich('beef', 'cheez');
orderSandwich('garlic chicken', 'mayo sauce');






// Task# 45

type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, options: Rcord<string, any>): Car {
    return{
        manufacturer,
        model,
        ...optional
    }
}


const mycar: car = createCar("toyota", "corolla", { color: "white", year: "2024"})
console.log(mycar);

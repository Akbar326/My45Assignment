// Assignment Solution

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


// Task# 01
// Installation complete






//Task# 02
var personName = "Akbar";
console.log("Hello ".concat(personName, ", would you like to learn some TypeScript today?"));

//Task# 03
var personName = "Akbar Ali";

// Lowercase
console.log("Lowercase: ".concat(personName.toLowerCase()));

// Uppercase
console.log("Uppercase: ".concat(personName.toUpperCase()));

// Titlecase
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));

//Task# 04
var quote = "That it will never come again is what makes life so sweet.";
var author = "Emily Dickinson";
console.log("".concat(author, " once Said, \"").concat(quote, "\""));

//Task# 05
var quote = "Imagination is more important than knowledge.";
var famous_person = "Albert Einstein";
var message = "\"".concat(quote, "\" - ").concat(famous_person);
console.log(message);






//Task# 06
var personName = "\t\n Akbar Ali \t\n";
console.log("Original:", personName);
console.log("Stripped:", personName.trim());






//Task# 07 & 08
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);






//Task# 09
var favoriteNumber = 7;
console.log("My favorite number is ".concat(favoriteNumber));






//Task# 10
Author: [Akbar];
Date: [Friday, Feburary, 16, 2024];

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
var transportation = ["Honda bike", "Civic", "Vigo"];
transportation.map(function (items) { return console.log("I would like to own a ".concat(items)); });






// Task# 14
var guestArr = ["Azlan", "Rohan", "Shayan"];
guestArr.map(function (items) { return console.log("Dear ".concat(items, ", You are cordially invited to dinner.")); });






// // Task# 15
var guestArr = ["Azlan", "Rohan", "Shayan"];
var unavailable_guest = "Azlan";
console.log(unavailable_guest + " " + "can not attend the dinner.");
var new_guest = "Haider";
guestArr[guestArr.indexOf(unavailable_guest)] = new_guest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ",You are cordially invited to dinner. "));
});






// Task# 16

//Part.1 
var guestArr = ["Haider", "Rohan", "Azlan", "Shayan"];
var unavailable_guest = "Azlan";
var new_guest = "Huzaifa";
guestArr[guestArr.indexOf(unavailable_guest)] = new_guest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", We have exciting news! We found a bigger dinner table and would love for you to join us."));
});

// Part.2
var new_guest_beg = "Hammad";
guestArr.unshift(new_guest_beg);
console.log(guestArr);

// Part.3
var new_guest_mid = "Sufyan";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, new_guest_mid);
console.log(guestArr);

// Part.4
guestArr.push("Ansar");
console.log(guestArr);

// Part.5
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", We have exciting news! We found a bigger dinner table and We would be honored to have you join us.."));
});






// Task# 17

// Part.1
var guests = ["Haider", "Rohan", "Azlan", "Shayan", "Sufyan"];
console.log("Due to limited space, only two people can be invited for dinner.");

// Part.2
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", you are no longer invited to dinner"));
}

// // Part.3
var remainingGuests = ["Haider", "Rohan"];
remainingGuests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});

// Part.4
remainingGuests.pop();
remainingGuests.pop();
console.log("Final guest list:", remainingGuests);






// Task# 18

// Part.1
var placesToVisit = ["America", "Paris", "Dubai", "Turkey", "korea"];

// Part.2
console.log("Original order:", placesToVisit);

// Part.3
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());

// Part.4
console.log("Original order after sorting:", placesToVisit);

// Part.5
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());

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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);






// Task# 19
var guestArr = ["Azlan", "Rohan", "Shayan", "Haider", "Huzaifa"];
guestArr.map(function (items) { return console.log("Dear ".concat(items, ", You are cordially invited to dinner.")); });
console.log("Number of people invited to dinner: ".concat(guestArr.length));






// Task# 20
var cities = ["karachi", "Lahore", "Peshawar", "Islamabad"];
console.log("List of cities:");
console.log(cities);






// Task# 21
var person = { name: "Akbar", gender: "Male", age: 30 };
console.log(person);
// Task# 22
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Staurday"];
console.log(days[7]);
console.log(days[6]);






// Task# 23
var car = "subaru";
console.log("Is car == 'subaru'? predict True");
console.log(car == 'subaru');
console.log("Is car != 'honda city'? predict True");
console.log(car != 'honda city');
console.log("Is car == 'Subaru'? predict False");
console.log(car == 'Subaru');
console.log("Is car == 'SUBARU'? predict False");
console.log(car == 'SUBARU');
console.log("Is car.length == 6? predict True");
console.log(car.length == 6);
console.log("Is car.length !== 10? predict True");
console.log(car.length !== 10);
console.log("is 10 > 45 ? predict False");
console.log(10 > 45);
console.log("is 3 <= 2 ? predict False");
console.log(3 <= 2);
console.log("is 72 >= 83 ? predict False");
console.log(72 >= 83);
console.log("is 72 >= 63 ? predict False");
console.log(72 >= 63);






// Task# 24

// equality and inequality with strings
var string1 = 'apple';
var string2 = 'orange';
console.log("String Equality Test (True):", string1 === 'apple');
console.log("String Inequality Test (False):", string1 == 'orange');

// lower case function
var uppercaseString = 'HELLO';
console.log("Lowercase Test (True):", uppercaseString.toLowerCase() === 'hello');

// Numerical tests
var num1 = 10;
var num2 = 20;
console.log("Equality Test (False):", num1 === num2);
console.log("Inequality Test (True):", num1 !== num2);
console.log("Greater Than Test (False):", num1 > num2);
console.log("Less Than Test (True):", num1 < num2);
console.log("Greater Than or Equal To Test (False):", num1 >= num2);
console.log("Less Than or Equal To Test (True):", num1 <= num2);

// "and" and "or" operators
var isSunny = true;
var isWarm = false;
console.log("AND Operator Test (False):", isSunny && isWarm);
console.log("OR Operator Test (True):", isSunny || isWarm);

// item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Array Inclusion Test (True):", fruits.includes('banana'));

// item is not in an array
console.log("Array Exclusion Test (False):", !fruits.includes('pear'));

// Task# 25
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
var alien_color = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}






// Task#26

// if block
var alien_color = 'green';
if (alien_color === 'red') {
    console.log("You just earned 5 points!");
}
else {
    console.log("You just earned 10 points!");
}

// else block
var alien_color = 'yellow';
if (alien_color == 'green') {
    console.log("You just earned 5 points!");
}
else {
    console.log("You just earned 10 points!");
}






// Task# 27
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("You just earned 5 points!");
}
else if (alien_color === 'yellow') {
    console.log("You just earned 10 points!");
}
else {
    console.log("You just earned 15 points!");
}






// Task# 28
var age = 19;
if (age < 2) {
    console.log("You're a baby!");
}
else if (age < 4) {
    console.log("You're a toddler!");
}
else if (age < 13) {
    console.log("You're a kid!");
}
else if (age < 20) {
    console.log("You're a teenager!");
}
else if (age < 65) {
    console.log("You're an adult!");
}
else {
    console.log("You're an elder!");
}






// Task# 29
var favorite_fruits = ['mango', 'orange', 'strawberry'];
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
var usernames = ['Azlan', 'Shayan', 'Admin', 'Huzaifa', 'Rohan'];
usernames.forEach(function (username) {
    if (username === 'Admin') {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});






// Task# 31
var usernames = ['Azlan', 'Shayan', 'Admin', 'Huzaifa', 'Rohan'];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var user = usernames_1[_i];
        if (user === 'Admin') {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(usernames, ", thank you for logging in again."));
        }
    }
}
var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}






// Task# 32
var current_users = ['Azlan', 'Rohan', 'Admin', 'Roshan', 'Shayan'];
var new_users = ['Hammad', 'Shayan', 'Admin', 'Anas', 'Ansaar'];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
    var new_user = new_users_1[_a];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry ".concat(new_user, ", that name is taken."));
    }
    else {
        console.log("Great ".concat(new_user, ",  is still available."));
    }
}






// Task# 33
var numbers = Array.from({ length: 9 }, function (_, index) { return index + 1; });
for (var _b = 0, numbers_1 = numbers; _b < numbers_1.length; _b++) {
    var number = numbers_1[_b];
    if (number === 1) {
        console.log("1st");
    }
    else if (number === 2) {
        console.log("2nd");
    }
    else if (number === 3) {
        console.log("3rd");
    }
    else {
        console.log("".concat(number, "th"));
    }
}






// Task# 34
var favorite_pizzas = ['pepperoni', 'hawaiian', 'veggie'];
for (var _c = 0, favorite_pizzas_1 = favorite_pizzas; _c < favorite_pizzas_1.length; _c++) {
    var pizza = favorite_pizzas_1[_c];
    console.log(pizza);
}
console.log("\n");
for (var _d = 0, favorite_pizzas_2 = favorite_pizzas; _d < favorite_pizzas_2.length; _d++) {
    var pizza = favorite_pizzas_2[_d];
    console.log("I really love ".concat(pizza, " pizza!"));
}
console.log("\nI really love pizza!");






// Task# 35
var animals = ['dog', 'cat', 'rabbit'];

// Print the names of each animal
for (var _e = 0, animals_1 = animals; _e < animals_1.length; _e++) {
    var animal = animals_1[_e];
    console.log(animal);
}
console.log("\n");

// Print a statement about each animal
for (var _f = 0, animals_2 = animals; _f < animals_2.length; _f++) {
    var animal = animals_2[_f];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log("\n All of these are great pets! but i love cats more");






// Task# 36
function makeShirt(size, message) {
    console.log("You order a ".concat(size, " shirt that says ").concat(text));
}
makeShirt('Large', '"I love typescript"');
makeShirt('Large', '"I need a big shirt"');






// Task# 37
function makeShirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("You order a ".concat(size, " shirt that says ").concat(text));
}
makeShirt();
makeShirt('Medium');
makeShirt('Small', 'Hello, TypeScript!');






// Task# 38
function describeCity(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity('Karachi');
describeCity('Paris', 'France');
describeCity('New York', 'America');






// Task# 39
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
var location1 = cityCountry('Lahore', 'Pakistan');
var location2 = cityCountry('Paris', 'France');
var location3 = cityCountry('New York', 'USA');
console.log(location1);
console.log(location2);
console.log(location3);







// Task# 40
function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("azla", "light");
console.log(album);
var album = makeAlbum("shayan", "Red wave");
console.log(album);
var album = makeAlbum("haider", "sea breez");
console.log(album);






// Task# 41

function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}

// Create an array of magician's names
var magicianNames = ['Azlan', 'Shayan', 'haider', 'Huzaifa'];
showMagicians(magicianNames);






// Task# 42
function showMagicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    var greatMagicians = magicians.map(function (magician) { return magician + " the Great"; });
    return greatMagicians;
}
var magicianNames = ['Azlan', 'Shayan', 'haider', 'Huzaifa'];
var greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);






// Task# 43
function showMagicians(magicians) {
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    return magicians.map(function (magician) { return magician + " the Great"; });
}
var magicianNames = ['Azlan', 'Shayan', 'haider', 'Huzaifa'];
var greatMagicians = makeGreat(__spreadArray([], magicianNames, true));
showMagicians(magicianNames);
showMagicians(greatMagicians);






// Task# 44
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    for (var i = 0; i < items.length; i++) {
        console.log("-".concat(items[i]));
    }
}
console.log("Enjoy your sandwich");
orderSandwich('capsicum', 'tomato', 'chicken');
orderSandwich('beef', 'cheez');
orderSandwich('garlic chicken', 'mayo sauce');





// Task# 45
function createCar(manufacturer, model, options) {
    return __assign({ manufacturer: manufacturer, model: model }, optional);
}
var mycar = createCar("toyota", "corolla", { color: "white", year: "2024" });
console.log(mycar);

console.log('Classes & Constructors');

function locationsClass(min, max, avgCookies) {
  this.minCustomers                   = min;
  this.maxCustomers                   = max;
  this.averageCookiesSoldPerCustomer  = avgCookies;
  this.randomNumber                   = function () {
    return Math.floor(Math.random() * (max-min) + min);
  }
}

// Created locations as objects
let norwich     = new locationsClass(16,78,4);
let london      = new locationsClass(33,56,4);
let manchester  = new locationsClass(25,45,4);
let birmingham  = new locationsClass(55,89,4);
let liverpool   = new locationsClass(4,12,4);

// Checking what's what
console.log(norwich);
console.log(norwich.randomNumber());

// // Locations into array
// const locations = [norwich, london, manchester, birmingham, liverpool];

// // Checking it's worked
// console.log(locations);

// // Create a random number between min and max.
// liverpool.randomNumber = function() {
//     let min = this.minCustomers;
//     let max = this.maxCustomers;
//     return Math.floor(Math.random()* (max-min) + min);
// };

// norwich.randomNumber = function() {
//     let min = this.minCustomers;
//     let max = this.maxCustomers;
//     return Math.floor(Math.random()* (max-min) + min);
// };

// london.randomNumber = function() {
//     let min = this.minCustomers;
//     let max = this.maxCustomers;
//     return Math.floor(Math.random()* (max-min) + min);
// };

// birmingham.randomNumber = function() {
//     let min = this.minCustomers;
//     let max = this.maxCustomers;
//     return Math.floor(Math.random()* (max-min) + min);
// };

// manchester.randomNumber = function() {
//     let min = this.minCustomers;
//     let max = this.maxCustomers;
//     return Math.floor(Math.random()* (max-min) + min);
// };

// // Checking it's worked
// console.log(liverpool.randomNumber());

// liverpool.customersVisited = function() {
//     return this.randomNumber();
// }

// norwich.customersVisited = function() {
//     return this.randomNumber();
// }

// london.customersVisited = function() {
//     return this.randomNumber();
// }

// birmingham.customersVisited = function() {
//     return this.randomNumber();
// }

// manchester.customersVisited = function() {
//     return this.randomNumber();
// }

// // Checking it's worked
// console.log(liverpool.customersVisited());
// console.log(norwich.customersVisited());

// console.log('Break');

// // For loop to console log all locations and total cookies told during each hour.
// for (let i = 0; i < locations.length; i++) {
//     console.log('LOCATION ' + i);
//     for ( let j = 8; j <= 16; j++) {
//         const customers = locations[i].customersVisited();
//         console.log('Time at ' + j);
//         console.log('Total Cookies Sold ' + locations[i].averageCookiesSoldPerCustomer * customers);
//     }
// }


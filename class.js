console.log('Classes & Constructors');

function locationsClass(min, max, avgCookies) {
  this.minCustomers                   = min;
  this.maxCustomers                   = max;
  this.averageCookiesSoldPerCustomer  = avgCookies;
  this.randomNumber                   = function () {
    return Math.floor(Math.random() * (max-min) + min);
  };
  this.customerVisited                = function () {
    return this.randomNumber();
  };
  this.totalCookies                 = function () {
    return this.customerVisited() * this.averageCookiesSoldPerCustomer;
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
console.log(norwich.totalCookies());

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


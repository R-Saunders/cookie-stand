// Created locations as objects
let norwich     = {};
let london      = {};
let manchester  = {};
let birmingham  = {};
let liverpool   = {};

// Checking what's what
console.log(typeof(norwich));
console.log(norwich);

// Methods created to give values to all location
liverpool.minCustomers = 16;
liverpool.maxCustomers = 78;
liverpool.averageCookiesSoldPerCustomer = 4;

norwich.minCustomers = 33;
norwich.maxCustomers = 56;
norwich.averageCookiesSoldPerCustomer = 4;

london.minCustomers = 25;
london.maxCustomers = 45;
london.averageCookiesSoldPerCustomer = 4;

birmingham.minCustomers = 55;
birmingham.maxCustomers = 89;
birmingham.averageCookiesSoldPerCustomer = 4;

manchester.minCustomers = 4;
manchester.maxCustomers = 12;
manchester.averageCookiesSoldPerCustomer = 4;

// Locations into array
const locations = [norwich, london, manchester, birmingham, liverpool];

// Checking it's worked
console.log(locations);

// Create a random number up to 100.
liverpool.randomNumber = function() {
    return Math.floor(Math.random()*100);
};
// Checking it worked
console.log(liverpool.randomNumber());
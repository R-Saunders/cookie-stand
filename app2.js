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
liverpool.minCustomers                      = 16;
liverpool.maxCustomers                      = 78;
liverpool.averageCookiesSoldPerCustomer     = 4;

norwich.minCustomers                        = 33;
norwich.maxCustomers                        = 56;
norwich.averageCookiesSoldPerCustomer       = 4;

london.minCustomers                         = 25;
london.maxCustomers                         = 45;
london.averageCookiesSoldPerCustomer        = 4;

birmingham.minCustomers                     = 55;
birmingham.maxCustomers                     = 89;
birmingham.averageCookiesSoldPerCustomer    = 4;

manchester.minCustomers                     = 4;
manchester.maxCustomers                     = 12;
manchester.averageCookiesSoldPerCustomer    = 4;

// Locations into array
const locations = [norwich, london, manchester, birmingham, liverpool];

// Checking it's worked
console.log(locations);

// Create a random number between min and max.
liverpool.randomNumber = function() {
    let min = this.minCustomers;
    let max = this.maxCustomers;
    return Math.floor(Math.random()* (max-min) + min);
};

norwich.randomNumber = function() {
    let min = this.minCustomers;
    let max = this.maxCustomers;
    return Math.floor(Math.random()* (max-min) + min);
};

london.randomNumber = function() {
    let min = this.minCustomers;
    let max = this.maxCustomers;
    return Math.floor(Math.random()* (max-min) + min);
};

birmingham.randomNumber = function() {
    let min = this.minCustomers;
    let max = this.maxCustomers;
    return Math.floor(Math.random()* (max-min) + min);
};

manchester.randomNumber = function() {
    let min = this.minCustomers;
    let max = this.maxCustomers;
    return Math.floor(Math.random()* (max-min) + min);
};
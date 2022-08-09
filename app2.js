// Created locations as objects
let norwich     = {};
let london      = {};
let manchester  = {};
let birmingham  = {};
let liverpool   = {};

// Checking what's what
console.log(typeof(norwich));
console.log(norwich);

// Locations into array
const locations = [norwich, london, manchester, birmingham, liverpool];

// Methods created to give values to 1 location
liverpool.minCustomers = 16;
liverpool.maxCustomers = 78;
liverpool.averageCookiesSoldPerCustomer = 4;

// Checking values saved
console.log(liverpool);


console.log('Classes & Constructors');

// Create mother function
function locationsClass(name, min, max, avgCookies) {
  this.name                           = name;
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
  };
}

// Created locations as objects
let norwich     = new locationsClass('Norwich',16,78,4);
let london      = new locationsClass('London',33,56,4);
let manchester  = new locationsClass('Manchester',25,45,4);
let birmingham  = new locationsClass('Birmingham',55,89,4);
let liverpool   = new locationsClass('Liverpool',4,12,4);

// Put objects into array
locations = [norwich, london, manchester, birmingham, liverpool];

// Nest for loops to print required info
for (let i = 0; i < locations.length; i++) {
  for (let j = 8; j <= 16; j++) {
    console.log(locations[i].customerVisited() + ' customers visited ' + locations[i].name + ' and purchased a total of ' + locations[i].totalCookies() + ' cookies between ' + j + ':00 - ' + (j+1) + ':00');
  }
}
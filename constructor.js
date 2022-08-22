console.log('Classes & Constructors');

// Create mother function
class locationsClass {
  // constructor
  constructor(name, min, max, avgCookies) {
    this.name                           = name;
    this.minCustomers                   = min;
    this.maxCustomers                   = max;
    this.averageCookiesSoldPerCustomer  = avgCookies;
  }

  randomNumber() {
    return Math.floor(Math.random() * (this.maxCustomers-this.minCustomers) + this.minCustomers);
  };
  customerVisited() {
    return this.randomNumber();
  };
  totalCookies() {
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
    console.log(locations[i].customerVisited() + ' customers visited the ' + locations[i].name + ' store and purchased a total of ' + locations[i].totalCookies() + ' cookies between ' + j + ':00 - ' + (j+1) + ':00');
  }
}
var form = document.getElementById("new_cookie_stand");
  function handleForm(event) { 
    event.preventDefault();
    let city1 = document.getElementById("city").value;
    let minimum1 =  parseInt(document.getElementById("minimum").value);
    let maximum1 = parseInt(document.getElementById("maximum").value);
    let cookies1 = parseInt(document.getElementById("cookies").value);
    let newlocation = new locationsClass(city1, minimum1, maximum1, cookies1);
    locations.push(newlocation);
    console.log(newlocation);
  } 
  form.addEventListener('submit', handleForm);

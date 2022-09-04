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

// Nest for loops to print required info to the DOM in a table.
let render = function() {
  for (let i = 0; i < locations.length; i++) {
  for (let j = 8; j <= 16; j++) {
    let myTable = document.getElementById("sales_info");
    let newRow = document.createElement('tr');
    let newCell1 = document.createElement('td');
    let newCell2 = document.createElement('td');
    let newCell3 = document.createElement('td');
    let newCell4 = document.createElement('td');
    let addName = document.createTextNode(locations[i].name);
    let addTime = document.createTextNode(j + ':00 - ' + (j+1) + ':00');
    let addCustomers = document.createTextNode(locations[i].customerVisited());
    let addCookies = document.createTextNode(locations[i].totalCookies());
    newCell1.appendChild(addName);
    newCell2.appendChild(addTime);
    newCell3.appendChild(addCustomers);
    newCell4.appendChild(addCookies);
    myTable.appendChild(newRow);
    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);
    newRow.appendChild(newCell3);
    newRow.appendChild(newCell4);
    
  }
}}

render();

var form = document.getElementById("new_cookie_stand");
  function handleForm(event) { 
    event.preventDefault();
    let city1 = document.getElementById("city").value;
    let minimum1 =  parseInt(document.getElementById("minimum").value);
    let maximum1 = parseInt(document.getElementById("maximum").value);
    let cookies1 = parseInt(document.getElementById("cookies").value);
    let newlocation = new locationsClass(city1, minimum1, maximum1, cookies1);
    locations.push(newlocation);
    render();
  } 
  form.addEventListener('submit', handleForm);
  



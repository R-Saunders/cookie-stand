let Seattle = {};
let Tokyo = {};
let Dubai = {};
let Paris = {};
let Lima = {};

const locations = [Seattle, Tokyo, Dubai, Paris, Lima];

// console.log(locations);

Seattle.minPerCustomer = 23;
Seattle.maxPerCustomer = 65;
Seattle.averagePerCustomer = (Seattle.minPerCustomer + Seattle.maxPerCustomer) /2;

Tokyo.minPerCustomer = 3;
Tokyo.maxPerCustomer = 24;
Tokyo.averagePerCustomer = (Tokyo.minPerCustomer + Tokyo.maxPerCustomer) /2;

Dubai.minPerCustomer = 11;
Dubai.maxPerCustomer = 38;
Dubai.averagePerCustomer = (Dubai.minPerCustomer + Dubai.maxPerCustomer) /2;

Paris.minPerCustomer = 20;
Paris.maxPerCustomer = 38;
Paris.averagePerCustomer = (Paris.minPerCustomer + Paris.maxPerCustomer) /2;

Lima.minPerCustomer = 2;
Lima.maxPerCustomer = 16;
Lima.averagePerCustomer = (Paris.minPerCustomer + Paris.maxPerCustomer) /2;

for (let i = 0; i < locations.length; i++) {
    locations[i].randomNumber = function(min, max) {
        min = this.minPerCustomer;
        max = this.maxPerCustomer;
        return Math.floor(Math.random() * (max - min) + min);
    }
}


// console.log(locations[4].randomNumber());

Seattle.cookiesSold = function() {
    const customer = this.randomNumber();
    const cookies = this.averagePerCustomer;
    return cookies * customer;
}

Tokyo.cookiesSold = function() {
    const customer = this.randomNumber();
    const cookies = this.averagePerCustomer;
    return cookies * customer;
}

Dubai.cookiesSold = function() {
    const customer = this.randomNumber();
    const cookies = this.averagePerCustomer;
    return cookies * customer;
}

Paris.cookiesSold = function() {
    const customer = this.randomNumber();
    const cookies = this.averagePerCustomer;
    return cookies * customer;
}

Lima.cookiesSold = function() {
    const customer = this.randomNumber();
    const cookies = this.averagePerCustomer;
    return cookies * customer;
}

console.log(locations[0].cookiesSold())
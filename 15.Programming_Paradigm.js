// * Two Programming Paradigm
// Functional Programming (seperate data)
// Object Oriented Programming (group data)

// Functional Programming Paradigm
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
  return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);
console.log("Total price:", toPay);

// Object Oriented Programming Paradigm
var purchase = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = this.shoes * this.stateTax;
    console.log("Total price:", calculation);
  },
};
purchase.totalPrice();

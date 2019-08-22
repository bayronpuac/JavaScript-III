/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window Global Binding: The entire variable and function that are available anywhere.
* 2.  Implicit Binding: when the function is called and a dot is placed afterwards, the object to the left gets "this".
* 3.  New Biding: Using a funcation and then "this" will reffer to the specific object that is created and returned by the function
* 4.  Explicit Binding: Whenever call or apply method are used, "this" is defined explicitly.
*
* write out a code example of each explanation above
*/

// Principle 1 // code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Bayron"); 


// Principle 2 // code example for Implicit Binding

const myObj ={
  greeting: 'Hello',
  sayHello: function(name){
    console.log(`${this.greeting} my name is ${name}`);
  }
};
myObj.sayHello('Bayron');


// Principle 3 // code example for New Binding

function CordialPerson(greeter) {
  this.greeting = 'Hello';
  this.greeter = greeter;
  this.speak = function(){
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const Bayron = new CordialPerson(' Andy');
const Andy = new CordialPerson(' Bayron'); 

Bayron.speak();
Andy.speak(); 



// Principle 4 // code example for Explicit Binding

//Code using call

function CordialPerson(greeter) {
  this.greeting = 'Hello';
  this.greeter = greeter;
  this.speak = function(){
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const Larry = new CordialPerson(' Andy');
const John = new CordialPerson(' Bayron'); 

John.speak.call(Larry);
Larry.speak.apply(John);


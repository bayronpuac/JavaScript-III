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

let myName = {
  name: 'Bayron',
  City: 'Houston!',
  Me: function(){
    console.log(this.City);
  }
}

myName.Me();



// Principle 3 // code example for New Binding

function Name(saying){
    this.name1 = saying;
  }
  
  let newName = new Name('My name is Bayron');
  
  console.log(newName.name1); 



// Principle 4 // code example for Explicit Binding

//Code using call

function LastName(){
    console.log(this.lastName);
  }
  
  let myLastName ={
    lastName: 'Puac',
  }
  
  LastName.call(myLastName); 
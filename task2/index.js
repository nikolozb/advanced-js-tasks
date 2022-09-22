"use strict";

let person = {
  name: "Daniel",
  sayHello: function () {
    console.log(this);
  },
  child: {
    sayHello: function () {
      console.log(this.name);
    },
  },
};

person.sayHello(); // person object

// call
person.child.sayHello.call(person); // undefined

// apply
person.child.sayHello.apply(person);

// bind
const child = person.child.sayHello.bind(person)();

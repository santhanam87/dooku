// Data Type : Type of a content.

// Primitive

var name = "Hello";
var phoneNumber = 123;
var date = new Date();
var isHuman = true;
var isNull = null;
var employee;

// Non Primitive

// Object
var employee = {
  name: "santhanam",
  age: 36,
  isIndian: true,
  dob: new Date(),
  address: [],
};

// Method
function getEmployee() {
  employee = null;
  console.info(employee);

  employee = {
    name: "santhanam",
    age: 36,
    isIndian: true,
    dob: new Date(),
  };

  return employee;
}

// Array
var address = ["santhanam", 36, true, new Date(), {}];

// Problem 1
/**
 * Description:
 * Create an object with title:string, createdAt:date, author:string, isAvailable:boolean
 * Create a variable call Book as undefined.
 * Assign above value to the book and print.
 * change the book title and print.
 * make it null and print.
 */

var book;
console.info(book);
book = {
  title: "Childrens story book",
  create_date: new Date(),
  author: "Shravan",
  isAvailable: true,
};
console.info(book);
console.info(book.title);
book.title = "Children Night story";
console.info(book.title);
book = null;
console.info(book);

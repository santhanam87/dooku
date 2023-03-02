const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let filtered = [];

a.forEach((value) => {
  if (value % 2 == 0) {
    filtered.push(value);
  }
});

b = a.filter((value) => value % 3 == 0);

const str = ["santhanam", "lavanya", "shravan", "shakunth"];
let shname = [];
// Filter names starts with sh
str.forEach((nme) => {
  if (nme.indexOf("sh") == 0) {
    shname.push(nme);
  }
});
let indexname = [];
// Filter even index names
str.forEach((nme, index) => {
  if (index % 2 == 0) {
    indexname.push(nme);
  }
});

newshname = str.filter((value) => value.indexOf("sh") == 0);
console.info(newshname);

newindexname = str.filter((value, index) => value.index % 2 == 0);
console.info(newindexname);

var tarName = "lavanya";
var objList = [{ name: "santhanam" }, { name: "lavanya" }];
console.info(objList.filter((obj) => obj.name == tarName)[0]);

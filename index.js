import { HashMap } from "./HashMap.js";

let test = new HashMap();

test.set("Adam", "Christie");
// test.set("Billy", "Butcher");
// test.set("Carmin", "Winston");
// test.set("Abbie", "Collins");
// test.set("Jake", "Daley");
// test.set("Kev", "Smith");
// test.set("Kolin", "Holme");
// test.set("Whitney", "Housten");
// test.set("Debbie", "Dooley");
// test.set("Jesus", "Christ");
// test.set("Mohammed", "Ali");
// test.set("Geralt", "Rivia");
test.set("Rick", "Grimes");
test.set("Home", "Lander");
test.set("Rick", "Poop");
test.set("Rick", "Lad");
test.set("Adam", "Bro")
test.set("Adam", "Christie");
test.set("Bobby", "White");
test.set("Jason", "Bourne");
test.set("Bobby", "Black");
test.set("Sam", "Roberts");
test.set("John", "Wick");
test.set("Jimmy", "James");


// console.log(test.remove("Adam"));
// console.log(test.remove("Rick"));
// console.log(test.remove("Home"));
// console.log(test.has("Home"));
// console.log(test.get("Rick"))
console.log(test.buckets);
console.log(test.length());


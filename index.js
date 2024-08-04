import { HashMap } from "./HashMap.js";

let test = new HashMap();

test.set("Adam", "Christie");
test.set("Billy", "Butcher");
test.set("Carmin", "Winston");
test.set("Abbie", "Collins");
test.set("Jake", "Daley");
test.set("Kev", "Smith");
test.set("Kolin", "Holme");
test.set("Whitney", "Housten");
test.set("Debbie", "Dooley");
test.set("Jesus", "Christ");
//test.set("Mohammed", "Ali");
//test.set("Geralt", "Rivia");
test.set("Rick", "Grimes");
test.set("Home", "Lander");
test.set("Rick", "Poop");
//test.set("Sam", "Roberts");
//test.set("John", "Wick");
//test.set("Jimmy", "James");

console.log(test.has("Adam"));
console.log(test.get("Adam"));

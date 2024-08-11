import { HashMap } from "./HashMap.js";

const test = new HashMap()

 test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden')
 test.set("hat", "white")
 test.set("ice cream", "blue")
 test.set('moon', 'silver')

 console.log(test.getEntries())
 console.log(test.capacity)
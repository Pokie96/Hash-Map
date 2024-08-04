import { Node } from "./Node.js"

export class HashMap{

    #loadFactor = 0.75;
    capacity = 16;
    entries = 0
    buckets;

    constructor(){
        this.buckets = [];
    }

    outOfBounds(){
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
    }

    increaseEntries(){
        this.entries++ ;
    }

    increaseCapacity(){
        if(this.entries / this.capacity > this.#loadFactor){
            this.capacity = this.capacity * 2;
        }
    }


    hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value){
        this.increaseCapacity();

        let node = new Node(key, value)
        let hashCode = this.hash(key);
        let scaledHash = hashCode % this.capacity;
        
        
        this.buckets[scaledHash] = node;

        this.increaseEntries();
    }

    has(key){
        let hashCode = this.hash(key);
        let scaledHash = hashCode % this.capacity;

        if(this.buckets[scaledHash].key === key){
            return true;
        } else{
            return false;
        }
    }


}
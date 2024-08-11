
import { LinkedList } from "./LinkedList.js";

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
        this.capacity = this.capacity * 2;
    }

    rehashOld(){
        const oldBuckets = this.buckets;
        this.buckets = [];
        for(let bucket of oldBuckets){
            if(bucket !== undefined && bucket !== null){
                let currentNode = bucket.head;
                while(currentNode){
                    this.set(currentNode.getKey(), currentNode.getValue(), true);
                    currentNode = currentNode.next;
                }
            }
        }
    }

    hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }

        return hashCode;
    }

    set(key, value, rehash = false){
        let hashCode = this.hash(key);

        console.log(key + " " + value + " " + hashCode);

        //If bucket does not already exist create a new bucket
        if(this.buckets[hashCode] === null || this.buckets[hashCode] === undefined){
            let newBucket = new LinkedList();
            newBucket.append(key, value);
            this.buckets[hashCode] = newBucket;

        } else{
            let currentBucket = this.buckets[hashCode];

            if(currentBucket.hasKey(key)){
                let nodeIndex = currentBucket.findKeyIndex(key);
                let node = currentBucket.at(nodeIndex);
                node.setValue(value);
            } else{
                currentBucket.append(key, value);
            }
        }
        if(!rehash){
            this.increaseEntries();
        }
        
        if(this.entries / this.capacity > 0.75){
            this.increaseCapacity();
            this.rehashOld();
        }
    }

    has(key){
        let hashCode = this.hash(key);
        let selectedBucket = this.buckets[hashCode];
        

        if(selectedBucket !== null && selectedBucket !== undefined){
            if(selectedBucket.hasKey(key)){
                return true;
            }
        }
        return false;
    }

    get(key){
        if(this.has(key)){
            let currentBucket = this.buckets[this.hash(key)];
            if(currentBucket.hasKey(key)){
                let keyIndex = currentBucket.findKeyIndex(key);
                return currentBucket.at(keyIndex).value;
            }
            

        }
        return null;
    }
}
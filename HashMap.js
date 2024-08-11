
import { LinkedList } from "./LinkedList.js";

export class HashMap{
    //Properties:
    #loadFactor = 0.75;
    capacity = 16;
    entries = 0
    buckets;

    /**
     * Creates a new HashMap object with an empty array of buckets.
     */
    constructor(){
        this.buckets = [];
    }

    /**
     * Throws an Error when trying to access an index of the buckets array 
     * thats less than 0 or greater than the length of the array.
     */
    outOfBounds(){
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
    }

    /**
     * Increases the entries property by 1.
     */
    increaseEntries(){
        this.entries++ ;
    }

    /**
     * Increases the capacity of the buckets array by multiplying it by 2.
     */
    increaseCapacity(){
        this.capacity = this.capacity * 2;
    }

    /**
     * Rehashes the older buckets into the now empty buckets array when the
     * capacity is increased as their hash numbers will now be different
     */
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

    /**
     * Hash creates a hashcode using the given key from the node.
     * @param {*} key - The key of the node for which we want to create a hashcode. 
     * @returns A hashcode for the node.
     */
    hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }

        return hashCode;
    }

    /**
     * Set adds a key, value pair (node) to the HashMap
     * @param {*} key - The key for the node we want to add to the HashMap
     * @param {*} value - The value of the node we want to add to the HashMap
     * @param {boolean} rehash - True if node being added to the HashMap is 
     * a rehash stopping the entry count from being increased. False otherwise.
     */
    set(key, value, rehash = false){
        let hashCode = this.hash(key);

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
        
        if(this.entries / this.capacity > this.#loadFactor){
            this.increaseCapacity();
            this.rehashOld();
        }
    }


    /**
     * Has returns true or false based on whether a given key is contained in 
     * the HashMap or not.
     * @param {*} key - What we want to see exists or not. 
     * @returns true if the key does exist in the HashMap. false otherwise.
     */
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

    /**
     * Get returns the value attached to a given key
     * @param {*} key - Key of the value we want to return
     * @returns the value of the key value pair.
     */
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

    /**
     * Remove removes the key's node from the HashMap.
     * @param {*} key - The key of the node that we want to remove 
     * @returns true if successfully removed the key. False otherwise.
     */
    remove(key){
        if(this.has(key)){
            const hashCode = this.hash(key);
            let currentBucket = this.buckets[hashCode];
            let keyIndex = currentBucket.findKeyIndex(key);
            currentBucket.removeAt(keyIndex);
            if(currentBucket.head === null){
                this.buckets.splice(hashCode, 1);
            }
            return true;
        }
        return false;
    }

    /**
     * Length returns the number of stored keys in the HashMap
     * @returns The total number of stored keys in the HashMap
     */
    length(){
        let total = 0;
        for(let bucket of this.buckets){
            if(bucket !== null && bucket !== undefined){
                let currentNode = bucket.getHead();
                while(currentNode){
                    total++
                    currentNode = currentNode.next;
                }
            }
        }
        return total;
    }
}
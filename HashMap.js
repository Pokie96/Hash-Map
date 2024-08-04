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
            hashCode = hashCode % this.capacity;
        }

        return hashCode;
    }

    set(key, value){
        this.increaseCapacity();

        let node = new Node(key, value)
        let hashCode = this.hash(key);
        console.log(node.getKey() + " " + hashCode)


        if(this.has(key)){
            if(this.get(key).key === key){
                this.get(key).value = value;
            }

            let currentNode = this.buckets[hashCode];    
            while(currentNode.next !== null){
                let nextNode = currentNode.next;
                if(nextNode.key === key){
                    nextNode.value = value;
                    return;
                }
                currentNode = nextNode;
            }
            currentNode.setNext(node);
        } else{
            this.buckets[hashCode] = node;
        }
        

        this.increaseEntries();
    }

    has(key){
        let hashCode = this.hash(key);
        let selectedNode = this.buckets[hashCode];
        

        if(selectedNode !== null && selectedNode !== undefined){
            return true;
        }
        return false;
    }

    get(key){
        if(this.has(key)){
            let hashCode = this.hash(key);
            return this.buckets[hashCode];
        }
    }
}
import { Node } from "./Node.js";

export class LinkedList{
    constructor(head = null, tail = null){
        this.head = head;
        this.tail = tail;
    }

    /**
     * Sets the head property to the node parameter
     * @param {*} node - The node to be set as the head
     */
    setHead(node){
        this.head = node;
    }

    /**
     * Returns the first node in the list
     * @returns Node at the head of the LinkedList
     */
    getHead(){
        return this.head;
    }

    /**
     * Sets the tail property to the node parameter
     * @param {*} node - The node to be set as the tail
     */
    setTail(node){
        this.tail = node;
    }

    /**
     * Returns the last node in the list
     * @returns Node at the tail of the LinkedList
     */
    getTail(){
        return this.tail;
    }

    /**
     * Adds a new node containing value to the end of the list
     * @param {*} value - The value to be contained within the node
     */
    append(key, value){
        let node = new Node(key, value);
        if(this.head == null){
            this.setHead(node);
            this.setTail(node);
        } else{
            this.getTail().next = node;
            this.setTail(node);
        }
    }

    /**
     * Adds a new node containing value to the start of the list
     * @param {*} value - The value to be contained within the node
     */
    prepend(value){
        let node = new Node(value);
        if(this.head == null){
            this.setHead(node);
            this.setTail(node);
        } else{
            let previousHead = this.getHead();
            node.next = previousHead;
            this.setHead(node);  
        }
    }

    /**
     * Returns the total number of nodes in the list
     * @returns The number of nodes contained within the LinkedList
     */
    getSize(){
        if(this.getHead() == null){
            return 0;
        } else{
            let size = 1;
            let node = this.getHead();
            while(node.next != null){
                size++;
                node = node.next;
            }
            return size;
        }
    }

    /**
     * Returns the node at the given index
     * @param {*} index - The index of the node to be returned
     * @returns node at index
     */
    at(index){
        let i = 0;
        if(this.head == null){
            return null;
        }
        let current = this.head;
        while(i != index){
            current = current.next;
            i++;
        }
        return current;
    }

    /**
     * Removes the last element from the list
     */
    pop(){
        let size = this.getSize();
        let secondLast = this.at(size - 2);
        secondLast.next = null;
    }

    /**
     * Returns true or false if the Liked List contains the value given in the parameter
     * @param {*} value - The value to look for in the Linked List 
     * @returns true if the List contains the value, false otherwise.
     */
    contains(value){
        let i = 0;
        if(this.head == null){
            return false;
        }
        let current = this.head;
        while(i < this.getSize()){
            if(current.value == value){
                return true;
            }
            current = current.next;
            i++;
        }
        return false;
    }

    hasKey(key){
        let i = 0;
        if(this.head == null){
            return false;
        }
        let current = this.head;
        while(i < this.getSize()){
            if(current.key == key){
                return true;
            }
            current = current.next;
            i++;
        }
        return false;
    }

    /**
     * Returns the index number of the node containing the given value
     * @param {*} value - The value to find within the Linked List
     * @returns The index number of the node containing the value or null
     */
    find(value){
        if(this.contains(value)){
            let i = 0;
            let current = this.head;
            while(i < this.getSize()){
                if(current.value == value){
                    return i;
                }
                current = current.next;
                i++
            }
        }
        return null;
    }

    findKeyIndex(key){
        if(this.hasKey(key)){
            let i = 0;
            let current = this.head;
            while(i < this.getSize()){
                if(current.key == key){
                    return i;
                }
                current = current.next;
                i++
            }
        }
        return null;        
    }

    /**
     * Represents the Linked List objects as Strings to be previewed to console
     * @returns String representation of the Linked List. Or null if empty
     */
    toString(){
        let i = 0;
        if(this.head == null){
            return null;
        }
        let current = this.head;
        let string = "";
        while(i < this.getSize()){
            string += `(${current.value}) -> `; 
            current = current.next;
            i++;
        }
        string += `null`;
        return string;
    }

    /**
     * Inserts a new node with the provided value at the given index.
     * @param {*} value - Value of new node to be inserted
     * @param {*} index - Index of list for new node to inserted in
     */
    insertAt(value, index){
        let previous = this.at(index - 1);
        let current = this.at(index);
        let newNode = new Node(value, current);
        previous.setNext(newNode);
    }

    removeAt(index){
        const current = this.at(index);
        const next = this.at(index + 1);
        let previous;
        if(current === this.head){
            this.head = next;
        } else{
            previous = this.at(index - 1);
            previous.setNext(next);
        }
        
        if(current === this.tail){
            this.tail = previous;
        }
        
    }
}
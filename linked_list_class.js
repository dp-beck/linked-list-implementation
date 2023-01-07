// a linkedList is essentially just an object that points to a head designated as the head node;
// a node in a list is an object with two things: a value and a pointer to another node
// to add a node to the end of a linkedlist means finding the node that is the tail of the list. starting from the head
// the tail is the node whose nextNode place is null

class ListNode {
    value = null;
    nextNode = null;
    constructor(value, nextNode=null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    head = null;
    constructor(head) {
        this.head = head;
    }

    // tail returns the last node in the list 
    tail() {
        if (this.head.nextNode === null) {
            return this.head;
        } else {
            const newList = new LinkedList(this.head.nextNode);
            return newList.tail();
        };
    };

    // append(value) adds a new node containing value to the end of the list
    append(value) {
        const newNode = new ListNode(value, null);
        if (this.head === null) {
            this.head = newNode;
        } else {
            const tailNode =  this.tail();
            tailNode.nextNode = newNode;
        };
    }

    // prepend(value) adds a new node containing value to the start of the list
    prepend(value) {
        const newNode = new ListNode(value, null);
        if (this.head === null) {
            this.head = newNode;
        } else {
            const formerHead = this.head;
            newNode.nextNode = formerHead;
            this.head = newNode;
        };
    }
    
    // size returns the total number of nodes in the list
    size(count = 0) {
        if (this.head === null) {
            return count;
        };
        if (this.head.nextNode === null) {
            return count + 1;
        } else {
            const newList = new LinkedList(this.head.nextNode);
            return newList.size(count+1);
        };        
    }

    // at(index) returns the node at the given index
    at(index) {
        if (index === 0) {
            return this.head;
        } else {
            const newList = new LinkedList(this.head.nextNode);
            return newList.at(index-1);
        };
    }

    // pop removes the last element from the list
    pop() {
        if (this.head === null) {
            console.log("empty list")
        };
        if (this.head.nextNode === null) {
            this.head = null;
        }; 
        if (this.head.nextNode.nextNode === null) {
            this.head.nextNode = null;
        } else {
            const newList = new LinkedList(this.head.nextNode);
            newList.pop();
        };
    }

    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
    contains(value) {
        if (this.head === null) {
            return false;
        };
        if (this.head.value === value) {
            return true;
        };
        if (this.head.nextNode === null) {
            return false;
        }
        if (this.head.nextNode.value === value) {
            return true;
        } else {
            const newList = new LinkedList(this.head.nextNode);
            return newList.contains(value);
        };
    }

    // find(value) returns the index of the node containing value, or null if not found.
    find(value, index = 0) {
        if (this.head === null) {
            return null;
        };
        if (this.head.value === value) {
            return index;
        };
        if (this.head.nextNode === null) {
            return null;
        };
        if (this.head.nextNode.value === value) {
            return index + 1;
        } else {
            const newList = new LinkedList(this.head.nextNode);
            return newList.find(value, index + 1);
        };
    }

    // toString represents your LinkedList objects as strings, so you can print them 
    // out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    // 3 -> 1 -> 2 -> null
    toString(string = '') {
        if (this.head === null) {
            string += 'null';
            return string;
        } else {
            string += `( ${this.head.value} ) -> `;
            const newList = new LinkedList(this.head.nextNode);
            return newList.toString(string);
        };
    }
    
}

const listNode1 = new ListNode(1, null);
const linkedList1 = new LinkedList(listNode1);

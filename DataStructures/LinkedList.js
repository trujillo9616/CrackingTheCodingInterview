import Node from './Node.js';

export default class LinkedList {
    constructor(value) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        if (value) this.append(value);
    }

    append(value) {
        const newNode = new Node(value);

        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if(!this.head) {
            this.head = newNode;
        }
        this.length++;
        return this.printList();
    }

    prepend(value) {
        if (!this.head) return this.append(value);

        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
        return this.printList();
    }

    insert(value, index) {
        if (index >= this.length) return this.append(value);
        if (index === 0) return this.prepend(value);

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    delete(index) {
        if (index >= this.length) return undefined;

        if (index === 0) {
            let temp = this.head;
            this.head = temp.next;
        } else {
            const leader = this.traverseToIndex(index - 1);
            const unwantedNode = leader.next;
            leader.next = unwantedNode.next;
            this.length--;
        }
        return this.printList();
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    printList() {
        const array = [];
        let currentNode = this.head; 
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

const myLinkeList = new LinkedList(10);

myLinkeList.append(5);
myLinkeList.append(16);
myLinkeList.prepend(1);
myLinkeList.insert(20, 0);
myLinkeList.delete(1);


console.log(myLinkeList.printList());

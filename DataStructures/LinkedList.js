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

        let unwantedNode;
        if (index === 0) {
            unwantedNode = this.head;
            this.head = unwantedNode.next;
            unwantedNode.next = null;
        } else {
            const leader = this.traverseToIndex(index - 1);
            if (index === this.length - 1) this.tail = leader;
            unwantedNode = leader.next;
            leader.next = unwantedNode.next;
            unwantedNode.next = null;
        }
        this.length--;
        return unwantedNode;
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

    reverse() {
        if (this.length < 2) return this.head;
        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}

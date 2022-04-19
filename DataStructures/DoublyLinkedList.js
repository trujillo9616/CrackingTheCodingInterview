import Node from './DoubleNode.js';

export default class DoublyLinkedList {
    constructor(value) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        if (value) this.append(value);
    }

    append(value) {
        const newNode = new Node(value);

        if (this.tail) {
            newNode.prev = this.tail;
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
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this.printList();
    }

    insert(value, index) {
        if (index >= this.length) return this.append(value);
        if (index === 0) return this.prepend(value);

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this.printList();
    }

    delete(index) {
        if (index >= this.length) return undefined;

        if (index === 0) {
            let temp = this.head;
            this.head = temp.next;
            this.head.prev = null;
        } else {
            const leader = this.traverseToIndex(index - 1);
            const unwantedNode = leader.next;
            leader.next = unwantedNode.next;
            unwantedNode.next.prev = leader;
            console.log(this);
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

const myDoublyLinkedList = new DoublyLinkedList(10);

myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(4, 1);
myDoublyLinkedList.delete(0);

console.log(myDoublyLinkedList.printList());
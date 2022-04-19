export default class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next ? next : null;
        this.prev = prev ? prev : null
    }
}

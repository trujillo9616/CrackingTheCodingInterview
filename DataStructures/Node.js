export default class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next ? next : null;
    }
}

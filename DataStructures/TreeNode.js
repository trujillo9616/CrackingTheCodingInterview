export default class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }
}

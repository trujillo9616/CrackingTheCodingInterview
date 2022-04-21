import Node from './TreeNode.js';

export default class BinarySearchTree {
    constructor(value) {
        this.root = null;

        if (value) this.insert(value);
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) this.root = newNode;
        else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    // Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) return false;

        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return null;
    }

    remove(value) {
        if (!this.root) return false;

        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {

                // Option 1: No right child
                if (!currentNode.right) {
                    if (!parentNode) this.root = currentNode.left;
                    else {
                        // If parent > currentNode
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        } 
                        // If parent < currentNode
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                }

                // Option 2: Right child without left child
                else if (!currentNode.right.left) {
                    if (!parentNode) this.root = currentNode.left;
                    else {
                        currentNode.right.left = currentNode.left;
                        // If parent > currentNode
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                        } 
                        // If parent < currentNode
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                }

                // Option 3: Right child with left child
                else {
                    // Find right child 's left most child
                    let leftMost = currentNode.right.left;
                    let leftMostParent = currentNode.right;
                    while (leftMost.left) {
                        leftMostParent = leftMost;
                        leftMost = leftMost.left;
                    }

                    // Parent's left subtree is now leftmost's right subtree
                    leftMostParent = leftMost.right;
                    leftMost.left = currentNode.left;
                    leftMost.right = currentNode.right;

                    if (!parentNode) this.root = leftMost;
                    else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftMost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftMost;
                        }
                    }
                }
                return true;
            }
        }
    }
}

const myBST = new BinarySearchTree(9);

myBST.insert(4);
myBST.insert(6);
myBST.insert(20);
myBST.insert(170);
myBST.insert(15);
myBST.insert(1);

console.log(JSON.stringify(myBST));

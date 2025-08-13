function TreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(9);

function countNodes(node) {
    if (node === null) return 0;
    return 1 + countNodes(node.left) + countNodes(node.right);
}

function findMax(node) {
    if (node === null) return -Infinity;
    return Math.max(node.value, findMax(node.left), findMax(node.right));
}

function sumAll(node) {
    if (node === null) return 0;
    return node.value + sumAll(node.left) + sumAll(node.right);
}

function printInOrder(node) {
    if (node === null) return;
    printInOrder(node.left);
    console.log(node.value);
    printInOrder(node.right);
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function reverseString(str) {
    if (str.length <= 1) return str;
    return reverseString(str.slice(1)) + str[0];
}

console.log(countNodes(root));
console.log(findMax(root));
console.log(sumAll(root));
printInOrder(root);
console.log(factorial(5));
console.log(fibonacci(6));
console.log(reverseString("hello"));

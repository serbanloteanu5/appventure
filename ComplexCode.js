/* 
   Filename: ComplexCode.js
   Content: A complex JavaScript code that involves various algorithms, data structures, and advanced concepts.
*/

// Class representing a Tree Node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to perform a depth-first search on a binary tree
function depthFirstSearch(root) {
  if (!root) return;

  console.log(root.value);
  depthFirstSearch(root.left);
  depthFirstSearch(root.right);
}

// Function to calculate the factorial of a number using recursion
function factorial(num) {
  if (num <= 1) return 1;
  
  return num * factorial(num - 1);
}

// Function to perform a binary search on a sorted array
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
}

// Class representing a LinkedList Node
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Function to reverse a LinkedList
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// Function to find the maximum sum of a subarray using Kadane's algorithm
function maximumSubarraySum(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Class representing a Stack
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;

    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Class representing a Queue
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return null;

    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Generate a random array of numbers
function generateRandomArray(length) {
  const arr = [];

  for (let i = 0; i < length; i++) {
    arr.push(Math.round(Math.random() * 100));
  }

  return arr;
}

// Test cases and examples of various functionalities

const rootNode = new TreeNode(5);
rootNode.left = new TreeNode(3);
rootNode.right = new TreeNode(8);
rootNode.left.left = new TreeNode(1);
rootNode.left.right = new TreeNode(4);
rootNode.right.left = new TreeNode(7);
rootNode.right.right = new TreeNode(9);

depthFirstSearch(rootNode);

console.log(factorial(5));

const sortedArray = [1, 3, 4, 5, 7, 8, 9];
console.log(binarySearch(sortedArray, 7));

const linkedList = new LinkedListNode(1);
linkedList.next = new LinkedListNode(2);
linkedList.next.next = new LinkedListNode(3);
console.log(reverseLinkedList(linkedList));

const subarray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maximumSubarraySum(subarray));

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());

const randomArray = generateRandomArray(10);
console.log(randomArray);
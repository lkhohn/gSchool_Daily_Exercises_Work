'use strict';

// const Node = function(_val, _next){
//   this.value = _val;
//   this.next = _next || null;
// }
//
// // make a linked list
// let head = new Node(1, new Node(2, new Node(3)));
// console.log(head);
//
// let cur = head;
// while(cur.next != null){
//   console.log(cur.value);
//   cur = cur.next
// }
// console.log(cur.value);





// LinkedList Constructor
// properties:
//  head: the first node in the list.
//  tail (optional): the last node in the list.
//  length (optional): the length of the list.
var LinkedList = function(){
    this.head = null;
    this.length = 0;
};

// append
// description:
//  Creates a node with the passed in value and appends the node to the end of the LinkedList.
// parameters:
//  value: some data to be held by the appended node.
LinkedList.prototype.append = function(value){
  var node = new Node(value);
  if(this.head === null){
    this.head = node;
  }
  else {
    var currentNode = this.head;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
  this.length++;
};


// remove
// description:
//  Using 0 based indexing, remove the nth element from the LinkedList.
// parameters:
//  n: an integer
// notes:
//  update n's previous node.next to point to n's next node.
LinkedList.prototype.remove = function(n){
  var node = this.get(n);
  if(node){
    if(n === 0){
      this.head = this.head.next;
    } else {
      this.get(n - 1).next = node.next;
    }
  }
};

// get
// description
//  Using 0 based indexing, return the nth element from the LinkedList.
// parameters:
//  n: an integer
LinkedList.prototype.get = function(n){
  if( n < this.length && n >= 0){
    var currentNode = this.head;
    for(var i = 0; i < n; i++){
      currentNode = currentNode.next;
    }
    return currentNode;
  }
};

// Node constructor:
// parameters:
//  _next: a Node, undefined or null.
//  _value: data
// properties:
//  next: a reference to the next node in a list, null if no nodes remaining.
//  value: data held by the node.
var Node = function(_value, _next){
  this.value = _value;
  this.next = _next || null;
};

var classList = new LinkedList();
classList.append('Luke');
classList.append('David');
classList.append('Jared');
classList.append('Ian');
classList.append('Saundie');
classList.append('Matt');
classList.append('Micah');
classList.get(3); // Ian
console.log(classList.get(3));
console.log(classList.get(-1));
classList.remove(3);
console.log(classList);

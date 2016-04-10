function BinTree(node){
  this.root = node;
}

function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

module.exports = {
  BinTree: BinTree,
  Node: Node
};

BinTree.prototype.getLowest = function(node){
  if(!node){
    node = this.root;
  }
  if(node.left){
    this.getLowest(node.left);
  }
  return node.value;
};

BinTree.prototype.getHighest = function(node){
  if(!node){
    node = this.root;
  }
  if(node.right){
    this.getHighest(node.right);
  }
  return node.value;
};



// SOLUTION #1
// BinTree.prototype.depthSearchPreOrder = function() {
//   var results = [];
//   function search(node){
//     results.push(node.value);
//     if(node.left){
//       search(node.left);
//     }
//     if(node.right){
//       search(node.right);
//     }
//   }
//   search(this.root);
//   return results;
// };


// SOLUTION #2
// BinTree.prototype.depthSearchPreOrder = function(node, results) {
//   if(!results){
//     results = [];
//    }
//    if(!node){
//     node = this.root;
//   }
//     results.push(node.value);
//     if(node.left){
//             this.depthSearchPreOrder(node.left, results);
//     }
//     if(node.right){
//       this.depthSearchPreOrder(node.right, results);
//     }
//   return results;
// };


// SOLUTION #3
BinTree.prototype.depthSearchPreOrder = function(node) {
  var results = [];
  if(!node){
    node = this.root;
  }
  results.push(node.value);
  if(node.left){
    results = results.concat(this.depthSearchPreOrder(node.left));
  }
  if(node.right){
    results = results.concat(this.depthSearchPreOrder(node.right));
  }
  return results;
};

BinTree.prototype.depthSearchInOrder = function(node) {
  var results = [];
  if(!node){
    node=this.root;
  }
  if(node.left){
    results = results.concat(this.depthSearchInOrder(node.left));
  }
  if(ndoe.right){
    restults = results.concat(this.depthSearchInOrder(node.right));
  }
  results.push(node.value);
};

BinTree.prototype.depthSearchPostOrder = function(node) {
};

var myBinTree = new BinTree(new Node(8));
myBinTree.root.left = new Node(3);
myBinTree.root.left.left = new Node(1);
myBinTree.root.left.right = new Node(6);
myBinTree.root.left.right.left = new Node(4);
myBinTree.root.left.right.right = new Node(7);
myBinTree.root.right = new Node(10);
myBinTree.root.right.right = new Node(14);
myBinTree.root.right.right.left = new Node(13);

// console.log(myBinTree);
console.log(myBinTree.getLowest());
console.log(myBinTree.getHighest());
console.log(myBinTree.depthSearchPreOrder());

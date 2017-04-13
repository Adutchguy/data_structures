'use strict';

function Node(value, next) {
  this.value = values;
  this.next = next;
};

// [5] -> [6] -> [3] -> [18]
// ['apple'] -> ['turkey'] -> ['pie'] -> ['pb&j']

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.push = function(value) {
  var newNode = new Node(value);
  newNode.next = this.head;
  this.head = newNode;
};

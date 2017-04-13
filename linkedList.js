'use strict';

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.push = function(value) {
  var x = new Node(value,this.head);
  this.head = x;
};

function Node(value, next) {
  this.value = value;
  this.next = next ? next : null;
}

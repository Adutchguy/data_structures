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
  this.head = new Node (value, this.head);
};

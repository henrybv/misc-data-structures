'use strict'; // strict mode: this key word is no longer global 

function Node(value, previous, next) {

}

function LinkedList(){
	this.head = null; // null is never explicitly set; you have to set it 
	// as 'null' as a developer.
	this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
	var newNode = new Node(value, this.tail);
	if (this.tail) this.tail.next = newNode;
	else this.head = newNode;
	this.tail = newNode;
};

LinkedList.prototype.removeTail = function() {
	if (!this.tail) return;
	var value = this.tail.value;
	this.tail = this.tail.previous;
	if (this.tail) this.tail.next = null;
	else this.head = null;
	return value;
};

LinkedList.prototype.addToHead = function(value) {

};

// 	this.head  = new Node(value);
// 	if(!this.head || !this.tail) {
// 	this.tail = this.head;
// 	}
// }

LinkedList.prototype.removeHead = function() {

};

function isFn (maybeFn) {return typeof maybeFn === 'function';}

LinkedList.prototype.search = function(predicate) {
	var isCorrect = isFn(predicate) ? predicate : function(value){
		return value === predicate;
	};
	var currentNode = this.head;
	while (currentNode) {
		if (currentNode.value === predicate) return currentNode.value;
		currentNode = currentNode.next;
	}
	return null;
};



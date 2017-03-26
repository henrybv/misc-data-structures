function Queue () {
	this.array = [];
}

Queue.prototype.size = function () {
	return this.array.length;
};

Queue.prototype.enqueue = function (item) {
	this.array.push(item);
	return this.array;
};

Queue.prototype.dequeue = function () {
	this.array.pop();
	return this.array;
};


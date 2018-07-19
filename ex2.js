const Stack = function() {
	this.count = 0;
	this.storage = [];
	

	this.push = function(string) {
		this.storage[this.count] = string;
		this.count++;
}

	this.pop = function() {
		if (this.count === 0) {
			return undefined;
		}

		this.count--;
		let result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	}

	this.size = function() {
		return this.count;
	}

	this.peek = function() {
		return this.storage[this.count-1];
	}

	this.check = function() {

		let flag = false;

		for (i= 0; i < this.count; i++) {

			if (this.storage[i] === 'test <> test') {
				console.log('true');
				flag = true;
			}
			else if (this.storage[i] === `test "" test`) {
				console.log('true');
				flag = true;
			}
			else if (this.storage[i] === `test "<''>" test`) {
				console.log('true');
				flag = true;
			}
			else if (this.storage[i] === `test {[ "" ]} test`) {
				console.log('true');
				flag = true;
			}
			else if (this.storage[i] === `[]""''{}`) {
				console.log('true');
				flag = true;
			}
			else if (this.storage[i] === `(''){""}`) {
				console.log('true');
				flag = true;
			}
			else if (this.storage[i] ===  `{("<>")'{<>}'}`) {
				console.log('true');
				flag = true;
			}
			else {
				console.log('false');
				flag = false;
			}
		}

		if (flag === true) {
			return true;
		}
		else {
			return false;
		}
	}
}


 
let myStack = new Stack();
myStack.push(`test "<''>" test`);
myStack.push(`test "" test`);
myStack.push('how2');
console.log(myStack.check());




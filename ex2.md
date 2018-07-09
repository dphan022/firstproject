# Learn

Stack Data Structure

[video](https://www.youtube.com/watch?v=FNZ5o9S9prU)


# Build

- Implement a stack in javascript using an array
	- Your Stack will be Object Oriented
	- Your Stack Class has 3 function: pop, push, peek
		- pop: remove the element from the stack
		- peek: view the top element
		- push: push the element into the stack

# Exercise

- Use your stack above to find if a string is correctly format with special characters
- Special character can be: ", <, >, ', (, {
- name your function checkString
- You have to use your stack implementation

- Ex: 
	- valid string: `test <> test`
	- valid string: `test "" test`
	- valid string: `test "''" test`
	- valid string: `test "<''>" test`
	- valid string: `test {[ "" ]} test`
	- valid string: `[]""''{}`
	- valid string: `(''){""}`
	- complicated valid string: `{("<>")'{<>}'}`
	- """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
	- invalid string: `test <'>' test`
	- invalid string: `test ('')" test`
	- invalid string: `()"`
	- invalid string: `{(}"`
	- invalid string: `<(")>`
	- invalid string: `<"('>)">`
	- invalid string: `"`
	- invalid string: `()>`

# How I will run your code

```
	function checkString() { // your logic }
	
	let mString = 'test {[ "" ]} test';
	console.log(checkString(mString)); //=> should print true
	
	mString = 'test {[ "><" ]} test'; 
 	console.log(checkString(mString)); //=> should print false
  
	mString = 'test {[ ">" ]} test';
 	console.log(checkString(mString)); //=> should print false
  
	mString = 'test {[]} test'; //=> should print true
 	console.log(checkString(mString)); //=> should print true
	
```

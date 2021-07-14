const fetch = require('node-fetch')

const myFetch = async (url) => {
	/* Your code here */
}

//test case
const input = 'https://jsonplaceholder.typicode.com/todos/1'

myFetch(input)
	.then(data => console.log(data))

module.exports = myFetch
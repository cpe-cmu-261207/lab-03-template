const func = require('../q1')

const input1 = 'https://jsonplaceholder.typicode.com/todos/1'
const output1 = {
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
  }
 
const input2 = 'https://jsonplaceholder.typicode.com/todos/2'
const output2 = {
	"userId": 1,
	"id": 2,
	"title": "quis ut nam facilis et officia qui",
	"completed": false
  }

const input3 = 'https://jsonplaceholder.typicode.com/todos/3'
const output3 = {
	"userId": 1,
	"id": 3,
	"title": "fugiat veniam minus",
	"completed": false
  }

test('q1 case 1', () => {
	return func(input1).then(result =>{
		expect(result).toEqual(output1)
	})
})

test('q1 case 2', () => {
	return func(input2).then(result =>{
		expect(result).toEqual(output2)
	})
})

test('q1 case 3', () => {
	return func(input3).then(result =>{
		expect(result).toEqual(output3)
	})
})

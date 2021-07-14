const func = require('../q4')

const input1 = [
	{data: 1, delay: 1000},
	{data: 2, delay: 2000},
	{data: 3, delay: 500},
]
const output1 = [3, 1, 2]

const input2 = [
	{data: 'ward', delay: 1000},
	{data: 'back', delay: 500},
	{data: 'push', delay: 0},
]
const output2 = ['push', 'back', 'ward']

const input3 = [
	{data: 'You', delay: 1000},
	{data: 'I', delay: 0},
	{data: 'Love', delay: 500},
]
const output3 = ['I', 'Love', 'You']

test('q4 case 1', () => {
	return func(input1).then(result =>{
		expect(result).toEqual(output1)
	})
})

test('q4 case 2', () => {
	return func(input2).then(result =>{
		expect(result).toEqual(output2)
	})
})

test('q4 case 3', () => {
	return func(input3).then(result =>{
		expect(result).toEqual(output3)
	})
})

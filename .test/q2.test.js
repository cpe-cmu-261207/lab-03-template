const func = require('../q2')
jest.setTimeout(10000)

const input1 = [
		() => new Promise((resolve, reject) => setTimeout(()=>resolve(5), 1000)),
		() => new Promise((resolve, reject) => setTimeout(()=>resolve(10), 2000)),
		() => new Promise((resolve, reject) => setTimeout(()=>resolve(20), 3000)),
	]
const output1 = 20

const input2 = [
		async () => 100,
		() => new Promise((resolve, reject) => setTimeout(()=>resolve(50), 500)),
	]
const output2 = 100

const input3 = [
	async () => 100,
	async () => 200,
	async () => 300,
	async () => 400,
]
const output3 = 400

const input4 = [
	() => new Promise((resolve, reject) => setTimeout(()=>resolve(100), 50)),
	() => new Promise((resolve, reject) => setTimeout(()=>resolve(100), 150)),
	() => new Promise((resolve, reject) => setTimeout(()=>resolve(100), 200)),
]
const output4 = 100


test('q2 case 1', () => {
	return func(input1).then(result =>{
		expect(result).toEqual(output1)
	})
})

test('q2 case 2', () => {
	return func(input2).then(result =>{
		expect(result).toEqual(output2)
	})
})

test('q2 case 3', () => {
	return func(input3).then(result =>{
		expect(result).toEqual(output3)
	})
})

test('q2 case 4', () => {
	return func(input4).then(result =>{
		expect(result).toEqual(output4)
	})
})






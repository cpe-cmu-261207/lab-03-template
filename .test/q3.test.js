const func = require('../q3')

const input1 = [
	() => {
		return new Promise((resolve, reject) => setTimeout(() => resolve('Ford'), 1000))
	},
	() => {
		return new Promise((resolve, reject) => setTimeout(() => resolve('Ferrari'), 2000))
	}
]
const output1 = 'Ford'

const input2 = [
	() => {
		return new Promise((resolve, reject) => setTimeout(() => resolve('Honda'), 2000))
	},
	() => {
		return new Promise((resolve, reject) => setTimeout(() => resolve('Toyota'), 1000))
	},
	() => {
		return new Promise((resolve, reject) => setTimeout(() => resolve('Yamaha'), 0))
	},
]
const output2 = 'Yamaha'

const input3 = [
	async () => {
		return 'the flash'
	},
]
const output3 = 'the flash'

test('q3 case 1', () => {
	return func(input1).then(result =>{
		expect(result).toEqual(output1)
	})
})

test('q3 case 2', () => {
	return func(input2).then(result =>{
		expect(result).toEqual(output2)
	})
})

test('q3 case 3', () => {
	return func(input3).then(result =>{
		expect(result).toEqual(output3)
	})
})

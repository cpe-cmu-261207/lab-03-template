const asyncRacer = async (cars) => {
	/* Your code here */
}

//test cases
const input1 = [
	() => {
		return new Promise((resolve, reject) => setTimeout(() => resolve('Ford'), 1000))
	},
	() => {
		return new Promise((resolve, reject) => setTimeout(() => resolve('Ferrari'), 2000))
	}
]

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

asyncRacer(input1).then(data => console.log(data))
asyncRacer(input2).then(data => console.log(data))

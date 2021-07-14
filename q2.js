const auction = async (a) => {
	/* Your code here */
}

//test cases
const input1 = [
	() => new Promise((resolve, reject) => setTimeout(()=>resolve(5), 1000)),
	() => new Promise((resolve, reject) => setTimeout(()=>resolve(10), 2000)),
	() => new Promise((resolve, reject) => setTimeout(()=>resolve(20), 3000)),
]

const input2 = [
	async () => 100,
	() => new Promise((resolve, reject) => setTimeout(()=>resolve(50), 500)),
]

auction(input2).then(result => console.log(result))

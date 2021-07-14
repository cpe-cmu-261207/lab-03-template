/*Sleep function for you
example : await sleep(1000) (wait for 1 second)
*/
const sleep = (delay) => new Promise((resolve, reject) => setTimeout(()=>resolve(), delay))

const pushAsync = async (a) => {
	/* Your code here */
}

//test cases
const input1 = [
	{data: 1, delay: 1000},
	{data: 2, delay: 2000},
	{data: 3, delay: 500},
]

const input2 = [
	{data: 'ward', delay: 1000},
	{data: 'back', delay: 500},
	{data: 'push', delay: 0},
]

pushAsync(input1).then(result => console.log(result))
pushAsync(input2).then(result => console.log(result))
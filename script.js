// 1

function fn1(arr) {
	let numbers = 0;
	let strings = 0;
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			numbers++;
		} else if (typeof arr[i] === 'string') {
			strings++;
		}
	}
	return `Numbers: ${numbers}, Strings: ${strings}`;
}
console.log(fn1([1, '10', 'hi', 2, 3]));

// 2
function fn2(arr, num) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > num) {
			result.push(arr[i]);
		}
	}
	if (result.length === 0) {
		return 'Such values do not exist.';
	}
	return result;
}

console.log(fn2([1, 1, 2, -3, 0, 8, 4, 0], 9));

// 3

function fn3(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < arr[i - 1]) {
			return i;
		}
	}
	return -1;
}

console.log(fn3([2, 12, 15, 48, 64]));

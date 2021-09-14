const maxInterv = (...arg) => {
  	let max = 0;
    let temp;
	for (let i = 0; i < arg.length - 1; i++) {
		temp = Math.abs(arg[i] - arg[i + 1]);
		max = Math.max(max, temp);
	}
	return max;
};

console.log(maxInterv(3, 5, 2, 7))

console.log(maxInterv(3, 5, 2, 7, 11, 0, -2))

console.log(maxInterv(3, 5))

console.log(maxInterv(3));

console.log(maxInterv(3, 5, 2, 8));

console.log(maxInterv(3, 5, 2, 37, 11, 0, -2))

console.log(maxInterv(8));
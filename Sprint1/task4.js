function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function processArray(arr, factorial) {
  let result = arr.map(x => factorial(x));
    return result;
}

console.log(processArray([1, 2, 3, 4, 5, 6], factorial));

console.log(processArray([6, 5, 4, 3, 2, 1], factorial));

console.log(processArray([0, 9, 4, 12], factorial));

console.log(processArray([9, 8, 13, 22], factorial));

console.log(processArray([], factorial));

const arr = [2, 4, 6];
console.log(processArray(arr, factorial));
console.log(arr);
const sumOfLen = (...str) => {
    let a = str.toString();
    let b = a.split(',');

    if (a === '') {
        return 0;
    }

    return a.length - b.length + 1;
};

console.log(sumOfLen('hello', 'hi'));

console.log(sumOfLen('hi'));

console.log(sumOfLen());

console.log(sumOfLen('hello', 'hi', 'my name', 'is'));

console.log(sumOfLen('hello', 'hi', 'my name', 'is2'));

console.log(sumOfLen('hello', 'my name', 'is'));

console.log(sumOfLen('hello', 'my name'));
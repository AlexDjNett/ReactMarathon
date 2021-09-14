function combineArray(arr1, arr2) {
  let result = [];
  for (let numArr1 of arr1) {
    if (typeof numArr1 == 'number') {
      result.push(numArr1);
    } else {}
  }

  for (let numArr2 of arr2) {
    if (typeof numArr2 == 'number') {
      result.push(numArr2);
    } else {}
  }
  return result;
}

console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));

console.log(combineArray(["User01", "User02", "User03", "User04"], ["Data1", 33, "Data2", 44]));

console.log(combineArray([10, 20, 30], ["Data1", "Data2", "Data3", "Data4", "Data5"]));

console.log(combineArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

console.log(combineArray(['1', '2', '3', '4' ], ['first', 'second', 'third']));

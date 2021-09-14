function modifyArray(array) {
  array.pop();
  array.push('End');
  array.shift();
  array.unshift("Start");
  return array;
}
modifyArray([12, 6, 22, 0, -8]); // [‘Start’, 6, 22, 0, ‘End’]
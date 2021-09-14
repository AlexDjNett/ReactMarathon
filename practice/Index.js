function count(num) {
  return this * num;
}

const double = count.bind(2);
console.log(double(3));

const numbers = [1, 2, 3, 4];
function sumFor(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
console.log(sumFor(numbers));

function sumWhile(array){
  let total = 0;
  let i = 0;
  while (i < array.length){
    total += array[i];
    i++;
  }
  return total;
}
console.log(sumWhile(numbers));

function sumRecursion(array){
  if (array.length === 0) {
    return 0;
  }
  return array[0] + sumRecursion(array.slice(1, array.length));
}
console.log(sumRecursion(numbers));

function sumTheSimpleWay(array) {
  return _.reduce(array, function (memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimpleWay(numbers));

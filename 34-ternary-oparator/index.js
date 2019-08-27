// Ternary Oparator

// Syntax:
// Condition ? expression when true : expression when false
function tossCoin() {
  var value = Math.random();
  var result = (value < 0.5) ? 'Mặt sấp' : 'Mặt ngửa'
  // if(value < 0.5) {
  //   console.log('Mặt sấp');
  // } else {
  //   console.log('Mặt ngửa');
  // }
  console.log(result);
}
tossCoin();

function example(…) {
  return condition1 ? value1
       : condition2 ? value2
       : condition3 ? value3
       : value4;
}
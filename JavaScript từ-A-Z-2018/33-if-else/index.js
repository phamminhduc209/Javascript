// Danh sách các phần tử
var  numbers = [53, 4558 , 4120 , -2165 , 2528 , 4500 , 3454, -4354354]; 
 
// Lấy giá trị lớn nhất và nhỏ nhất
var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);
 
// In giá trị ra màn hình
console.log("maxInNumbers " + maxInNumbers);
console.log("minInNumbers " + minInNumbers);
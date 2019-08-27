/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */

var fs = require('fs');
var content = fs.readFileSync('./data.json');
var newContet = JSON.parse(content);
console.log(newContet);

var readlineSync = require('readline-sync');
var members = {};
var name = readlineSync.question('May I have your name? ');
var age = readlineSync.question('How old are you? ');
var gender = readlineSync.question('Your Gender(Male/Female)? ');
var weight = readlineSync.question('Your Weight? ');

members.name = name;
members.age = age;
members.gender = gender;
members.weight = weight;

var dataStringify = JSON.stringify(members)
fs.writeFileSync('./data.json', dataStringify);

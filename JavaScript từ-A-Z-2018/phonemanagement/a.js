/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

var readlineSync = require('readline-sync');
var fs = require('fs');
var members = [];
// var members = JSON.parse(fs.readlineSync('./data.json'));

function loadData() {
  var fileContent = fs.readFileSync('./data.json');
  members = JSON.parse(fileContent);
}

function Save() {
  var content = JSON.stringify(members);
  fs.writeFileSync('./data.json', content, { encoding: 'utf8'});
}

function showMenbers() {
  for (member of members) {
    console.log("Id : "+member.id+" || "+member.name, member.phone);
  }
}

function showSearchMembers() {
  console.log("Enter what you want to search");
  var qs = readlineSync.question(">");
  search(members, qs);
  show_menu();
}

function showCreateMembers() {
  var name = readlineSync.question('Name: ');
  var phone = readlineSync.question('Phone ');
  var member = {
    name    : name,
    phone   : phone
  }
  members.push(member);
  Save();
}

function showEditMembers() {
  console.log('1. Enter ID you want to change');
  console.log('2. Exit');
  var edit = readlineSync.question('> ');
  switch (edit) {
    case '1':
      // showEditMembers();
      showMenu();
      break;
    case '2':
      showMenu();
      break;
    default:
      console.log('Wrong option');
      showMenu();
      break;
  }
}

function showMenu() {
  console.log('1. Show all Members')
  console.log('2. Search a new Members');
  console.log('3. Create a new Members');
  console.log('4. Edit Members');
  // console.log('5. Delete Members');
  console.log('6. Save && Exit');

  var option = readlineSync.question('> ');
  switch (option) {
    case '1':
      showMenbers();
      showMenu();
      break;
    case '2':
      showSearchMembers();
      showMenu();
      break;
    case '3':
      Save();
      showMenu();
      break;
    case '4':
      showEditMembers();
      showMenu();
      break;
    case '6':
      Save();
      break;
    default:
      console.log('Wrong option');
      showMenu();
      break;
  }
}

function main() {
  loadData();
  showMenu();
}

main();
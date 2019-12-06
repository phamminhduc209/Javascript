/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

var phoneList = [];
var readlineSync = require('readline-sync');
var fs = require('fs');
phoneList = JSON.parse(fs.readFileSync('./data.json'));

showMenu();

function showMenu() {
  console.log("1. Show all Contact");
  console.log("2. Create New Contact");
  console.log("3. Edit Contact");
  console.log("4. Search Contact");
  var selected = readlineSync.question("> : ");
  selected = Number(selected);
  switch(selected) {
    case 1:
      showAll(phoneList);
      showMenu();
      break;
    case 2:
      showCreate();
      showMenu();
      break;
    case 3:
      showEdit();
      showMenu();
      break;
    case 4:
      showSearch(phoneList);
      showMenu();
      break;
    default:
      console.log('Wrong Option');
      break;
  }
}

function showSearch() {
  console.log('Enter everything you want find');
  let qs = readlineSync.question('> ');
  showSearchR(phoneList, qs);
  showMenu();
}

function showCreate() {
  console.log("Create New Phone");
  console.log("Enter New Name");
  let name = readlineSync.question('> : ');
  console.log("Enter New Phone");
  let phone = readlineSync.question('> : ');
  phoneList.push({id:phoneList[phoneList.length - 1].id + 1}, name.name, phone.phone);
  fs.writeFile('data.json', JSON.stringify(phoneList), (err) => {
    if(!err) {
      return "Add new complete";
    } else {
      console.log("Wrong. Pls check it again");
      ShowCreate();
    }
  })
}

function showEdit() {
  showAll(phoneList);
  console.log("Enter ID, you want edit");
  let ans = readlineSync.question('> : ');
  ans = Number(ans);
  let obj =phoneList[ans-1];
  let newName = readlineSync.question("Enter new name("+obj.name+"):");
  let newPhone = readlineSync.question("Enter new phone("+obj.phone+"):");
  phoneList[ans-1].phone = newPhone;
  phoneList[ans-1].name = newName;
  fs.writeFile("data.json",JSON.stringify(phoneList),(err)=>{
    if(!err){
   return "Edit complete";
   showMenu();
    }else{
      console.log("Wrong. Pls check it again");
      showEdit();
    }
  });
}

function showAll(ob){
  for(x of ob){
    console.log("Id:"+x.id+"|| Name: "+x.name+"|| Phone: "+x.phone);
  }
}

function showSearchR(ob,q){
  if(!isNaN(q)){
    q = Number(q);
    let arr = new Array();
    for(x of ob){
      if(Number(x.phone).toString().indexOf(Number(q).toString())>=0){
        arr.push(x);
      }
    }
    showSearch(arr);
  } else {
    q = q.toString();
    let arr = new Array();
    for(x of ob){
      if(change_alias(x.name).toLowerCase().indexOf(change_alias(q).toLowerCase())>=0){
        arr.push(x);
      }
    }
    showSearch(arr);
  }
}

function change_alias(alias) {
  var str = alias;
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  str = str.trim(); 
  return str;
}
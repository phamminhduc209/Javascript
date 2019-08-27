/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var phoneList = [];
var read = require("readline-sync");
var fs = require("fs");
phoneList = JSON.parse(fs.readFileSync("dataPhone.json"));

show_menu(); //SHOW MENU
function show_menu(){
  console.log("Menu danh bạ:");
  console.log("1.Thêm liên hệ mới");
  console.log("2.Sửa liên hệ");
  console.log("3.Tìm kiếm liên hệ");
  console.log("4.Xem tất cả liên hệ");
  var selected = read.question("Nhập tùy chọn:");
  selected = Number(selected);
  switch(selected){
    case 1:
    showAddnum();
    break;
    case 2:
    showEdit();
    break;
    case 3:
    showSearch();
    break;
    case 4:
    showContacts(phoneList);
    show_menu();
    break;
    default:
    console.log("ERR");
    show_menu();
  }
}

function showSearch(){
  console.log("Nhập bất kì tên hoặc số điện thoại để tìm trong danh bạ:");
  let qs = read.question(">");
  search(phoneList, qs);
  show_menu();
}
function showAddnum(){
  console.log("Thêm liên hệ:");
  console.log("Nhập số điện thoại:");
  let sdt = read.question(">");
  console.log("Nhập tên liên lạc:");
  let name = read.question('>');
  phoneList.push({id:phoneList[phoneList.length-1].id+1,name:name,phone:sdt});
  fs.writeFile("dataPhone.json",JSON.stringify(phoneList),(err)=>{
    if(!err){
   return "Thêm liên hệ thành công";
   show_menu();
    }else{
      console.log("Có lỗi xảy ra. Vui lòng thử lại");
      showAddnum();
    }
  });
}

function showEdit(){
  showContacts(phoneList);
  console.log("Nhập id liên hệ cần thay đổi");
  let ans = read.question(">");
  ans = Number(ans);
  let obj =phoneList[ans-1];
  let newPhone = read.question("Nhập sđt mới hiện tại("+obj.phone+"):");
  let newName = read.question("Nhập tên mới hiện tại("+obj.name+"):");
  phoneList[ans-1].phone = newPhone;
  phoneList[ans-1].name = newName;
  fs.writeFile("dataPhone.json",JSON.stringify(phoneList),(err)=>{
    if(!err){
   return "Sửa liên hệ thành công";
   show_menu();
    }else{
      console.log("Có lỗi xảy ra. Vui lòng thử lại");
      showEdit();
    }
  });
}

function showContacts(ob){
  for(x of ob){
    console.log("Id:"+x.id+"||Tên: "+x.name+"||Số điện thoại: "+x.phone);
  }
}

function search(ob,q){
  if(!isNaN(q)){
    q = Number(q);
    let arr = new Array();
    for(x of ob){
      if(Number(x.phone).toString().indexOf(Number(q).toString())>=0){
        arr.push(x);
      }
    }
    showContacts(arr);
  } else {
    q = q.toString();
    let arr = new Array();
    for(x of ob){
      if(change_alias(x.name).toLowerCase().indexOf(change_alias(q).toLowerCase())>=0){
        arr.push(x);
      }
    }
    showContacts(arr);
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



"use strict";

const inputFirstname = document.getElementById("input-firstname");
const inputLastname = document.getElementById("input-lastname");
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");

// Bắt sự kiện click btn register
btnSubmit.addEventListener("click", function () {
  //Lấy dl người dùng nhập vào
  const user = new User(
    inputFirstname.value,
    inputLastname.value,
    inputUsername.value,
    inputPassword.value
  );

  //Check validate
  const isValidate = validate(user);

  if (isValidate) {
    //thêm user vào mảng userArr
    userArr.push(user);
    //lưu dl lại (update dl) vào localStorage
    saveToStorage("userArr", userArr);

    alert("Đăng kí thành công!");

    //điều hướng sang trang login
    window.location.assign("../pages/login.html");
  }
});

//Hàm validate thông tin đăng ký cảu người dùng nhập vào form
function validate(user) {
  let isValid = true;

  // 1. Không TH nào bị bỏ trống
  if (user.firstname.trim().length === 0) {
    alert("Vui lòng nhập FirstName !");
    isValid = false;
  }

  if (user.lastname.trim().length === 0) {
    alert("Vui lòng nhập LastName !");
    isValid = false;
  }

  if (user.username.trim().length === 0) {
    alert("Vui lòng nhập UserName !");
    isValid = false;
  }
  //pw ít nhất 8 kí tự
  if (user.password === "") {
    alert("vui long nhap password");
    isValid = false;
  }

  if (inputPasswordConfirm.value === "") {
    alert("vui long xac minh passowrd");
    isValid = false;
  }
  // username không đc trung
  if (
    //tồn tại 1 username === user trước đó
    !userArr.every((item) => (item.username !== user.username ? true : false))
  ) {
    alert("Username đã tồn tại !");
    isValid = false;
  }

  // pw === confirm pw
  if (user.password !== inputPasswordConfirm.value) {
    alert("Mật khẩu không giống nhau");
    isValid = false;
  }
  // pw nhiều hơn 8 kí tự
  if (user.password.length <= 8) {
    alert(`mật khẩu phải có độ dài >=8`);
    isValid = false;
  }
  return isValid;
}

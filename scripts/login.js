"use strict";

const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");

// Bắt sự kiện click login
// button ở trang index.html và gửi dữ liệu đến server
btnSubmit.addEventListener("click", function () {
  //kiểm tra
  const isValidate = validate();
  if (isValidate) {
    // check thông tin người dùng nhập
    const user = userArr.find(
      (item) =>
        item.username === inputUsername.value &&
        item.password === inputPassword.value
    );

    if (user) {
      alert("Đăng nhập thành công");

      // lưu thông tin user hiện tại đang đăng nhập
      saveToStorage("userActive", user);
      //chuyển hướng sang trang chủ
      window.location.assign("../index.html");
    } else {
      alert("Thông tin đăng nhập không đúng, vui lòng thử lại!");
    }
  }
});

// Validate
function validate() {
  let isValidate = true;
  if (inputUsername.value === "") {
    alert("Vui lòng nhập username");
    isValidate = false;
  }
  if (inputPassword.value === "") {
    alert("Vui lòng nhập password");
    isValidate = false;
  }
}

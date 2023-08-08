"use strict";

const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const welcomeMessage = document.getElementById("welcome-message");
const btnLogout = document.getElementById("btn-logout");

displayHome();

//Hàm hiển thị nội dung trên trang Home
function displayHome() {
  // nếu đã đăng nhập => hiện mainContent
  // chưa => hiện loginModal
  if (userActive) {
    loginModal.style.display = "none";
    mainContent.style.display = "block";

    //Thêm welcomeMessage
    welcomeMessage.textContent = `Welcome ${userActive.firstname}`;

    //
  } else {
    loginModal.style.display = "block";
    mainContent.style.display = "none";
  }
}

// Click Logout
btnLogout.addEventListener("click", function () {
  const isLogout = confirm("Bạn đồng ý logout ?");
  if (isLogout) {
    userActive = null; // ko có ai đang đăng nhập

    saveToStorage("userActive", userActive);
    //hiển thị Home chưa có user đăng nhập
    displayHome();
  }
});

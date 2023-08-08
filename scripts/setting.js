"use strict";

if (userActive) {
  const inputPageSize = document.getElementById("input-page-size");
  const inputCategory = document.getElementById("input-category");
  const btnSubmit = document.getElementById("btn-submit");

  btnSubmit.addEventListener("click", function () {
    if (validate()) {
      // cập nhật userActive
      userActive.pageSize = Number.parseInt(inputPageSize.value);
      userActive.category = inputCategory.value;

      saveToStorage("userActive", userActive);

      // cập nhật userArr
      const index = userArr.findIndex(
        (userItem) => userItem.username === userActive.username
      );

      userArr[index] = userActive;

      saveToStorage("userArr", userArr);

      //reset form
      alert("Cài đặt thành công");
      inputPageSize.value = "";
      inputCategory.value = "General";
    }
  });
  //Validated
  function validate() {
    let isValidate = true;

    //check input
    if (Number.isNaN(Number.parseInt(inputPageSize.value))) {
      alert("Vui lòng chọn số trang");
      isValidate = false;
    }

    //
    if (inputCategory.value === "") {
      alert("Vui lòng chọn thể loại bài viết");
      isValidate = false;
    }
  }
}

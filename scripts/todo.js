"use strict";

//đăng nhập
if (userActive) {
  const todoList = document.getElementById("todo-list");
  const btnAdd = document.getElementById("btn-add");
  const inputTask = document.getElementById("input-task");

  displayTodoList();

  // hiển thị todoList

  function displayTodoList() {
    let html = "";
    //từ array todoArr lọc ra các todo(task) là của user đang đăng nhập
    todoArr
      .filter((todo) => todo.owner === userActive.username)
      .forEach(function (todo) {
        html += `
                <li class=${todo.isDone ? "checked" : ""}>${
          todo.task
        }<span class="close">x</span></li>    
            `;
      });

    todoList.innerHTML = html;

    eventToggleTasks();
    eventDeleteTasks();
  }

  // Bắt sk click add

  btnAdd.addEventListener("click", function () {
    //kiểm tra nhập
    if (inputTask.value.trim().length === 0) {
      alert("Nhiệm vụ trống");
    } else {
      const todo = new Task(inputTask.value, userActive.username, false);

      // Thêm task vào mảng
      todoArr.push(todo);
      //lưu dl
      saveToStorage("todoArr", todoArr);

      // Hiển thị các list nv
      displayTodoList();
      inputTask.value = "";
    }
  });

  //Bắt sk Toggle Task
  function eventToggleTasks() {
    //lấy all ptu li chưa tt task
    document.querySelectorAll("#todo-list li").forEach(function (liEL) {
      liEL.addEventListener("click", function (e) {
        //
        if (e.target !== liEL.children[0]) {
          liEL.classList.toggle("checked");
          //toggle class checked
          const todo = todoArr.find(
            (todoItem) =>
              todoItem.owner == userActive.username &&
              todoItem.task === liEL.textContent.slice(0, -1)
            //Lấy nd , bỏ dấu x
          );
          // thay đổi thuốc tính isDone
          todo.isDone - liEL.classList.contains("checked") ? true : false;

          // lưu
          saveToStorage("todoArr", todoArr);
        }
      });
    });
  }

  // Hàm xóa task
  function eventDeleteTasks() {
    // lấy tất cả các pt ==> bắt sk
    document.querySelectorAll("#todo-list .close").forEach(function (closeEl) {
      closeEl.addEventListener("click", function () {
        // confirm
        const isDelete = confirm("Bạn chắc chắn muốn xóa?");

        if (isDelete) {
          // tìm vị trí của task trong mảng

          const index = todoArr.findIndex(
            (item) =>
              item.owner === userActive.username &&
              item.task === closeEl.parentElement.textContent.slice(0, -1)
          );

          //Xóa taask ra khỏi mảng
          todoArr.splice(index, 1);

          // lưu/ cập nhật
          saveToStorage("todoArr", todoArr);

          // Hiển thị lại
          displayTodoList();
        }
      });
    });
  }
  //Nếu chưa đăng nhập
} else {
  alert("Vui lòng đăng nhập để truy cập ứng dụng");
  window.location.assign("../index.html");
}

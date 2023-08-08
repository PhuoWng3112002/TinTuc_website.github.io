"use strict";

// HÀm lấy DL
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

//Hàm lưu DL
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Lấy DL userArr từ localStorage
const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];

console.log(users);

//Chuyển đổi về dạng class Instance
const userArr = users.map((user) => parseUser(user));

console.log(userArr);

//Lấy DL user đăng nhập
let userActive = getFromStorage("userActive")
  ? parseUser(getFromStorage("userActive"))
  : null;

// Lấy dl todoArr từ localStorage
const todos = getFromStorage("todoArr") ? getFromStorage("todoArr") : [];

//Chuyển đối về dạng class Instance
const todoArr = todos.map((todo) => parseTask(todo));

/************************************************************* */
// HÀM CHUYỂN TỪ JS OBJECT SANG CLASS INSTANCE

function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password,
    userData.pageSize,
    userData.category
  );

  return user;
}

function parseTask(taskData) {
  const task = new Task(taskData.task, taskData.owner, taskData.isDone);
  return task;
}

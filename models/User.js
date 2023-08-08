"use strict";
// class user đại diện thông tin người dùng
class User {
  constructor(
    firstname,
    lastname,
    username,
    password,
    // mặc định nếu không khai báo thì giá trị của 2 thuộc tính này sẽ cho ...
    pageSize = 10,
    category = "business"
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;

    //9.cá nhân hóa
    this.pageSize = pageSize;
    this.category = category;
  }
}

//Class Task chứa các thông tin về Task trong Todo list
class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}

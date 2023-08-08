# TinTuc_website.github.io
https://github.com/PhuoWng3112002/TinTuc_website.github.io.git
<h3>Chức năng Register</h3>

![image](https://github.com/PhuoWng3112002/TinTuc_website.github.io/assets/107473716/085e61d9-23b1-4cc4-9ea9-fb94e03ecb34)

Để quản lý người dùng,tạo một mảng gọi là userArr, mảng này sẽ chứa các Instance được tạo từ Class User. Sau đó,lưu userArray này xuống localStorage, mỗi lần vào trang Register sẽ cần load lại userArr từ Localstorage.<br>
<b>const KEY = "USER_ARRAY";<br>
const userArr = JSON.parse(getFromStorage(KEY)) || [];</b>
<br>
Sau khi nhấn nút Register, bạn phải xử lý sự kiện click vào nút Register và thực hiện các bước sau: 
<ul>
  <li>Lấy dữ liệu nhập vào từ form</li>
  <li>Gọi hàm validate để kiểm tra form hợp lệ</li>
  <li>Khởi tạo user mới với các dữ liệu hợp lệ </li>
  <li>Thêm user vào mảng, lưu mảng vào localStorage</li>
  <li>Chuyển trang đến màn hình login</li>
</ul><br>
Validate các thông tin mà người dùng nhập vào theo các tiêu chí sau:
<ul>
  <li>Không có trường nào bị bỏ trống.</li>
  <li>Username không được trùng với Username của các người dùng trước đó.</li>
  <li>Password và Confirm Password phải giống nhau</li>
  <li>Password phải có nhiều hơn 8 ký tự.</li>
</ul>

<h3>Chức năng Login</h3>

![z4587139925601_2d367971cf74ddbf9047a63e964557da](https://github.com/PhuoWng3112002/TinTuc_website.github.io/assets/107473716/3782d085-7201-4261-8a01-15fbea982e4d)

<h3>Home Page</h3>
Đây sẽ là giao diện hiển thị đầu tiên khi người dùng truy cập vào ứng dụng. Trang này sẽ gồm 2 chế độ:
<br>
Nếu người dùng chưa đăng nhập, bạn cần hiển thị màn hình gồm nút đăng nhập và đăng ký như sau:

![z4587139923662_4837c3c03fe00bdff5f4fb4f95719a77](https://github.com/PhuoWng3112002/TinTuc_website.github.io/assets/107473716/f60913e6-b131-4b9c-b9b9-ca916c01363f)

Nếu người dùng đã đăng nhập, bạn sẽ hiển thị thông điệp chào mừng như sau: "Welcome + Firstname" và nút Logout.

![z4587139921253_94cbdef0f08f759c5ea11557119e2303](https://github.com/PhuoWng3112002/TinTuc_website.github.io/assets/107473716/787b5247-53d1-4ed2-a144-6099b0adf826)

<h3>Logout</h3>
Xóa User hiện tại ở Localstorage và đưa người dùng trở lại trang Login
<h3>Hiển thị bài viết</h3>

https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c192c2f17f1848c9b9be611de86c2532
![z4587139919320_75f3f045efa559a8ee83638d920fe305](https://github.com/PhuoWng3112002/TinTuc_website.github.io/assets/107473716/6cd572bd-bfc3-4a43-9174-c49ff24e6ff3)

API này sẽ có các tham số như sau:
<ul>
  <li>country: Mã code của đất nước mà bạn muốn lấy tin tức.</li>
  <li>category: Danh mục của tin tức.</li>
  <li>pageSize: Số lượng bài viết trả về khi gọi API.</li>
  <li>page: Thứ tự của lần trả về dữ liệu. Ví dụ có tất cả 10 bài viết, lần thứ nhất (page = 1) sẽ trả về 5 bài từ 1 --> 5 thì lần thứ 2 (page = 2) sẽ trả về 5 bài tiếp theo từ 6 --> 10.</li>
  <li>apiKey: Khóa để xác thực, đây là tham số bắt buộc để bạn có thể sử dụng được API.</li>
</ul>

<h3>Chuyển trang cho các bài viết</h3>

![z4587139917285_2d290c821bac72b865f5f43e2769586a](https://github.com/PhuoWng3112002/TinTuc_website.github.io/assets/107473716/ee225f60-63e4-4265-b786-aeaef3c9e1c6)
 
<h3>Hiển thị Todo List -Thêm mới Todo và Lưu dữ liệu vào LocalStorage </h3>
![z4587139913446_d436c80e4b6387e3145889d4202ac684](https://github.com/PhuoWng3112002/TinTuc_website.github.io/assets/107473716/ccbb1d74-3cb6-4b27-bd74-83c4cc15df9f)


<h3>Thay đổi setting</h3>
  ![z4587139913122_81bf52ac5bea40a275ed4921a4725cf9](https://github.com/PhuoWng3112002/TinTuc_website.github.io/assets/107473716/d24e20f6-963f-4509-97f8-f731c29109e3)

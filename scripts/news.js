"use strict";

if (userActive) {
  const newsContainer = document.getElementById("news-container");
  const btnPrev = document.getElementById("btn-prev");
  const pageNum = document.getElementById("page-num");
  const btnNext = document.getElementById("btn-next");

  // Biến này để tính số News tối đa trả về từ API
  let totalResults = 0;

  getDataNews("us", 1);

  // Lấy dl Data News từ API và hiển thị list News
  async function getDataNews(country, page) {
    try {
      // kết nối API và lấy dl
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${userActive.category}&pageSize=${userActive.pageSize}&apiKey=c192c2f17f1848c9b9be611de86c2532`
      );

      const data = await res.json();

      //check lỗi request >100 lần /ngày
      if (data.status === "error" && data.code === "rateLimited") {
        throw new Error(data.message);
      }

      // bắt lỗi ko chạy trên server
      if (data.code === "corsNotAllowed") {
        throw new Error(data.message);
      }

      //gọi hàm hiển thị list News
      displayNewList(data);
      //bắt lỗi
    } catch (err) {
      //thông báo lỗi
      alert("Error:" + err.message);
    }
  }

  //btn Prev
  function checkBtnPrev() {
    if (pageNum.textContent == 1) {
      btnPrev.style.display = "none";
    } else {
      btnPrev.style.display = "block";
    }
  }
  // Kiểm tra đk ấn nút Next
  function checkBtnNext() {
    //Nếu page Number == max
    if (pageNum.textContent == Math.ceil(totalResults / userActive.pageSize)) {
      btnNext.style.display = "none";
    } else {
      btnNext.style.display = "block";
    }
  }

  // click prev
  btnPrev.addEventListener("click", function () {
    // gọi hàm này để lấy dl và hiển thị danh sách các News trước đó

    getDataNews("us", --pageNum.textContent);
  });
  //Bắt sk click next
  btnNext.addEventListener("click", function () {
    getDataNews("us", ++pageNum.textContent);
  });

  // Hàm hiển thị list News lên trang
  function displayNewList(data) {
    // lấy gtri cho biến max
    totalResults = data.totalResults;
    checkBtnNext();
    checkBtnPrev();

    let html = "";
    //tạo các code HTML các News để hiển thị
    //no_image_available.jpg để thay thế ảnh
    data.articles.forEach(function (article) {
      html += `
      <div class="new-content">
        <div class="img-banner">
            <img src=${
              article.urlToImage ? article.urlToImage : "no_image_available.jpg"
            } alt="img"/>
        </div>
        <div class ="content">
            <h4>${article.title}</h4>
            <p>${article.description}</p>
            <button><a href=${article.url} target ="_blank">View</a></button>
        </div>
    </div>
        `;
    });

    newsContainer.innerHTML = html;
  }
} else {
  alert(`Không có dữ liệu. Vui lòng đăng nhập`);
  window.location.assign("../index.html");
}

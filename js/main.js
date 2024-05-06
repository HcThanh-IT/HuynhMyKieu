window.addEventListener("load", function () {
  var isLogin = JSON.parse(localStorage.getItem("isLogin"));
  console.log(isLogin);
  if (isLogin === true) {
    var header__username = document.querySelector("#header-username");
    header__username.style.display = "block";
    var header__dangnhap = document.querySelector("#header-dangnhap");
    header__dangnhap.style.display = "none";
    var header__dangxuat = document.querySelector("#header-logout");
    header__dangxuat.style.display = "block";
    var user = localStorage.getItem("user");
    var data = JSON.parse(user);
    var data__username = data.name;
    document.querySelector("#header-username span").innerHTML = data__username;
  }

  document
    .querySelector("#header-logout")
    .addEventListener("click", function () {
      localStorage.setItem("Login", false);
      var header__username = document.querySelector("#header-username");
      header__username.style.display = "none";
      var header__dangnhap = document.querySelector("#header-dangnhap");
      header__dangnhap.style.display = "block";
      var header__dangxuat = document.querySelector("#header-logout");
      header__dangxuat.style.display = "none";
    });
});
// Lấy các phần tử và nút điều khiển
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const categories = document.querySelectorAll(".category");
let currentCategoryIndex = 0; // Chỉ số của nhóm sản phẩm đang hiển thị

// Số lượng sản phẩm trên mỗi trang
const productsPerPage = 6;

// Ẩn tất cả các nhóm sản phẩm trừ nhóm đầu tiên
function hideAllCategories() {
  categories.forEach((category) => {
    category.style.display = "none";
  });
}

// Hiển thị sản phẩm ở nhóm được chọn
function showCategory(categoryIndex) {
  hideAllCategories();
  categories[categoryIndex].style.display = "block";
}

// Chuyển đến trang tiếp theo
nextBtn.addEventListener("click", function () {
  currentCategoryIndex++;
  if (currentCategoryIndex >= categories.length) {
    currentCategoryIndex = 0;
  }
  showCategory(currentCategoryIndex);
});

// Chuyển đến trang trước đó
prevBtn.addEventListener("click", function () {
  currentCategoryIndex--;
  if (currentCategoryIndex < 0) {
    currentCategoryIndex = categories.length - 1;
  }
  showCategory(currentCategoryIndex);
});

// Mặc định, hiển thị nhóm sản phẩm đầu tiên
showCategory(currentCategoryIndex);

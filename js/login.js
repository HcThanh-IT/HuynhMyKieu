
let btnLogin = document.getElementById("btn-submitLogin");
let btnRegister = document.getElementById("btn-submitSignup");
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassWord");
let registerName = document.getElementById("txtName");
let registeEmail = document.getElementById("txtEmail");
let registerPassword = document.getElementById("txtPassWord");

btnRegister.addEventListener("click", function (event) {
  event.preventDefault();
  let listUser = [];
  let email = registeEmail.value;
  let password = registerPassword.value;
  let name = registerName.value;
  let user = {
    email,
    password,
    name,
  };
  listUser.push(user);
  localStorage.setItem("users", JSON.stringify(listUser));
  alert("Đăng ký thành công!");
  window.location.href = "../index.html";
});

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  let users = JSON.parse(localStorage.getItem("users"));
  let email = loginEmail.value;
  let password = loginPassword.value;

  if (email == "" || password == "") {
    alert("Vui lòng nhập đủ thông tin!!");
  }

  let user = users.find((user) => user.email === email);
  localStorage.setItem("user", JSON.stringify(user));
  if (!user) {
    alert("Không tìm thấy tài khoản nào có email: ", email);
  }
  console.log(email !== user.email || password !== user.password);
  if (email === user.email || password === user.password) {
    localStorage.setItem("isLogin", true);
    alert("Đăng nhập thành công!!");
    window.location.href = "../index.html";
  }
  
});

// Lấy tham chiếu đến nút
let btnShowLocalStorage = document.getElementById("btnShowLocalStorage");

// Thêm sự kiện click
btnShowLocalStorage.addEventListener("click", function() {
    // Lấy tất cả các items từ localStorage
    const allItems = {...localStorage};

    // In ra tất cả các items
    console.log("Tất cả các items trong localStorage:");
    for (let key in allItems) {
        console.log(`${key}: ${localStorage.getItem(key)}`);
    }
});


// Lấy tham chiếu đến nút
let btnClearLocalStorage = document.getElementById("btnClearLocalStorage");

// Thêm sự kiện click
btnClearLocalStorage.addEventListener("click", function() {
    // Xóa tất cả dữ liệu trong localStorage
    localStorage.clear();
    alert("Đã xóa tất cả dữ liệu trong localStorage!");
});





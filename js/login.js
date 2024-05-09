// Lấy tham chiếu đến các phần tử trên giao diện
let btnLogin = document.getElementById("btn-submitLogin");
let btnRegister = document.getElementById("btn-submitSignup");
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassWord");
let registerName = document.getElementById("txtName");
let registeEmail = document.getElementById("txtEmail");
let registerPassword = document.getElementById("txtPassWord");

// Sự kiện khi nút đăng ký được nhấn
btnRegister.addEventListener("click", function (event) {
  event.preventDefault();

  // Kiểm tra xem localStorage đã có dữ liệu tài khoản hay chưa
  let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  let email = registeEmail.value;
  let password = registerPassword.value;
  let name = registerName.value;

  // Kiểm tra xem email đã tồn tại trong danh sách tài khoản chưa
  let isExistingUser = existingUsers.some(user => user.email === email);
  if (isExistingUser) {
    alert("Email đã được sử dụng. Vui lòng chọn email khác.");
    return;
  }

  let user = {
    email,
    password,
    name,
  };

  // Thêm tài khoản mới vào danh sách các tài khoản đã đăng ký
  existingUsers.push(user);

  // Lưu danh sách các tài khoản đã đăng ký vào localStorage
  localStorage.setItem("users", JSON.stringify(existingUsers));

  alert("Đăng ký thành công!");
  // window.location.href = "../index.html";
});

// Sự kiện khi nút đăng nhập được nhấn
btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  let users = JSON.parse(localStorage.getItem("users"));
  let email = loginEmail.value;
  let password = loginPassword.value;

  if (email == "" || password == "") {
    alert("Vui lòng nhập đủ thông tin!!");
    return;
  }

  if (!users) {
    alert("Chưa có tài khoản nào được đăng ký.");
    return;
  }

  let user = users.find((user) => user.email === email);
  
  if (!user) {
    alert("Không tìm thấy tài khoản nào có email: " + email);
    return;
  }

  if (password !== user.password) {
    alert("Mật khẩu không chính xác!");
    return;
  }

  // Đăng nhập thành công, lưu thông tin người dùng vào localStorage
  localStorage.setItem("currentUser", JSON.stringify(user));
  localStorage.setItem("isLogin", true);
  alert("Đăng nhập thành công!!");
  window.location.href = "../index.html";
});

// Sự kiện khi nút xem dữ liệu trong localStorage được nhấn
let btnShowLocalStorage = document.getElementById("btnShowLocalStorage");
btnShowLocalStorage.addEventListener("click", function() {
    // Lấy và in ra tất cả các items từ localStorage
    const allItems = {...localStorage};
    console.log("Tất cả các items trong localStorage:");
    for (let key in allItems) {
        console.log(`${key}: ${localStorage.getItem(key)}`);
    }
});

// Sự kiện khi nút xóa dữ liệu trong localStorage được nhấn
let btnClearLocalStorage = document.getElementById("btnClearLocalStorage");
btnClearLocalStorage.addEventListener("click", function() {
    // Xóa tất cả dữ liệu trong localStorage
    localStorage.clear();
    alert("Đã xóa tất cả dữ liệu trong localStorage!");
});

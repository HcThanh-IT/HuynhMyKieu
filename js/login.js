
document.addEventListener("DOMContentLoaded", function() {
  let btnLogin = document.getElementById("btn-submitLogin");
  let btnRegister = document.getElementById("btn-submitSignup");
  let loginEmail = document.getElementById("loginEmail");
  let loginPassword = document.getElementById("loginPassWord");
  let registerName = document.getElementById("txtName");
  let registeEmail = document.getElementById("txtEmail");
  let registerPassword = document.getElementById("txtPassWord");

  // Hàm để kiểm tra xem người dùng đã đăng nhập trước đó chưa
  function checkLoggedIn() {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user) {
          alert("Bạn đã đăng nhập với tên " + user.name);
          return true;
      }
      return false;
  }

  // Hàm để lưu thông tin người dùng vào localStorage
  function saveUser(email, password, name) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let existingUser = users.find(u => u.email === email);
      if (existingUser) {
          alert("Email này đã được đăng ký. Vui lòng chọn một email khác.");
          return;
      }

      let user = { email, password, name };
      users.push(user);
      localStorage.setItem(email, JSON.stringify(user)); // Lưu vào localStorage dựa trên email
      localStorage.setItem("users", JSON.stringify(users));
      alert("Đăng ký thành công! Xin chào " + name);
      window.location.href = "../index.html";
  }

  // Hàm để kiểm tra thông tin người dùng và đăng nhập
  function loginUser(email, password) {
      let user = JSON.parse(localStorage.getItem(email));
      if (user && user.password === password) {
          localStorage.setItem("user", JSON.stringify(user));
          alert("Đăng nhập thành công! Xin chào " + user.name);
          window.location.href = "../index.html";
      } else {
          alert("Email hoặc mật khẩu không chính xác.");
      }
  }

  // Hàm để xóa tất cả các session đã lưu trong localStorage
  function clearAllSessions() {
      localStorage.clear();
      alert("Đã xóa tất cả session.");
  }

  // Hàm để in tất cả các session đã lưu trong localStorage
  function printAllSessions() {
      // Lấy tất cả keys trong localStorage
      let keys = Object.keys(localStorage);

      if (keys.length > 0) {
          console.log("Các session đã lưu:");
          keys.forEach(function(key) {
              // Kiểm tra nếu key không phải là "users"
              if (key !== "users") {
                  let sessionData = localStorage.getItem(key);
                  console.log("Session:", key, "Data:", sessionData);
              }
          });
      } else {
          console.log("Không có session nào được lưu.");
      }
  }

  // Sự kiện khi nút đăng ký được nhấn
  btnRegister.addEventListener("click", function (event) {
      event.preventDefault();
      let email = registeEmail.value;
      let password = registerPassword.value;
      let name = registerName.value;

      if (email === "" || password === "" || name === "") {
          alert("Vui lòng nhập đủ thông tin!!");
          return;
      }

      saveUser(email, password, name);
  });

  // Sự kiện khi nút đăng nhập được nhấn
  btnLogin.addEventListener("click", function (event) {
      event.preventDefault();
      let email = loginEmail.value;
      let password = loginPassword.value;

      if (email === "" || password === "") {
          alert("Vui lòng nhập đủ thông tin!!");
          return;
      }

      // Kiểm tra xem đã đăng nhập trước đó chưa
      if (checkLoggedIn()) {
          return;
      }

      loginUser(email, password);
  });

  // Sự kiện khi nút xóa tất cả session được nhấn
  document.getElementById("btnClearSessions").addEventListener("click", function(event) {
      event.preventDefault();
      clearAllSessions();
  });

  // Sự kiện khi nút in tất cả session được nhấn
  document.getElementById("btnShowSessions").addEventListener("click", function(event) {
      event.preventDefault();
      printAllSessions();
  });
});
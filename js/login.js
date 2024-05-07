// document.addEventListener("DOMContentLoaded", function () {
//   // // Function to handle login form submission
//   // document.getElementById("loginForm").addEventListener("submit", function(event) {
//   //   event.preventDefault(); // Prevent the default form submission behavior
//   //   // For demonstration, display a simple alert
//   //   alert("Login successful!");
//   //   // You can add additional logic here to redirect the user or perform other actions after successful login
//   // });

//   // // Function to handle signup form submission
//   // document.getElementById("signupForm").addEventListener("submit", function(event) {
//   //   event.preventDefault(); // Prevent the default form submission behavior
//   //   // For demonstration, display a simple alert
//   //   alert("Signup successful!");
//   //   // You can add additional logic here to redirect the user or perform other actions after successful signup
//   // });

// var btn__submitSignup = document.querySelector("#btn-submitSignup");

// btn__submitSignup.addEventListener("click", function () {
//   event.preventDefault();

//   var username = document.getElementById("txtEmail").value;
//   var password = document.getElementById("txtPassWord").value;

//   var user = {
//     username: username,
//     password: password,
//   };

//   var json = JSON.stringify(user);

//   localStorage.setItem("user", json);

//   alert("Đăng ký thành công!");
//   window.location.href = "../html/home.html";
// });

// var btn__submitLogin = document.querySelector("#btn-submitLogin");
// btn__submitLogin.addEventListener("click", function () {
//   event.preventDefault();

//   var username = document.getElementById("loginEmail").value;
//   var password = document.getElementById("loginPassWord").value;

//   var user = localStorage.getItem("user");

//   var data = JSON.parse(user);

//   console.log(user);
//   console.log(data);
//   if (username == "" || password == "") {
//     alert("Vui lòng nhập đủ thông tin!!");
//   } else if (username != data.username || password != data.password) {
//     alert("Sai tài khoản hoặc mật khẩu!!");
//   } else if (username == data.username && password == data.password) {
//     localStorage.setItem("Login", true);
//     alert("Đăng nhập thành công!!");
//     window.location.href = "../html/home.html";
//   } else {
//     alert("Vui lòng nhập thông tin!!");
//   }
// });
// });

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
console.log(listUser);
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

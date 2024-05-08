document.addEventListener("DOMContentLoaded", function() {
    let btnLogin = document.getElementById("btn-submitLogin");
    let btnRegister = document.getElementById("btn-submitSignup");
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassWord");
    let registerName = document.getElementById("txtName");
    let registerEmail = document.getElementById("txtEmail");
    let registerPassword = document.getElementById("txtPassWord");

    let userNameElement = document.getElementById("user-name");

    // Hàm để kiểm tra xem người dùng đã đăng nhập trước đó chưa
    function checkLoggedIn() {
        let user = JSON.parse(sessionStorage.getItem("user"));
        if (user) {
            return true;
        }
        return false;
    }

    // Hàm để lưu thông tin người dùng vào sessionStorage
    function saveUser(email, password, name) {
        let users = JSON.parse(sessionStorage.getItem("users")) || [];
        let existingUser = users.find(u => u.email === email);
        if (existingUser) {
            alert("Email này đã được đăng ký. Vui lòng chọn một email khác.");
            return;
        }

        let user = { email, password, name };
        users.push(user);
        sessionStorage.setItem("users", JSON.stringify(users));
        sessionStorage.setItem(email, JSON.stringify(user)); // Lưu vào sessionStorage dựa trên email
        alert("Đăng ký thành công");
    }

    // Hàm để kiểm tra thông tin người dùng và đăng nhập
    function loginUser(email, password) {
        let user = JSON.parse(sessionStorage.getItem(email));
        if (user && user.password === password) {
            sessionStorage.setItem("user", JSON.stringify(user));
            alert("Đăng nhập thành công! Xin chào " + user.name);
            window.location.href = "../index.html";
        } else {
            alert("Email hoặc mật khẩu không chính xác.");
        }
    }

    // Sự kiện khi nút đăng ký được nhấn
    btnRegister.addEventListener("click", function(event) {
        event.preventDefault();
        let email = registerEmail.value;
        let password = registerPassword.value;
        let name = registerName.value;

        if (email === "" || password === "" || name === "") {
            alert("Vui lòng nhập đủ thông tin!!");
            return;
        }

        saveUser(email, password, name);
    });

    // Sự kiện khi nút đăng nhập được nhấn
    btnLogin.addEventListener("click", function(event) {
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
    // Sự kiện khi nút đăng xuất được nhấn
document.getElementById("btnLogout").addEventListener("click", function(event) {
    event.preventDefault();
    logoutUser(); // Gọi hàm đăng xuất khi nút được nhấn
});
// Hàm để đăng xuất người dùng bằng cách xóa session
function logoutUser() {
    sessionStorage.removeItem("user"); // Xóa session người dùng
    alert("Bạn đã đăng xuất thành công.");
    // Chuyển hướng người dùng đến trang đăng nhập hoặc trang chính
    window.location.href = "../../login.html"; // Điều chỉnh URL tùy theo đường dẫn của trang đăng nhập
}


    // Hàm để xóa tất cả các session đã lưu trong localStorage
    function clearAllSessions() {
        sessionStorage.clear();
        alert("Đã xóa tất cả session.");
    }

    // Hàm để in tất cả các session đã lưu trong sessionStorage
function printAllSessions() {
    // Lấy tất cả keys trong sessionStorage
    let keys = Object.keys(sessionStorage);

    if (keys.length > 0) {
        console.log("Các session đã lưu:");
        keys.forEach(function(key) {
            // Kiểm tra nếu key không phải là "users"
            if (key !== "users") {
                let sessionData = sessionStorage.getItem(key);
                console.log("Session:", key, "Data:", sessionData);
            }
        });
    } else {
        console.log("Không có session nào được lưu.");
    }
}


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

    // Gọi hàm kiểm tra đăng nhập khi trang được tải
    checkLoggedIn();
});

/*
  1. Load data header, footer
*/
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");
    var footer = document.getElementById("footer");
    fetch("/client/public/template/header.html")
        .then(function (response) { return response.text(); })
        .then(function (data) {
        header.innerHTML = data;
    })
        .catch(function (error) {
        console.log(error.message);
    });
    fetch("/client/public/template/footer.html")
        .then(function (response) { return response.text(); })
        .then(function (data) {
        footer.innerHTML = data;
    })
        .catch(function (error) {
        console.log(error.message);
    });
});
var handleShow = function (icon, item) {
    icon.addEventListener("click", function () {
        if (item.type === "password") {
            item.type = "text";
        }
        else {
            item.type = "password";
        }
    });
};
/*
  2. Page Register
*/
var handleButtonRegister = function () {
    var btnRegister = document.getElementById("btn-register");
    var email = document.getElementById("email");
    var userName = document.getElementById("username");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    // Sự kiện "input" theo dõi giá trị thay đổi của ô input. Cho các item vào mảng và dùng for để lặp qa từng giá trị để kiểm tra
    [email, userName, password, confirmPassword].forEach(function (input) {
        input.addEventListener("input", function () {
            if (email.value.trim() !== "" &&
                userName.value.trim() !== "" &&
                password.value.trim() !== "" &&
                confirmPassword.value.trim() !== "" &&
                password.value === confirmPassword.value) {
                btnRegister.classList.remove("opacity-50");
                btnRegister.disabled = false;
            }
            else {
                btnRegister.classList.add("opacity-50");
            }
        });
    });
    btnRegister.onclick = function () {
        window.location.href = "./login.html";
    };
};
var handleShowPasswordRegister = function () {
    var inputPasswordRegister = document.getElementById("password");
    var inputConfirmPassword = document.getElementById("confirmPassword");
    var iconPasswordRegister = document.getElementById("eye-password");
    var iconConfirmPassword = document.getElementById("eye-confirm");
    handleShow(iconPasswordRegister, inputPasswordRegister);
    handleShow(iconConfirmPassword, inputConfirmPassword);
};
/*
  3. Page Login
*/
var handleShowPasswordLogin = function () {
    var inputPasswordLogin = document.getElementById("password-login");
    var iconPasswordLogin = document.getElementById("eye-password-login");
    handleShow(iconPasswordLogin, inputPasswordLogin);
};
var app = function () {
    // Current page - lấy ra đường dẫn. Chỉ thực thi các hàm tương ứng với trang hiện tại
    var currentPage = window.location.pathname;
    // indexOf() - Lấy ra một chuỗi con trong chuỗi gốc nếu có trả về vị trí tìm thấy đầu tiên của chuỗi con
    if (currentPage.indexOf("register.html")) {
        handleButtonRegister();
        handleShowPasswordRegister();
    }
    if (currentPage.indexOf("login.html")) {
        handleShowPasswordLogin();
    }
};
app();

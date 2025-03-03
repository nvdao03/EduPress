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
var handleShowPassword = function () {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    var eyeIconPassWord = document.getElementById("eye-password");
    var eyeIconConfirm = document.getElementById("eye-confirm");
    eyeIconPassWord.addEventListener("click", function () {
        if (password.type === "password") {
            password.type = "text";
        }
        else {
            password.type = "password";
        }
    });
    eyeIconConfirm.addEventListener("click", function () {
        if (confirmPassword.type === "password") {
            confirmPassword.type = "text";
        }
        else {
            confirmPassword.type = "password";
        }
    });
};
var app = function () {
    handleButtonRegister();
    handleShowPassword();
};
app();

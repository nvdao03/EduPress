"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var baseUrl = "http://localhost:4000";
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
// 3. Login Page
var handleShowPasswordLogin = function () {
    var inputPasswordLogin = document.getElementById("password-login");
    var iconPasswordLogin = document.getElementById("eye-password-login");
    handleShow(iconPasswordLogin, inputPasswordLogin);
};
// 4. Home Page
var getCategories = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, data, categoriesContainer_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("".concat(baseUrl, "/categories"))];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                categoriesContainer_1 = document.getElementById("home-categories");
                if (!categoriesContainer_1)
                    return [2 /*return*/];
                categoriesContainer_1.innerHTML = "";
                data.map(function (category) {
                    var divCategory = document.createElement("div");
                    divCategory.className = "rounded-[20px] border border-solid border-[#EAEAEA] px-[40px] py-[57px] text-center";
                    divCategory.innerHTML = "\n        <img src=".concat(category.image, " alt=\"\" class=\"mx-auto\" />\n        <h3 class=\"mt-[24px] text-[18px] font-semibold leading-[24px] text-[#000]\">").concat(category.title, "</h3>\n        <p class=\"no- mt-[12px] font-normal text-[#555555]\">").concat(category.description, "</p>\n      ");
                    categoriesContainer_1.appendChild(divCategory);
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error("Error fetching categories");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
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
    if (currentPage.indexOf("index.html")) {
        getCategories();
    }
};
app();

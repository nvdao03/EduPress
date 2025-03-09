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
var _this = this;
// => Load data header, footer
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");
    var headerLogin = document.getElementById("header-login");
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
    fetch("/client/public/template/header-login.html")
        .then(function (response) { return response.text(); })
        .then(function (data) {
        headerLogin.innerHTML = data;
    })
        .catch(function (error) {
        console.log(error.message);
    });
    handleSubmitLogin();
    handleButtonRegister();
});
// => Start gọi API
var baseUrl = "http://localhost:4000";
var getCategoriesPageHome = function () { return __awaiter(_this, void 0, void 0, function () {
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
                    divCategory.className =
                        "rounded-[20px] group hover:cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-[16px] border border-solid border-[#EAEAEA] px-[30px] py-[57px] text-center hover:rounded-[20px] hover:border-[1px] hover:border-[solid] hover:border-[#EAEAEA] hover:bg-[#FFF]";
                    divCategory.innerHTML = "\n        <img src=".concat("http://localhost:4000/".concat(category.image), " alt=\"\" class=\"mx-auto\" />\n        <h3 class=\"mt-[24px] text-[18px] font-semibold leading-[24px] text-[#000] group-hover:text-[#FF782D]\">").concat(category.title, "</h3>\n        <p class=\"no- mt-[12px] font-normal text-[#555555]\">").concat(category.description, "</p>\n      ");
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
var getCoursesPageHome = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, coursesContainer_1, tick_1, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("".concat(baseUrl, "/courses"))];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                coursesContainer_1 = document.getElementById("home-courses");
                tick_1 = false;
                if (!coursesContainer_1)
                    return [2 /*return*/];
                coursesContainer_1.innerHTML = "";
                data.map(function (course) {
                    var divCourse = document.createElement("div");
                    if (course.discount !== "Free") {
                        tick_1 = true;
                    }
                    else {
                        tick_1 = false;
                    }
                    divCourse.className =
                        "relative cursor-pointer rounded-[20px] border-[1px] border-solid border-[#EAEAEA] bg-[#FFF] transition-all duration-300 ease-in-out hover:-translate-y-[16px] hover:[box-shadow:0px_4px_20px_0px_rgba(0,_0,_0,_0.10)]";
                    divCourse.innerHTML = "\n        <div>\n                <span\n                  class=\"absolute left-5 top-5 flex items-center justify-center rounded-[8px] bg-black px-3 py-2 font-medium text-[#fff]\"\n                >\n                  Photography\n                </span>\n                <img\n                  src=".concat("http://localhost:4000/".concat(course.image), "\n                  class=\"rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px]\"\n                />\n              </div>\n              <div class=\"p-[20px]\">\n                <p class=\"font-normal leading-[24px] text-black\"><span class=\"text-[#555555] font-normal text-sm\">by</span> ").concat(course.title, "</p>\n                <h3 class=\"mt-[12px] text-[18px] font-semibold leading-[24px]\">\n                  ").concat(course.title, "\n                </h3>\n                <div class=\"mt-4 flex items-center gap-x-[24px] border-b border-solid border-[#EAEAEA] pb-4\">\n                  <div class=\"flex items-center gap-x-2\">\n                    <img src=").concat("http://localhost:4000/".concat(course.weekIcon), " alt=\"\" />\n                    <span class=\"font-normal leading-[24px] text-[#555555]\">").concat(course.week, "</span>\n                  </div>\n                  <div class=\"flex items-center gap-x-2\">\n                    <img src=").concat("http://localhost:4000/".concat(course.studentIcon), " alt=\"\" />\n                    <span class=\"font-normal leading-[24px] text-[#555555]\">").concat(course.student, "</span>\n                  </div>\n                </div>\n                <div class=\"flex items-center justify-between pt-4\">\n                  <div class=\"flex items-center gap-x-2\">\n                    <span class=\"font-normal leading-[27px] text-[#9D9D9D] line-through\">").concat(course.price, "</span>\n                    <span class=\"font-medium leading-[27px] text-[#55BE24] ").concat(tick_1 && "text-[#F51A1A]", "\">").concat(course.discount, "</span>\n                  </div>\n                  <a\n                    href=\"#!\"\n                    class=\"font-medium leading-[27px] transition-all duration-300 ease-in-out hover:underline\"\n                    >View More</a\n                  >\n                </div>\n              </div>\n      ");
                    coursesContainer_1.appendChild(divCourse);
                });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.error("Error fetching courses");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getFeedbacksHome = function () { return __awaiter(_this, void 0, void 0, function () {
    var reponse, data, feedbackContainer_1, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("".concat(baseUrl, "/feedbacks"))];
            case 1:
                reponse = _a.sent();
                return [4 /*yield*/, reponse.json()];
            case 2:
                data = _a.sent();
                feedbackContainer_1 = document.getElementById("feedback-container");
                if (!feedbackContainer_1)
                    return [2 /*return*/];
                feedbackContainer_1.innerHTML = "";
                data.map(function (feedback) {
                    var divFeeback = document.createElement("div");
                    divFeeback.className = "rounded-[20px] border-[1px] border-solid border-[#EAEAEA] bg-[#FFF] px-[30px] py-[40px]";
                    divFeeback.innerHTML = "\n        <img src=\"./assets/icons/feedback-arrow.svg\" />\n        <p class=\"mt-[20px] font-normal leading-[27px]\">".concat(feedback.desc, "</p>\n        <h3 class=\"mt-[30px] text-[20px] font-semibold leading-[24px]\">").concat(feedback.name, "</h3>\n        <p class=\"mt-[8px] font-normal leading-[27px] text-[#555555]\">").concat(feedback.type, "</p>\n      ");
                    feedbackContainer_1.appendChild(divFeeback);
                });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error("Error fetchinning feedback");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getArticlesHome = function () { return __awaiter(_this, void 0, void 0, function () {
    var reponse, data, articleContainer_1, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("".concat(baseUrl, "/articles"))];
            case 1:
                reponse = _a.sent();
                return [4 /*yield*/, reponse.json()];
            case 2:
                data = _a.sent();
                articleContainer_1 = document.getElementById("home-articles");
                if (!articleContainer_1)
                    return [2 /*return*/];
                articleContainer_1.innerHTML = "";
                data.slice(0, 3).map(function (article) {
                    var divArticle = document.createElement("a");
                    divArticle.href = "http://127.0.0.1:5500/client/public/blog-detail.html";
                    divArticle.className =
                        "relative cursor-pointer rounded-[20px] border-[1px] border-solid border-[#EAEAEA] bg-[#FFF] transition-all duration-300 ease-in-out hover:-translate-y-[16px] hover:[box-shadow:0px_4px_20px_0px_rgba(0,_0,_0,_0.10)]";
                    divArticle.innerHTML = "\n        <div>\n                <img\n                  src=".concat("http://localhost:4000/".concat(article.image), "\n                  class=\"rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px]\"\n                />\n              </div>\n              <div class=\"p-[20px]\">\n                <h3 class=\"mt-[12px] text-[18px] font-semibold leading-[24px]\">\n                ").concat(article.title, "\n                </h3>\n                <div class=\"mt-4 flex items-center gap-x-[24px] pb-4\">\n                  <div class=\"flex items-center gap-x-2\">\n                    <img src=\"./assets/icons/calenda.svg\" />\n                    <span class=\"font-normal leading-[24px] text-[#555555]\">").concat(article.time, "</span>\n                  </div>\n                </div>\n                <p class=\"text-[#555555] leading-[27px]\">").concat(article.desc, "</p>\n              </div>\n      ");
                    articleContainer_1.appendChild(divArticle);
                });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.error("Error fetching articles");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getCoursesPageCourses = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, coursesContainer_2, tick_2, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("".concat(baseUrl, "/courses"))];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                coursesContainer_2 = document.getElementById("courses-courses");
                tick_2 = false;
                if (!coursesContainer_2)
                    return [2 /*return*/];
                coursesContainer_2.innerHTML = "";
                data.map(function (course) {
                    var divCourse = document.createElement("div");
                    if (course.discount !== "Free") {
                        tick_2 = true;
                    }
                    else {
                        tick_2 = false;
                    }
                    divCourse.className =
                        "relative cursor-pointer rounded-[20px] border-[1px] border-solid border-[#EAEAEA] bg-[#FFF] transition-all duration-300 ease-in-out hover:-translate-y-[16px] hover:[box-shadow:0px_4px_20px_0px_rgba(0,_0,_0,_0.10)]";
                    divCourse.innerHTML = "\n        <div>\n                <span\n                  class=\"absolute left-5 top-5 flex items-center justify-center rounded-[8px] bg-black px-3 py-2 font-medium text-[#fff]\"\n                >\n                  Photography\n                </span>\n                <img\n                  src=".concat("http://localhost:4000/".concat(course.image), "\n                  class=\"rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px]\"\n                />\n              </div>\n              <div class=\"p-[20px]\">\n                <p class=\"font-normal leading-[24px] text-black\"><span class=\"text-[#555555] font-normal text-sm\">by</span> ").concat(course.title, "</p>\n                <h3 class=\"mt-[12px] text-[18px] font-semibold leading-[24px]\">\n                  ").concat(course.title, "\n                </h3>\n                <div class=\"mt-4 flex items-center gap-x-[24px] border-b border-solid border-[#EAEAEA] pb-4\">\n                  <div class=\"flex items-center gap-x-2\">\n                    <img src=").concat("http://localhost:4000/".concat(course.weekIcon), " alt=\"\" />\n                    <span class=\"font-normal leading-[24px] text-[#555555]\">").concat(course.week, "</span>\n                  </div>\n                  <div class=\"flex items-center gap-x-2\">\n                    <img src=").concat("http://localhost:4000/".concat(course.studentIcon), " alt=\"\" />\n                    <span class=\"font-normal leading-[24px] text-[#555555]\">").concat(course.student, "</span>\n                  </div>\n                </div>\n                <div class=\"flex items-center justify-between pt-4\">\n                  <div class=\"flex items-center gap-x-2\">\n                    <span class=\"font-normal leading-[27px] text-[#9D9D9D] line-through\">").concat(course.price, "</span>\n                    <span class=\"font-medium leading-[27px] text-[#55BE24] ").concat(tick_2 && "text-[#F51A1A]", "\">").concat(course.discount, "</span>\n                  </div>\n                  <a\n                    href=\"#!\"\n                    class=\"font-medium leading-[27px] transition-all duration-300 ease-in-out hover:underline\"\n                    >View More</a\n                  >\n                </div>\n              </div>\n      ");
                    coursesContainer_2.appendChild(divCourse);
                });
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.error("Error fetching courses");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getArticlesPageBlog = function () { return __awaiter(_this, void 0, void 0, function () {
    var reponse, data, articleContainer_2, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("".concat(baseUrl, "/articles"))];
            case 1:
                reponse = _a.sent();
                return [4 /*yield*/, reponse.json()];
            case 2:
                data = _a.sent();
                articleContainer_2 = document.getElementById("blog-articles");
                if (!articleContainer_2)
                    return [2 /*return*/];
                articleContainer_2.innerHTML = "";
                data.map(function (article) {
                    var divArticle = document.createElement("a");
                    divArticle.href = "http://127.0.0.1:5500/client/public/blog-detail.html";
                    divArticle.className =
                        "relative cursor-pointer rounded-[20px] border-[1px] border-solid border-[#EAEAEA] bg-[#FFF] transition-all duration-300 ease-in-out hover:-translate-y-[16px] hover:[box-shadow:0px_4px_20px_0px_rgba(0,_0,_0,_0.10)]";
                    divArticle.innerHTML = "\n        <div>\n                <img\n                  src=".concat("http://localhost:4000/".concat(article.image), "\n                  class=\"rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px]\"\n                />\n              </div>\n              <div class=\"p-[20px]\">\n                <h3 class=\"mt-[12px] text-[18px] font-semibold leading-[24px]\">\n                ").concat(article.title, "\n                </h3>\n                <div class=\"mt-4 flex items-center gap-x-[24px] pb-4\">\n                  <div class=\"flex items-center gap-x-2\">\n                    <img src=\"./assets/icons/calenda.svg\" />\n                    <span class=\"font-normal leading-[24px] text-[#555555]\">").concat(article.time, "</span>\n                  </div>\n                </div>\n                <p class=\"text-[#555555] leading-[27px]\">").concat(article.desc, "</p>\n              </div>\n      ");
                    articleContainer_2.appendChild(divArticle);
                });
                return [3 /*break*/, 4];
            case 3:
                error_6 = _a.sent();
                console.error("Error fetching articles");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getFaqsListPageFaqs = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, faqsContainer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("".concat(baseUrl, "/faqs"))];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                faqsContainer = document.getElementById("faqs-list");
                if (!faqsContainer)
                    return [2 /*return*/];
                data.map(function (item) {
                    var divFaqs = document.createElement("div");
                    divFaqs.className = "rounded-[8px] h-fit border border-solid border-[#F5F5F5] bg-[#F5F5F5]";
                    divFaqs.innerHTML = "\n      <div>\n        <button\n          data-btn-id=\"".concat(item.id, "\"\n          type=\"button\"\n          class=\"faqs-button flex h-full w-full items-center justify-between px-[30px] py-[20px]\"\n        >\n          <h2 class=\"faqs-heading font-semibold leading-[1.5] text-black\">").concat(item.heading, "</h2>\n          <img src=").concat("http://localhost:4000".concat(item.icon), " />\n        </button>\n        <div data-desc-id=\"").concat(item.id, "\" class=\"faqs-desc px-[30px] pb-[20px] font-normal text-[#555]\">\n          <p class=\"leading-[2.0]\">\n            ").concat(item.description, "\n          </p>\n        </div>\n      </div>\n    ");
                    faqsContainer.appendChild(divFaqs);
                });
                handleShowFaqs();
                return [2 /*return*/];
        }
    });
}); };
// => Xử lý sự các sự kiện
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
};
var handleSubmitPageRegister = function () { return __awaiter(_this, void 0, void 0, function () {
    var email_1, username_1, password_1, confirmPassword_1, formRegister, linkRegister, listUsers_1, response, data, error_7;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                email_1 = document.getElementById("email");
                username_1 = document.getElementById("username");
                password_1 = document.getElementById("password");
                confirmPassword_1 = document.getElementById("confirmPassword");
                formRegister = document.getElementById("form-register");
                linkRegister = document.getElementById("link-register");
                listUsers_1 = [];
                return [4 /*yield*/, fetch("".concat(baseUrl, "/users"))];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                if (data)
                    listUsers_1 = data;
                formRegister.addEventListener("submit", function (event) { return __awaiter(_this, void 0, void 0, function () {
                    var formData, isUser, registerResponse, error_8;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                event.preventDefault();
                                formData = {
                                    email: email_1.value.trim(),
                                    username: username_1.value.trim(),
                                    password: password_1.value,
                                    confirmPassword: confirmPassword_1.value,
                                };
                                isUser = listUsers_1.some(function (user) { return user.username === formData.username; });
                                if (isUser) {
                                    alert("Tên tài khoản đã có người sử dụng");
                                    return [2 /*return*/];
                                }
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, fetch("".concat(baseUrl, "/users"), {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            email: formData.email,
                                            username: formData.username,
                                            password: formData.password,
                                        }),
                                    })];
                            case 2:
                                registerResponse = _a.sent();
                                if (registerResponse.ok) {
                                    window.location.href = "./login.html";
                                    alert("Đăng ký tài khoản thành công");
                                }
                                return [3 /*break*/, 4];
                            case 3:
                                error_8 = _a.sent();
                                console.error("Error registering user:", error_8);
                                alert("Đăng ký thất bại, vui lòng thử lại");
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); }, { once: true });
                return [3 /*break*/, 4];
            case 3:
                error_7 = _a.sent();
                console.error("Error fetching users:", error_7);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var handleSubmitLogin = function () {
    var emailOrUserName = document.getElementById("email-login");
    var password = document.getElementById("password-login");
    var formLogin = document.getElementById("form-login");
    var listUsers = [];
    fetch("".concat(baseUrl, "/users"))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        listUsers = data;
    });
    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();
        var formData = {
            emailOrUserName: emailOrUserName.value.trim(),
            password: password.value.trim(),
        };
        var isUser = listUsers.some(function (user) {
            return (user.username === formData.emailOrUserName || user.email === formData.emailOrUserName) &&
                user.password === formData.password;
        });
        if (isUser) {
            window.location.href = "./index-login.html";
            alert("Đăng nhập thành công");
        }
        else {
            alert("Tài khoản hoặc mật khẩu không chính xác");
        }
    });
};
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
var handleShowPasswordRegister = function () {
    var inputPasswordRegister = document.getElementById("password");
    var inputConfirmPassword = document.getElementById("confirmPassword");
    var iconPasswordRegister = document.getElementById("eye-password");
    var iconConfirmPassword = document.getElementById("eye-confirm");
    handleShow(iconPasswordRegister, inputPasswordRegister);
    handleShow(iconConfirmPassword, inputConfirmPassword);
};
var handleShowPasswordLogin = function () {
    var inputPasswordLogin = document.getElementById("password-login");
    var iconPasswordLogin = document.getElementById("eye-password-login");
    handleShow(iconPasswordLogin, inputPasswordLogin);
};
// 4. FAQS page -> Chưa Xong
var handleShowFaqs = function () {
    var buttonFaqs = document.querySelectorAll(".faqs-button");
    var descFaqs = document.querySelectorAll(".faqs-desc");
    // Mặc định ẩn tất cả các desciption
    descFaqs.forEach(function (desc) { return desc.classList.add("hidden"); });
    buttonFaqs.forEach(function (button) {
        button.addEventListener("click", function () {
            var btnID = button.getAttribute("data-btn-id");
            var currentDesc = document.querySelector("[data-desc-id=\"".concat(btnID, "\"]"));
            descFaqs.forEach(function (desc) {
                if (desc !== currentDesc) {
                    desc.classList.add("hidden");
                }
            });
            currentDesc === null || currentDesc === void 0 ? void 0 : currentDesc.classList.toggle("hidden");
            console.log(btnID);
            console.log(currentDesc);
        });
    });
};
// => Đưa các sự kiện vào 1 function rồi gọi 1 thể
var app = function () {
    handleButtonRegister();
    handleShowPasswordRegister();
    handleSubmitPageRegister();
    handleButtonRegister();
    handleShowPasswordLogin();
};
// => Get API đưa ra ngoài để ưu tiên gọi HTML trước mới gọi đến các sự kiện
// Page Home
getCategoriesPageHome();
getCoursesPageHome();
getFeedbacksHome();
getArticlesHome();
// Page Blog
getArticlesPageBlog();
// Page Courses
getCoursesPageCourses();
// Page FAQs
getFaqsListPageFaqs();
app();

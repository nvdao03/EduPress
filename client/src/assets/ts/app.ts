/*
  1. Load data header, footer
*/
document.addEventListener("DOMContentLoaded", () => {
  const header: HTMLElement | any = document.getElementById("header");
  const footer: HTMLElement | any = document.getElementById("footer");

  fetch("/client/public/template/header.html")
    .then((response) => response.text())
    .then((data) => {
      header.innerHTML = data;
    })
    .catch((error) => {
      console.log(error.message);
    });

  fetch("/client/public/template/footer.html")
    .then((response) => response.text())
    .then((data) => {
      footer.innerHTML = data;
    })
    .catch((error) => {
      console.log(error.message);
    });
});

const handleShow = (icon: HTMLDivElement, item: HTMLInputElement) => {
  icon.addEventListener("click", () => {
    if (item.type === "password") {
      item.type = "text";
    } else {
      item.type = "password";
    }
  });
};

/*
  2. Page Register
*/
const handleButtonRegister = () => {
  const btnRegister = document.getElementById("btn-register") as HTMLButtonElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const userName = document.getElementById("username") as HTMLInputElement;
  const password = document.getElementById("password") as HTMLInputElement;
  const confirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;

  // Sự kiện "input" theo dõi giá trị thay đổi của ô input. Cho các item vào mảng và dùng for để lặp qa từng giá trị để kiểm tra
  [email, userName, password, confirmPassword].forEach((input) => {
    input.addEventListener("input", () => {
      if (
        email.value.trim() !== "" &&
        userName.value.trim() !== "" &&
        password.value.trim() !== "" &&
        confirmPassword.value.trim() !== "" &&
        password.value === confirmPassword.value
      ) {
        btnRegister.classList.remove("opacity-50");
        btnRegister.disabled = false;
      } else {
        btnRegister.classList.add("opacity-50");
      }
    });
  });

  btnRegister.onclick = () => {
    window.location.href = "./login.html";
  };
};

const handleShowPasswordRegister = () => {
  const inputPasswordRegister = document.getElementById("password") as HTMLInputElement;
  const inputConfirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;

  const iconPasswordRegister = document.getElementById("eye-password") as HTMLDivElement;
  const iconConfirmPassword = document.getElementById("eye-confirm") as HTMLDivElement;

  handleShow(iconPasswordRegister, inputPasswordRegister);
  handleShow(iconConfirmPassword, inputConfirmPassword);
};

/*
  3. Page Login
*/
const handleShowPasswordLogin = () => {
  const inputPasswordLogin = document.getElementById("password-login") as HTMLInputElement;
  const iconPasswordLogin = document.getElementById("eye-password-login") as HTMLDivElement;
  handleShow(iconPasswordLogin, inputPasswordLogin);
};

const app = () => {
  // Current page - lấy ra đường dẫn. Chỉ thực thi các hàm tương ứng với trang hiện tại
  const currentPage = window.location.pathname;

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

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

const handleShowPassword = () => {
  const password = document.getElementById("password") as HTMLInputElement;
  const confirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;

  const eyeIconPassWord = document.getElementById("eye-password") as HTMLDivElement;
  const eyeIconConfirm = document.getElementById("eye-confirm") as HTMLDivElement;

  eyeIconPassWord.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  });

  eyeIconConfirm.addEventListener("click", () => {
    if (confirmPassword.type === "password") {
      confirmPassword.type = "text";
    } else {
      confirmPassword.type = "password";
    }
  });
};

const app = () => {
  handleButtonRegister();
  handleShowPassword();
};

app();

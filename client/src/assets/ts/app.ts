// Khai báo interface
interface CategorieHome {
  id: number;
  image: string;
  title: string;
  description: string;
}
interface CoursesHome {
  id: number;
  image: string;
  title: string;
  heading: string;
  week: string;
  student: string;
  level: string;
  lesson: string;
  price: string;
  discount: string;
  weekIcon: string;
  studentIcon: string;
}

interface Feedback {
  id: number;
  desc: string;
  name: string;
  type: string;
}

interface Articles {
  id: number;
  image: string;
  title: string;
  time: string;
  desc: string;
}

interface Faqs {
  id: string;
  heading: string;
  description: string;
  icon: string;
}

interface User {
  id: number;
  username: string;
  password: string;
  email?: string;
  confirmPassword?: string;
}

// => Load data header, footer
document.addEventListener("DOMContentLoaded", () => {
  const header: HTMLElement | any = document.getElementById("header");
  const headerLogin: HTMLElement | any = document.getElementById("header-login");
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

  fetch("/client/public/template/header-login.html")
    .then((response) => response.text())
    .then((data) => {
      headerLogin.innerHTML = data;
    })
    .catch((error) => {
      console.log(error.message);
    });

  handleSubmitLogin();
  handleButtonRegister();
});

// => Start gọi API
const baseUrl = "http://localhost:4000";

const getCategoriesPageHome = async () => {
  try {
    const response = await fetch(`${baseUrl}/categories`);
    const data: CategorieHome[] = await response.json();
    const categoriesContainer = document.getElementById("home-categories") as HTMLElement;

    if (!categoriesContainer) return;

    categoriesContainer.innerHTML = "";

    data.map((category) => {
      const divCategory = document.createElement("div");
      divCategory.className =
        "rounded-[20px] group hover:cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-[16px] border border-solid border-[#EAEAEA] px-[30px] py-[57px] text-center hover:rounded-[20px] hover:border-[1px] hover:border-[solid] hover:border-[#EAEAEA] hover:bg-[#FFF]";
      divCategory.innerHTML = `
        <img src=${`http://localhost:4000/${category.image}`} alt="" class="mx-auto" />
        <h3 class="mt-[24px] text-[18px] font-semibold leading-[24px] text-[#000] group-hover:text-[#FF782D]">${category.title}</h3>
        <p class="no- mt-[12px] font-normal text-[#555555]">${category.description}</p>
      `;
      categoriesContainer.appendChild(divCategory);
    });
  } catch (error) {
    console.error("Error fetching categories");
  }
};

const getCoursesPageHome = async () => {
  try {
    const response = await fetch(`${baseUrl}/courses`);
    const data: CoursesHome[] = await response.json();
    const coursesContainer = document.getElementById("home-courses") as HTMLElement;
    let tick: boolean = false;

    if (!coursesContainer) return;

    coursesContainer.innerHTML = "";

    data.map((course) => {
      const divCourse = document.createElement("div");
      if (course.discount !== "Free") {
        tick = true;
      } else {
        tick = false;
      }
      divCourse.className =
        "relative cursor-pointer rounded-[20px] border-[1px] border-solid border-[#EAEAEA] bg-[#FFF] transition-all duration-300 ease-in-out hover:-translate-y-[16px] hover:[box-shadow:0px_4px_20px_0px_rgba(0,_0,_0,_0.10)]";
      divCourse.innerHTML = `
        <div>
                <span
                  class="absolute left-5 top-5 flex items-center justify-center rounded-[8px] bg-black px-3 py-2 font-medium text-[#fff]"
                >
                  Photography
                </span>
                <img
                  src=${`http://localhost:4000/${course.image}`}
                  class="rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px]"
                />
              </div>
              <div class="p-[20px]">
                <p class="font-normal leading-[24px] text-black"><span class="text-[#555555] font-normal text-sm">by</span> ${course.title}</p>
                <h3 class="mt-[12px] text-[18px] font-semibold leading-[24px]">
                  ${course.title}
                </h3>
                <div class="mt-4 flex items-center gap-x-[24px] border-b border-solid border-[#EAEAEA] pb-4">
                  <div class="flex items-center gap-x-2">
                    <img src=${`http://localhost:4000/${course.weekIcon}`} alt="" />
                    <span class="font-normal leading-[24px] text-[#555555]">${course.week}</span>
                  </div>
                  <div class="flex items-center gap-x-2">
                    <img src=${`http://localhost:4000/${course.studentIcon}`} alt="" />
                    <span class="font-normal leading-[24px] text-[#555555]">${course.student}</span>
                  </div>
                </div>
                <div class="flex items-center justify-between pt-4">
                  <div class="flex items-center gap-x-2">
                    <span class="font-normal leading-[27px] text-[#9D9D9D] line-through">${course.price}</span>
                    <span class="font-medium leading-[27px] text-[#55BE24] ${tick && "text-[#F51A1A]"}">${course.discount}</span>
                  </div>
                  <a
                    href="#!"
                    class="font-medium leading-[27px] transition-all duration-300 ease-in-out hover:underline"
                    >View More</a
                  >
                </div>
              </div>
      `;
      coursesContainer.appendChild(divCourse);
    });
  } catch (error) {
    console.error("Error fetching courses");
  }
};

const getFeedbacksHome = async () => {
  try {
    const reponse = await fetch(`${baseUrl}/feedbacks`);
    const data: Feedback[] = await reponse.json();
    const feedbackContainer = document.getElementById("feedback-container") as HTMLElement;

    if (!feedbackContainer) return;

    feedbackContainer.innerHTML = "";

    data.map((feedback: Feedback) => {
      const divFeeback = document.createElement("div");
      divFeeback.className = "rounded-[20px] border-[1px] border-solid border-[#EAEAEA] bg-[#FFF] px-[30px] py-[40px]";
      divFeeback.innerHTML = `
        <img src="./assets/icons/feedback-arrow.svg" />
        <p class="mt-[20px] font-normal leading-[27px]">${feedback.desc}</p>
        <h3 class="mt-[30px] text-[20px] font-semibold leading-[24px]">${feedback.name}</h3>
        <p class="mt-[8px] font-normal leading-[27px] text-[#555555]">${feedback.type}</p>
      `;
      feedbackContainer.appendChild(divFeeback);
    });
  } catch (error) {
    console.error("Error fetchinning feedback");
  }
};

const getArticlesHome = async () => {
  try {
    const reponse = await fetch(`${baseUrl}/articles`);
    const data: Articles[] = await reponse.json();
    const articleContainer = document.getElementById("home-articles") as HTMLElement;

    if (!articleContainer) return;

    articleContainer.innerHTML = "";

    data.slice(0, 3).map((article: Articles) => {
      const divArticle = document.createElement("a");
      divArticle.href = "http://127.0.0.1:5500/client/public/blog-detail.html";
      divArticle.className =
        "relative cursor-pointer rounded-[20px] border-[1px] border-solid border-[#EAEAEA] bg-[#FFF] transition-all duration-300 ease-in-out hover:-translate-y-[16px] hover:[box-shadow:0px_4px_20px_0px_rgba(0,_0,_0,_0.10)]";
      divArticle.innerHTML = `
        <div>
                <img
                  src=${`http://localhost:4000/${article.image}`}
                  class="rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px]"
                />
              </div>
              <div class="p-[20px]">
                <h3 class="mt-[12px] text-[18px] font-semibold leading-[24px]">
                ${article.title}
                </h3>
                <div class="mt-4 flex items-center gap-x-[24px] pb-4">
                  <div class="flex items-center gap-x-2">
                    <img src="./assets/icons/calenda.svg" />
                    <span class="font-normal leading-[24px] text-[#555555]">${article.time}</span>
                  </div>
                </div>
                <p class="text-[#555555] leading-[27px]">${article.desc}</p>
              </div>
      `;
      articleContainer.appendChild(divArticle);
    });
  } catch (error) {
    console.error("Error fetching articles");
  }
};

const getCoursesPageCourses = async () => {
  try {
    const response = await fetch(`${baseUrl}/courses`);
    const data: CoursesHome[] = await response.json();
    const coursesContainer = document.getElementById("courses-courses") as HTMLElement;
    let tick: boolean = false;

    if (!coursesContainer) return;

    coursesContainer.innerHTML = "";

    data.map((course) => {
      const divCourse = document.createElement("div");
      if (course.discount !== "Free") {
        tick = true;
      } else {
        tick = false;
      }
      divCourse.className =
        "relative cursor-pointer rounded-[20px] border-[1px] border-solid border-[#EAEAEA] bg-[#FFF] transition-all duration-300 ease-in-out hover:-translate-y-[16px] hover:[box-shadow:0px_4px_20px_0px_rgba(0,_0,_0,_0.10)]";
      divCourse.innerHTML = `
        <div>
                <span
                  class="absolute left-5 top-5 flex items-center justify-center rounded-[8px] bg-black px-3 py-2 font-medium text-[#fff]"
                >
                  Photography
                </span>
                <img
                  src=${`http://localhost:4000/${course.image}`}
                  class="rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px]"
                />
              </div>
              <div class="p-[20px]">
                <p class="font-normal leading-[24px] text-black"><span class="text-[#555555] font-normal text-sm">by</span> ${course.title}</p>
                <h3 class="mt-[12px] text-[18px] font-semibold leading-[24px]">
                  ${course.title}
                </h3>
                <div class="mt-4 flex items-center gap-x-[24px] border-b border-solid border-[#EAEAEA] pb-4">
                  <div class="flex items-center gap-x-2">
                    <img src=${`http://localhost:4000/${course.weekIcon}`} alt="" />
                    <span class="font-normal leading-[24px] text-[#555555]">${course.week}</span>
                  </div>
                  <div class="flex items-center gap-x-2">
                    <img src=${`http://localhost:4000/${course.studentIcon}`} alt="" />
                    <span class="font-normal leading-[24px] text-[#555555]">${course.student}</span>
                  </div>
                </div>
                <div class="flex items-center justify-between pt-4">
                  <div class="flex items-center gap-x-2">
                    <span class="font-normal leading-[27px] text-[#9D9D9D] line-through">${course.price}</span>
                    <span class="font-medium leading-[27px] text-[#55BE24] ${tick && "text-[#F51A1A]"}">${course.discount}</span>
                  </div>
                  <a
                    href="#!"
                    class="font-medium leading-[27px] transition-all duration-300 ease-in-out hover:underline"
                    >View More</a
                  >
                </div>
              </div>
      `;
      coursesContainer.appendChild(divCourse);
    });
  } catch (error) {
    console.error("Error fetching courses");
  }
};

const getArticlesPageBlog = async () => {
  try {
    const reponse = await fetch(`${baseUrl}/articles`);
    const data: Articles[] = await reponse.json();
    const articleContainer = document.getElementById("blog-articles") as HTMLElement;

    if (!articleContainer) return;

    articleContainer.innerHTML = "";

    data.map((article: Articles) => {
      const divArticle = document.createElement("a");
      divArticle.href = "http://127.0.0.1:5500/client/public/blog-detail.html";
      divArticle.className =
        "relative cursor-pointer rounded-[20px] border-[1px] border-solid border-[#EAEAEA] bg-[#FFF] transition-all duration-300 ease-in-out hover:-translate-y-[16px] hover:[box-shadow:0px_4px_20px_0px_rgba(0,_0,_0,_0.10)]";
      divArticle.innerHTML = `
        <div>
                <img
                  src=${`http://localhost:4000/${article.image}`}
                  class="rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px]"
                />
              </div>
              <div class="p-[20px]">
                <h3 class="mt-[12px] text-[18px] font-semibold leading-[24px]">
                ${article.title}
                </h3>
                <div class="mt-4 flex items-center gap-x-[24px] pb-4">
                  <div class="flex items-center gap-x-2">
                    <img src="./assets/icons/calenda.svg" />
                    <span class="font-normal leading-[24px] text-[#555555]">${article.time}</span>
                  </div>
                </div>
                <p class="text-[#555555] leading-[27px]">${article.desc}</p>
              </div>
      `;
      articleContainer.appendChild(divArticle);
    });
  } catch (error) {
    console.error("Error fetching articles");
  }
};

const getFaqsListPageFaqs = async () => {
  const response = await fetch(`${baseUrl}/faqs`);
  const data: Faqs[] = await response.json();
  const faqsContainer = document.getElementById("faqs-list");

  if (!faqsContainer) return;

  data.map((item) => {
    const divFaqs = document.createElement("div");
    divFaqs.className = "rounded-[8px] h-fit border border-solid border-[#F5F5F5] bg-[#F5F5F5]";
    divFaqs.innerHTML = `
      <div>
        <button
          data-btn-id="${item.id}"
          type="button"
          class="faqs-button flex h-full w-full items-center justify-between px-[30px] py-[20px]"
        >
          <h2 class="faqs-heading font-semibold leading-[1.5] text-black">${item.heading}</h2>
          <img src=${`http://localhost:4000${item.icon}`} />
        </button>
        <div data-desc-id="${item.id}" class="faqs-desc px-[30px] pb-[20px] font-normal text-[#555]">
          <p class="leading-[2.0]">
            ${item.description}
          </p>
        </div>
      </div>
    `;
    faqsContainer.appendChild(divFaqs);
  });

  handleShowFaqs();
};

// => Xử lý sự các sự kiện
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
};

const handleSubmitPageRegister = async () => {
  try {
    const email = document.getElementById("email") as HTMLInputElement;
    const username = document.getElementById("username") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const confirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;
    const formRegister = document.getElementById("form-register") as HTMLFormElement;
    const linkRegister = document.getElementById("link-register") as HTMLElement;

    let listUsers: User[] = [];
    const response = await fetch(`${baseUrl}/users`);
    const data: User[] = await response.json();

    if (data) listUsers = data;

    formRegister.addEventListener(
      "submit",
      async (event) => {
        event.preventDefault();

        const formData = {
          email: email.value.trim(),
          username: username.value.trim(),
          password: password.value,
          confirmPassword: confirmPassword.value,
        };

        const isUser = listUsers.some((user) => user.username === formData.username);

        if (isUser) {
          alert("Tên tài khoản đã có người sử dụng");
          return;
        }

        try {
          const registerResponse = await fetch(`${baseUrl}/users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
              username: formData.username,
              password: formData.password,
            }),
          });

          if (registerResponse.ok) {
            window.location.href = "./login.html";
            alert("Đăng ký tài khoản thành công");
          }
        } catch (error) {
          console.error("Error registering user:", error);
          alert("Đăng ký thất bại, vui lòng thử lại");
        }
      },
      { once: true },
    );
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const handleSubmitLogin = () => {
  const emailOrUserName = document.getElementById("email-login") as HTMLInputElement;
  const password = document.getElementById("password-login") as HTMLInputElement;
  const formLogin = document.getElementById("form-login") as HTMLFormElement;

  let listUsers: User[] = [];

  fetch(`${baseUrl}/users`)
    .then((response) => response.json())
    .then((data) => {
      listUsers = data;
    });

  formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
      emailOrUserName: emailOrUserName.value.trim(),
      password: password.value.trim(),
    };

    const isUser = listUsers.some(
      (user) =>
        (user.username === formData.emailOrUserName || user.email === formData.emailOrUserName) &&
        user.password === formData.password,
    );

    if (isUser) {
      window.location.href = "./index-login.html";
      alert("Đăng nhập thành công");
    } else {
      alert("Tài khoản hoặc mật khẩu không chính xác");
    }
  });
};

const handleShow = (icon: HTMLDivElement, item: HTMLInputElement) => {
  icon.addEventListener("click", () => {
    if (item.type === "password") {
      item.type = "text";
    } else {
      item.type = "password";
    }
  });
};

const handleShowPasswordRegister = () => {
  const inputPasswordRegister = document.getElementById("password") as HTMLInputElement;
  const inputConfirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;

  const iconPasswordRegister = document.getElementById("eye-password") as HTMLDivElement;
  const iconConfirmPassword = document.getElementById("eye-confirm") as HTMLDivElement;

  handleShow(iconPasswordRegister, inputPasswordRegister);
  handleShow(iconConfirmPassword, inputConfirmPassword);
};

const handleShowPasswordLogin = () => {
  const inputPasswordLogin = document.getElementById("password-login") as HTMLInputElement;
  const iconPasswordLogin = document.getElementById("eye-password-login") as HTMLDivElement;
  handleShow(iconPasswordLogin, inputPasswordLogin);
};

const handleShowFaqs = () => {
  const buttonFaqs = document.querySelectorAll(".faqs-button");
  const descFaqs = document.querySelectorAll(".faqs-desc");

  // Mặc định ẩn tất cả các desciption
  descFaqs.forEach((desc) => desc.classList.add("hidden"));

  buttonFaqs.forEach((button) => {
    button.addEventListener("click", () => {
      const btnID = button.getAttribute("data-btn-id");
      const currentDesc = document.querySelector(`[data-desc-id="${btnID}"]`);

      descFaqs.forEach((desc) => {
        if (desc !== currentDesc) {
          desc.classList.add("hidden");
        }
      });

      currentDesc?.classList.toggle("hidden");

      console.log(btnID);
      console.log(currentDesc);
    });
  });
};

// => Đưa các sự kiện vào 1 function rồi gọi 1 thể
const app = () => {
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

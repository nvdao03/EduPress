/*
  1. Load data header, footer
*/
document.addEventListener('DOMContentLoaded', () => {
  const header: HTMLElement | any = document.getElementById('header');
  const footer: HTMLElement | any = document.getElementById('footer');

  fetch('/client/public/template/header.html')
    .then((response) => response.text())
    .then((data) => {
      header.innerHTML = data;
    })
    .catch((error) => {
      console.log(error.message);
      
    })

  fetch('/client/public/template/footer.html')
    .then((response) => response.text())
    .then((data) => {
      footer.innerHTML = data;
    })
    .catch((error) => {
      console.log(error.message);
      
  })
})
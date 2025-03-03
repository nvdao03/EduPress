/*
  1. Load data header, footer
*/
document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('header');
    var footer = document.getElementById('footer');
    fetch('/client/public/template/header.html')
        .then(function (response) { return response.text(); })
        .then(function (data) {
        header.innerHTML = data;
    })
        .catch(function (error) {
        console.log(error.message);
    });
    fetch('/client/public/template/footer.html')
        .then(function (response) { return response.text(); })
        .then(function (data) {
        footer.innerHTML = data;
    })
        .catch(function (error) {
        console.log(error.message);
    });
});

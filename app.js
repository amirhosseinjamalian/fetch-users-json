const container = document.querySelector(".container");
const loading = document.querySelector(".loading");

setTimeout(() => {
  fetch("./Users/users.json")
    .then((response) => response.json())
    .then((data) => {
      container.textContent = "";
      data.forEach((item) => {
        let user = document.createElement("div");
        user.classList.add("container_users");
        user.innerHTML = `
        <h3>یوزر ${item.id}</h3>
        <p><b>نام: </b>${item.name}</p>
        <p><b>ایمیل: </b>${item.email}</p>
        <p><b>تلفن: </b>${item.phone}</p>
    `;

        container.appendChild(user);
      });
    })
    .catch(() => {
      container.innerHTML = `<div class="container_users"><p><b>اتصال به اینترنت با خطا مواجه شد</b></p></div>`;
    });
}, 1000);

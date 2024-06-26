const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Celé jméno: ${fullName.value}<br> Email: ${email.value}<br> Telefon: ${phone.value}<br> Zpráva: ${mess.value}`;

  Email.send({
    SecureToken: "b043c137-92e1-4558-aae8-33420693cf37",
    To: "domekulabe@gmail.com",
    From: "domekulabe@gmail.com",
    Subject: "Z formuláře na webu",
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Dobrá práce!",
        text: "Zpráva byla úspěšně odeslána!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function sendCopyEmail() {
  var checkbox = document.getElementById("box");
  var emailField = document.getElementById("email");
  var email = emailField.value;

  if (checkbox.checked) {
    const bodyMessage = `Celé jméno: ${fullName.value}<br> Email: ${email}<br> Telefon: ${phone.value}<br> Zpráva: ${mess.value}`;

    Email.send({
      SecureToken: "b043c137-92e1-4558-aae8-33420693cf37",
      To: email,
      From: "domekulabe@gmail.com",
      Subject: "Kopie z formuláře na webu",
      Body: bodyMessage,
    }).then((message) => {
      if (message == "OK") {
      }
    });
  } else {
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Zadejte platnou e-mailovou adresu";
    } else {
      errorTxtEmail.innerText = "*E-mailová adresa nemůže být prázdná";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !mess.classList.contains("error")
  ) {
    sendCopyEmail();

    sendEmail();

    form.reset();
    return false;
  }
});

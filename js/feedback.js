var button = document.querySelector(".contacts-button");
var modal = document.querySelector(".modal-feedback");
var wrapper = document.querySelector(".modal-feedback-wrapper");
var form = modal.querySelector(".feedback-form");
var close = document.querySelector(".close");
var login = modal.querySelector("[name = name]");
var mail = modal.querySelector("[name = url]");
var text = modal.querySelector("[name = textarea-text]");
var storageLogin = localStorage.getItem("user-name");
var storageMail = localStorage.getItem("user-email");
var isStorageSupport = true;
var storage = "";

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  wrapper.classList.add("modal-show-wrapper");
  if (storageLogin || storageMail) {
    login.value = storageLogin;
    mail.value = storageMail;
    text.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  wrapper.classList.remove("modal-show-wrapper");
  modal.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !mail.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    localStorage.setItem("user-name", login.value);
    localStorage.setItem("user-email", mail.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
    }
    if (wrapper.classList.contains("modal-show-wrapper")) {
      wrapper.classList.remove("modal-show-wrapper");
    }
    if (modal.classList.contains("modal-error")) {
      modal.classList.remove("modal-error");
    }
  }
});

import Pristine from "../vendor/Pristine/src/pristine.js";

const form = document.querySelector(".img-upload__form");
const imgInput = document.querySelector(".img-upload__input");
const uploadOverlay = document.querySelector(".img-upload__overlay");
const cancelBtn = document.querySelector(".img-upload__cancel");

const formFields = form.querySelectorAll("input,textarea");
for (const field of Array.from(formFields)) {
  field.addEventListener("keyup", (e) => {
    if (field === document.activeElement) {
      e.stopPropagation();
    }
  });
}
document.body.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    close();
  }
});

const pristine = new Pristine(form);
form.addEventListener("submit", (e) => {
  if (!pristine.validate()) e.preventDefault();
});

const close = () => {
  uploadOverlay.classList.add("hidden");
  document.body.classList.remove("modal-open");
  imgInput.value = null;
};

const open = () => {
  uploadOverlay.classList.remove("hidden");
  document.body.classList.add("modal-open");
};

cancelBtn.addEventListener("click", close);

imgInput.addEventListener("change", (e) => {
  console.log("change");
  if (imgInput.files[0]) {
    open();
  } else {
    close();
  }
});

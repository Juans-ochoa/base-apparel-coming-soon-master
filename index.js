const d = document;

function validateEmail() {
  const $btn = d.getElementById("btn-email"),
    $inputEmail = d.getElementById("email"),
    $span = d.createElement("span"),
    $img = d.createElement("img");

  $img.src = "/images/icon-error.svg";
  $img.alt = "error-icon";
  $img.classList.add("img__error", "none");
  $img.id = $inputEmail.name;

  $span.classList.add("message__error", "none");
  $span.id = $inputEmail.name;

  $inputEmail.insertAdjacentElement("afterend", $img);
  $inputEmail.insertAdjacentElement("afterend", $span);

  d.addEventListener("click", (e) => {
    if (e.target === $btn) {
      const $spanId = d.querySelector(`span#${$inputEmail.name}`),
        $imgId = d.querySelector(`span#${$inputEmail.name}`),
        expreg = new RegExp($inputEmail.pattern);

      if ($inputEmail.value === "") {
        $inputEmail.classList.add("input__error");
        $imgId.classList.remove("none");
        $spanId.classList.remove("none");
        $span.textContent = "Email can not be empty!";
      }

      if ($inputEmail.value !== "" && !expreg.exec($inputEmail.value)) {
        $inputEmail.classList.add("input__error");
        $imgId.classList.remove("none");
        $spanId.classList.remove("none");
        $spanId.textContent = "Please provide a valid email !";
      }

      if ($inputEmail.value !== "" && expreg.exec($inputEmail.value)) {
        $imgId.classList.add("none");
        $spanId.classList.add("none");
        $inputEmail.classList.remove("input__error");
      }
    }
  });
}

d.addEventListener("DOMContentLoaded", (e) => {
  validateEmail();
});

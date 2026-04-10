const form = document.querySelector("#contact-form");
const requiredFields = ["name", "email", "subject"];

if (form) {
  form.addEventListener("submit", (event) => {
    let hasEmptyField = false;

    requiredFields.forEach((fieldId) => {
      const field = document.querySelector(`#${fieldId}`);

      if (!field) {
        return;
      }

      const isEmpty = field.value.trim() === "";
      field.classList.toggle("field-error", isEmpty);

      if (isEmpty) {
        hasEmptyField = true;
      }
    });

    if (hasEmptyField) {
      event.preventDefault();
    }
  });
}

document.getElementById("eventForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const age = document.getElementById("age");
  const gender = document.getElementById("gender"); 
  const eventType = document.getElementById("eventType");

  clearErrors();
  
  // Name validation
  if (!/^[A-Za-z\s]+$/.test(name.value.trim())) {
    showError(name, "Name must contain only letters and spaces.");
    valid = false;
  }

  // Email validation
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value.trim())) {
    showError(email, "Invalid email format.");
    valid = false;
  }

  // Phone validation
  if (!/^[6-9]\d{9}$/.test(phone.value.trim())) {
    showError(phone, "Invalid Indian phone number.");
    valid = false;
  }

  // Age validation
  if (+age.value < 18 || age.value === "") {
    showError(age, "You must be 18 or older.");
    valid = false;
  }

  // Gender validation
  if (!gender.value) {
    showError(gender, "Please select a gender.");
    valid = false;
  }

  // Event type validation
  if (!eventType.value) {
    showError(eventType, "Please select an event type.");
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    this.reset();
  }
});

function showError(element, message) {
  element.classList.add("error-field");
  const errorEl = element.nextElementSibling;
  if (errorEl && errorEl.classList.contains("error")) {
    errorEl.textContent = message;
    errorEl.style.display = "block";
  }
}

function clearErrors() {
  document.querySelectorAll(".error-field").forEach(el => el.classList.remove("error-field"));
  document.querySelectorAll("small.error").forEach(el => {
    el.textContent = "";
    el.style.display = "none";
  });
}

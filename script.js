document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const message = document.getElementById("formMessage");
    message.textContent = "Thank you for your message!";
    this.reset();
  });
  
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("your_service_id", "your_template_id", this)
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((err) => {
      alert("Failed to send message.");
      console.error(err);
    });
});

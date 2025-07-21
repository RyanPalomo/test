document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_3s0z07c", "template_6lfy60f", this)
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((err) => {
      alert("Failed to send message.");
      console.error(err);
    });
});

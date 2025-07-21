// script.js
import emailjs from '@emailjs/browser';

emailjs.init('RdPBBrS5KnMImRkiW'); // Replace with your actual public key

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const status = document.getElementById("form-status");

  emailjs.sendForm("service_3s0z07c", "template_6lfy60f", form)
    .then(() => {
      status.innerText = "Message sent successfully!";
      status.style.color = "green";
      form.reset();
    })
    .catch((err) => {
      console.error("Failed to send message:", err);
      status.innerText = "Failed to send message. Please try again later.";
      status.style.color = "red";
    });
});

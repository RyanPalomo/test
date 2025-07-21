// script.js
import emailjs from 'https://cdn.emailjs.com/dist/email.min.mjs';

// ✅ Replace with your actual public key
emailjs.init('RdPBBrS5KnMImRkiW');

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_3s0z07c', 'template_6lfy60f', form)
    .then(() => {
      status.textContent = '✅ Message sent successfully!';
      status.style.color = 'green';
      form.reset();
    })
    .catch((error) => {
      console.error('Email send failed:', error);
      status.textContent = '❌ Failed to send message.';
      status.style.color = 'red';
    });
});

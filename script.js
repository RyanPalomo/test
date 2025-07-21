const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = "Sending...";
  status.style.color = "orange";

  const formData = {
    name: form.elements["from_name"].value,
    email: form.elements["reply_to"].value,
    message: form.elements["message"].value
  };

  try {
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      status.textContent = "Message sent!";
      status.style.color = "green";
      form.reset();
    } else {
      status.textContent = "Failed to send.";
      status.style.color = "red";
    }
  } catch (err) {
    status.textContent = "Error occurred.";
    status.style.color = "red";
    console.error("Fetch error:", err);
  }
});

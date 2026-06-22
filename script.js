document.querySelectorAll(".site-nav a").forEach(link => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");
    const messageInput = form.querySelector("#message");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name) {
      alert("Please enter your name.");
      nameInput.focus();
      return;
    }

    if (!email) {
      alert("Please enter your email address.");
      emailInput.focus();
      return;
    }

    if (!message) {
      alert("Please enter your message.");
      messageInput.focus();
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address (example: name@example.com).");
      emailInput.focus();
      return;
    }

    alert("Your message has been sent successfully!");
    form.reset();
  });
}
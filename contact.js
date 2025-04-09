window.addEventListener("load", function () {
  const contactForm = document.getElementById("contactForm");
  const modalElement = document.getElementById("submittedModal");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const submittedModal = new bootstrap.Modal(modalElement);
      submittedModal.show();
      contactForm.reset();
      // ⏱️ Auto-close modal after 5 seconds
      setTimeout(() => {
        submittedModal.hide();
      }, 5000);
    });
  }
});
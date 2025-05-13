/*jslint browser */
/*global bootstrap, window, document, setTimeout */

window.addEventListener("load", function () {
  "use strict";

  var contactForm;
  var modalElement;
  var submittedModal;

  contactForm = document.getElementById("contactForm");
  modalElement = document.getElementById("submittedModal");

  if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
          e.preventDefault();

          submittedModal = new bootstrap.Modal(modalElement);
          submittedModal.show();
          contactForm.reset();

          setTimeout(function () {
              submittedModal.hide();
          }, 5000);
      });
  }
});

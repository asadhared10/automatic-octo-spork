/* ==========================================================================
   Shared Interactive JavaScript Engine
   Handles smooth scroll, interactive modals, toasts & form validation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 2. Dynamic Contact / Reservation Form Validation & Toast Notification
  const handleFormSubmission = (formId, successTitle, successMsg) => {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (form.checkValidity()) {
        showToast(successTitle, successMsg);
        form.reset();
        form.classList.remove('was-validated');
      } else {
        form.classList.add('was-validated');
      }
    });
  };

  // Toast Generator
  const showToast = (title, message) => {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      toastContainer.style.zIndex = '9999';
      document.body.appendChild(toastContainer);
    }

    const toastId = 'toast-' + Date.now();
    const toastHTML = `
      <div id="${toastId}" class="toast align-items-center text-white bg-dark border-gold" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">
            <h6 class="mb-1 text-warning"><i class="bi bi-check-circle-fill me-2"></i>${title}</h6>
            <p class="mb-0 small text-light">${message}</p>
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;

    toastContainer.insertAdjacentHTML('beforeend', toastHTML);
    const toastEl = document.getElementById(toastId);
    const bsToast = new bootstrap.Toast(toastEl, { delay: 4000 });
    bsToast.show();

    toastEl.addEventListener('hidden.bs.toast', () => {
      toastEl.remove();
    });
  };

  // Initialize Restaurant Form
  handleFormSubmission(
    'restaurant-contact-form',
    'Reservation Request Received!',
    'Thank you! Our concierge will confirm your table booking via email shortly.'
  );

  // Initialize Travel Agency Form
  handleFormSubmission(
    'travel-contact-form',
    'Travel Inquiry Sent!',
    'Our travel specialist will prepare a customized itinerary for your trip within 24 hours.'
  );

  // 3. Navbar background highlight on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
      } else {
        navbar.classList.remove('shadow-lg');
      }
    });
  }
});

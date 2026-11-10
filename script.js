document.addEventListener("DOMContentLoaded", () => {
  const rfForm = document.getElementById("rfForm");
  const rfReviewsGrid = document.getElementById("rfReviewsGrid");

  if (rfForm && rfReviewsGrid) {
    rfForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("rfName").value.trim();
      const rating = parseInt(document.getElementById("rfRating").value, 10);
      const comment = document.getElementById("rfComment").value.trim();

      if (!name || !comment) return;

      const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

      const reviewCard = document.createElement("article");
      reviewCard.className = "rf-tile";
      reviewCard.innerHTML = `
        <div class="rf-tile-header">
          <h4>${escapeHTML(name)}</h4>
          <span class="rf-stars">${stars}</span>
        </div>
        <p class="rf-meta">Verified Buyer • Just now</p>
        <p class="rf-comment">${escapeHTML(comment)}</p>
      `;

      rfReviewsGrid.prepend(reviewCard);
      rfForm.reset();
    });
  }

  const contactForm = document.getElementById("contactForm");
  const contactStatus = document.getElementById("contactStatus");

  if (contactForm && contactStatus) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contactFullName").value.trim();

      contactStatus.className = "contact-status success";
      contactStatus.textContent = `Thank you, ${name}! Your inquiry has been received. Our hardware team will contact you shortly.`;

      contactForm.reset();

      setTimeout(() => {
        contactStatus.style.display = "none";
      }, 6000);
    });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, (tag) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    }[tag] || tag));
  }
});
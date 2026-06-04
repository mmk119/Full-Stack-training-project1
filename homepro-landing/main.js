// FAQ — close others when one opens
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) other.removeAttribute('open');
      });
    }
  });
});

// Review carousel (simple prev/next)
const reviews = [
  {
    text: '"Roof repairs can be a real headache, but HomePro makes it easy! Their roofing team turned my leaky roof into a stockade. With their craftsmanship and the best materials, my house is now ready to weather any storm."',
    name: 'Kende Attila',
    img: 'https://i.pravatar.cc/48?img=47',
    stars: 4.5
  },
  {
    text: '"The plumber arrived within the hour and fixed everything perfectly. Transparent pricing and super professional. Will definitely use HomePro again for all our home needs!"',
    name: 'Sarah Johnson',
    img: 'https://i.pravatar.cc/48?img=5',
    stars: 5
  },
  {
    text: '"Booked an AC repair online at 9pm, technician was here by 8am next morning. Fast, clean, and the price matched the quote exactly. Absolutely recommended!"',
    name: 'Marcus Reeves',
    img: 'https://i.pravatar.cc/48?img=12',
    stars: 5
  }
];

let current = 0;

function renderReview(idx) {
  const r = reviews[idx];
  const card = document.querySelector('.review-card');
  if (!card) return;

  const fullStars = Math.floor(r.stars);
  const half = r.stars % 1 !== 0;
  let starsHtml = '★'.repeat(fullStars);
  if (half) starsHtml += '<span class="star-half">★</span>';

  card.innerHTML = `
    <p>${r.text}</p>
    <div class="review-card__author">
      <img src="${r.img}" alt="${r.name}" />
      <div>
        <strong>${r.name}</strong>
        <div class="stars">${starsHtml}</div>
      </div>
    </div>
  `;

  // Update dots
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('dot--active', i === idx);
  });
}

document.querySelector('.reviews__arrow--next')?.addEventListener('click', () => {
  current = (current + 1) % reviews.length;
  renderReview(current);
});
document.querySelector('.reviews__arrow--prev')?.addEventListener('click', () => {
  current = (current - 1 + reviews.length) % reviews.length;
  renderReview(current);
});

// Smooth navbar shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.25)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

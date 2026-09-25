// Scroll reveal: [data-reveal] elements fade in and rise 18px when they enter
// the bottom 90% of the viewport. Stagger comes from data-reveal-delay (ms).
// The hidden state is CSS-only under html.js, so no-JS visitors see everything.
declare global {
  interface Window { __revealReady?: boolean }
}

const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

for (const el of els) {
  const d = el.dataset.revealDelay;
  if (d) el.style.setProperty('--reveal-delay', `${d}ms`);
}

if (reduced || !('IntersectionObserver' in window)) {
  els.forEach((el) => el.classList.add('is-revealed'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        // Also reveal anything already scrolled past (e.g. after jumping to /#contact).
        if (e.isIntersecting || e.boundingClientRect.top < 0) {
          e.target.classList.add('is-revealed');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  );
  els.forEach((el) => io.observe(el));
}
window.__revealReady = true;

export {};

// Paste your links here once. Every button on the site updates automatically.
// Leave a link empty ("") and its buttons fall back to your Instagram.
const LINKS = {
  booking: "https://calendly.com/mindbodyvibrancy/move-it-forward-call",    // free Move It Forward Call booking link (e.g. Calendly or Cal.com)
  boldMoves: "",    // Bold Moves payment or booking link (e.g. Stripe payment link)
  guide: "",        // free guide sign-up link (e.g. your beehiiv subscribe page)
};
const FALLBACK = "https://www.instagram.com/iamtiffanis";

document.querySelectorAll("[data-link]").forEach(function (el) {
  const url = LINKS[el.getAttribute("data-link")] || FALLBACK;
  el.setAttribute("href", url);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

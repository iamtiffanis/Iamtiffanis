// Paste your links here once. Every button on the site updates automatically.
// Leave a link empty ("") and its buttons fall back to your Instagram.
const LINKS = {
  forecast: "https://tally.so/r/gbaVJ4",     // Ful-Figure Forecast intake form (Tally)
  eft: "https://youtu.be/ZEmgSBuJ4Zs",  // free EFT tapping video
  booking: "https://calendly.com/mindbodyvibrancy/move-it-forward-call",    // free Move It Forward Call booking link (e.g. Calendly or Cal.com)
  boldMoves: "https://tally.so/r/YjPbJJ",    // Bold Moves payment or booking link (e.g. Stripe payment link)
  guide: "",        // free guide sign-up link (e.g. your beehiiv subscribe page)
  dbmConsult: "https://tally.so/r/jeZrJ4",   // business consultation booking or payment link
  apply: "https://tally.so/r/OQaZbg",  // Ful-Figure Woman application (Tally)
  reiki: "https://tally.so/r/o9EZ5x",  // Reiki + Oracle Reading intake + payment (Tally)
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

console.log("Zoom script loaded!");

// Pages where zoom should be applied
const zoomPages = [
  "/index.html",
  "/members.html",
  "/guidelines.html",
  "/forms.html",
  "/workshop.html",
  "/faq.html"
];

// Apply zoom if current page matches
if (zoomPages.includes(window.location.pathname)) {
  console.log("Zoom applied to:", window.location.pathname);
  document.body.style.zoom = "75%";
} else {
  console.log("No zoom needed for:", window.location.pathname);
}

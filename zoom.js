const zoomPages = [
  "index.html",
  "members.html",
  "guidelines.html",
  "forms.html",
  "workshop.html",
  "faq.html"
];

const currentPage = window.location.pathname.split("/").pop(); // Gets just the filename

if (zoomPages.includes(currentPage)) {
  console.log("Zoom applied to:", currentPage);
  document.body.style.zoom = "75%";
} else {
  console.log("No zoom needed for:", currentPage);
}

document.addEventListener("DOMContentLoaded", function () {
  const zoomPages = [
    "index.html",
    "members.html",
    "guidelines.html",
    "forms.html",
    "workshop.html",
    "faq.html"
  ];

  const currentPage = window.location.pathname.split("/").pop() || "index.html"; // Handle root access

  console.log("Current page:", currentPage);

  if (zoomPages.includes(currentPage)) {
    console.log("Zoom applied to:", currentPage);
    document.body.style.zoom = "80%";
  } else {
    console.log("No zoom needed for:", currentPage);
  }
});

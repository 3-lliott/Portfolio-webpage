/* Highlight active navigation link */
const links = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (
    linkPage === currentPage ||
    (currentPage === "" && linkPage === "index.html")
  ) {
    link.classList.add("active");
  }
});

/* Smooth scroll to projects section */
const learnMoreBtn = document.getElementById("learnMoreBtn");

if (learnMoreBtn) {
  learnMoreBtn.addEventListener("click", () => {
    const projectsSection = document.querySelector(".projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

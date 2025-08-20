// Centralisation de la navigation et gestion thème + session

const protectedPages = ["dashboard", "quiz", "results", "profile"];

function showPage(pageId) {
  const user = JSON.parse(sessionStorage.getItem("currentUser"));
  if (protectedPages.includes(pageId) && !user) {
    showAlert("Vous devez être connecté pour accéder à cette page.", "warning");
    pageId = "login";
  }

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.add("hidden");
    page.classList.remove("active");
  });

  const page = document.getElementById(pageId);
  if (page) {
    page.classList.remove("hidden");
    setTimeout(() => page.classList.add("active"), 50);
    page.focus();
  }
}

function logout() {
  sessionStorage.removeItem("currentUser");
  showAlert("Déconnexion réussie !", "success");
  showPage("home");
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
}

function loadTheme() {
  const theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  const user = JSON.parse(sessionStorage.getItem("currentUser"));
  if (user) {
    showPage("dashboard");
  } else {
    showPage("home");
  }
});

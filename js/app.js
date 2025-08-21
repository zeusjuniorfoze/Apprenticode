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
let currentHistoryPage = 1;
const itemsPerPage = 5;

function showProfile(page = 1) {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  if (!currentUser) {
    showAlert("Vous devez être connecté pour accéder au profil.", "warning");
    return;
  }

  currentHistoryPage = page;

  // Remplir les champs du formulaire
  document.getElementById("profileName").value =
    currentUser.name || currentUser.nom || "";
  document.getElementById("profileEmail").value = currentUser.email || "";

  // Progression
  const progressionDiv = document.getElementById("progression");
  progressionDiv.innerHTML = "<h3>Progression</h3>";
  if (currentUser.progression) {
    for (const lang in currentUser.progression) {
      const prog = currentUser.progression[lang];
      progressionDiv.innerHTML += `
        <p><strong>${lang} (niveau ${prog.niveau}) :</strong> ${
        prog.score
      }% - ${prog.completed ? "Terminé ✅" : "En cours ⚠️"}</p>
      `;
    }
  } else {
    progressionDiv.innerHTML += "<p>Aucune progression enregistrée.</p>";
  }

  // Historique des QCM avec pagination
  const historyUl = document.getElementById("quizHistory");
  historyUl.innerHTML = "";

  const history =
    JSON.parse(localStorage.getItem("history_" + currentUser.id)) || [];
  if (history.length === 0) {
    historyUl.innerHTML = "<li class='list-group-item'>Aucun historique.</li>";
  } else {
    const sortedHistory = history.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    const totalPages = Math.ceil(sortedHistory.length / itemsPerPage);
    const start = (currentHistoryPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = sortedHistory.slice(start, end);

    pageItems.forEach((entry) => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = `${new Date(entry.date).toLocaleString()} - ${
        entry.language
      } - Niveau ${entry.level} - Score : ${entry.score.toFixed(2)}%`;
      historyUl.appendChild(li);
    });

    // Supprimer l'ancien div de pagination s'il existe
    const oldPagination = document.getElementById("paginationDiv");
    if (oldPagination) oldPagination.remove();

    // Pagination buttons
    const paginationDiv = document.createElement("div");
    paginationDiv.id = "paginationDiv"; // ajouter un ID pour pouvoir le supprimer
    paginationDiv.className = "d-flex justify-content-between mt-2";

    const prevBtn = document.createElement("button");
    prevBtn.className = "btn btn-sm btn-secondary";
    prevBtn.textContent = "⬅️ Précédent";
    prevBtn.disabled = currentHistoryPage === 1;
    prevBtn.onclick = () => showProfile(currentHistoryPage - 1);

    const nextBtn = document.createElement("button");
    nextBtn.className = "btn btn-sm btn-secondary";
    nextBtn.textContent = "Suivant ➡️";
    nextBtn.disabled = currentHistoryPage === totalPages;
    nextBtn.onclick = () => showProfile(currentHistoryPage + 1);

    paginationDiv.appendChild(prevBtn);
    paginationDiv.appendChild(nextBtn);
    historyUl.parentElement.appendChild(paginationDiv);
  }

  // Stats globales
  const statsDiv = document.getElementById("stats");
  const stats = JSON.parse(localStorage.getItem("stats")) || {
    games: 0,
    time: 0,
  };
  statsDiv.innerHTML = `
    <h3>Statistiques globales</h3>
    <p>Parties jouées : ${stats.games}</p>
    <p>Temps total : ${Math.floor(stats.time / 60)} min ${
    stats.time % 60
  } sec</p>
  `;

  showPage("profile");
}

function logout() {
  showAlert("Déconnexion réussie !", "success");
  showPage("home");
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark-mode") ? "dark" : "light"
  );
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
// ===============================
// Protection contre l'accès à la console
// ===============================

(function () {
  // 1️⃣ Blocage du clic droit
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  // 2️⃣ Blocage des touches pour ouvrir la console ou voir le code source
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "F12" || // F12
      (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || // Ctrl+Shift+I/J
      (e.ctrlKey && e.key === "U") // Ctrl+U
    ) {
      e.preventDefault();
      alert("❌ L'accès à la console est désactivé !");
    }
  });

  // 3️⃣ Message dissuasif dans la console
  console.log(
    "%c⚠️ Attention ! Ne copiez/collez pas de code ici si vous ne savez pas ce que vous faites.",
    "color: red; font-size: 16px; font-weight: bold;"
  );

  // 4️⃣ Détection simple de l'ouverture de la console
  let devtoolsOpen = false;
  const threshold = 160; // seuil à ajuster selon écran
  setInterval(() => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;

    if (widthThreshold || heightThreshold) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        alert("❌ La console est ouverte ! L’accès est restreint.");
      }
    } else {
      devtoolsOpen = false;
    }
  }, 1000);
})();

// Mélange un tableau (Fisher-Yates)
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Gestion utilisateurs
function updateUser(updatedUser) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const index = users.findIndex((u) => u.id === updatedUser.id);
  if (index !== -1) users[index] = updatedUser;
  localStorage.setItem("users", JSON.stringify(users));
  sessionStorage.setItem("currentUser", JSON.stringify(updatedUser));
}

function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem("currentUser"));
}

// Progression utilisateur
function getUserProgression() {
  const user = getCurrentUser();
  return user ? user.progression || {} : {};
}

// Historique QCM
function getUserHistory() {
  const user = getCurrentUser();
  return user ? JSON.parse(localStorage.getItem("history_" + user.id)) || [] : [];
}

// Stats utilisateur
function getUserStats() {
  const progression = getUserProgression();
  const totalLanguages = Object.keys(progression).length;
  const completedLanguages = Object.values(progression).filter((p) => p.completed).length;
  const averageScore =
    Object.values(progression).reduce((sum, p) => sum + (p.score || 0), 0) / Math.max(1, totalLanguages);
  return { totalLanguages, completedLanguages, averageScore };
}

// Affiche progression animée
function displayUserProgression() {
  const progression = getUserProgression();
  const container = document.getElementById("progression");
  container.innerHTML = "";
  for (const [lang, data] of Object.entries(progression)) {
    const div = document.createElement("div");
    div.className = "language-progress";
    div.innerHTML = `<strong>${lang}</strong>: Niveau ${data.niveau}, Score: ${data.score.toFixed(2)}% ${
      data.completed ? "✔ Terminé" : "⏳ En cours"
    }`;
    div.style.opacity = 0;
    container.appendChild(div);
    setTimeout(() => (div.style.opacity = 1), 100);
  }
}

// Affiche historique
function displayUserHistory() {
  const history = getUserHistory();
  const list = document.getElementById("quizHistory");
  list.innerHTML = "";
  history.forEach((entry) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${new Date(entry.date).toLocaleDateString()} - ${entry.language} (Niveau ${entry.level}): ${entry.score.toFixed(2)}%`;
    list.appendChild(li);
  });
}

// Affiche stats
function displayUserStats() {
  const stats = getUserStats();
  const container = document.getElementById("stats");
  container.innerHTML = `
        <p>Total de langages : ${stats.totalLanguages}</p>
        <p>Langages terminés : ${stats.completedLanguages}</p>
        <p>Score moyen : ${stats.averageScore.toFixed(2)}%</p>
    `;
}

// Alertes animées
function showAlert(message, type = "info", duration = 3000) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type} fade-in`;
  alert.textContent = message;
  document.body.appendChild(alert);
  setTimeout(() => alert.classList.add("fade-in"), 10);
  setTimeout(() => {
    alert.classList.remove("fade-in");
    alert.classList.add("fade-out");
    setTimeout(() => document.body.removeChild(alert), 400);
  }, duration);
}

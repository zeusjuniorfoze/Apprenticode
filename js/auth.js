// Hashage SHA-256 mot de passe (Web Crypto API)
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function registerUser() {
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim().toLowerCase();
  const password = document.getElementById("regPassword").value;

  if (!name || !email || !password) {
    showAlert("Tous les champs sont requis", "danger");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find((u) => u.email === email)) {
    showAlert("Email déjà utilisé", "warning");
    return;
  }

  const hashedPassword = await hashPassword(password);

  const user = {
    id: "user_" + Date.now(),
    nom: name,
    email: email,
    password: hashedPassword,
    dateInscription: new Date().toISOString().split("T")[0],
    progression: {},
  };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  showAlert("Inscription réussie", "success");
  showPage("login");
}

async function loginUser() {
  const email = document
    .getElementById("loginEmail")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    showAlert("Tous les champs sont requis", "danger");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const hashedPassword = await hashPassword(password);
  const user = users.find(
    (u) => u.email === email && u.password === hashedPassword
  );

  if (!user) {
    showAlert("Email ou mot de passe incorrect", "danger");
    return;
  }

  sessionStorage.setItem("currentUser", JSON.stringify(user));
  showAlert(`Bienvenue ${user.nom} !`, "success");
  showPage("dashboard");
}

// Mise à jour profil utilisateur
async function updateProfile() {
  const user = getCurrentUser();
  if (!user) {
    showAlert("Utilisateur non connecté", "danger");
    showPage("login");
    return;
  }

  const name = document.getElementById("profileName").value.trim();
  const email = document
    .getElementById("profileEmail")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("profilePassword").value;

  if (!name || !email) {
    showAlert("Nom et email sont requis", "warning");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some((u) => u.email === email && u.id !== user.id)) {
    showAlert("Cet email est déjà utilisé", "warning");
    return;
  }

  user.nom = name;
  user.email = email;

  if (password) {
    user.password = await hashPassword(password);
  }

  updateUser(user);
  showAlert("Profil mis à jour", "success");
  document.getElementById("profilePassword").value = "";
}

function deleteAccount() {
  if (
    !confirm(
      "Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible."
    )
  )
    return;

  const user = getCurrentUser();
  if (!user) return;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users = users.filter((u) => u.id !== user.id);
  localStorage.setItem("users", JSON.stringify(users));
  sessionStorage.removeItem("currentUser");
  showAlert("Compte supprimé", "success");
  showPage("home");
}

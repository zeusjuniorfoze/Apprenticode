let currentUser = null;
let currentLanguage = null;
let currentLevel = null;
let useTimer = false;
let quizQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval = null;

function startQuiz() {
  currentUser = getCurrentUser();
  if (!currentUser) {
    showAlert("Vous devez être connecté pour commencer le QCM !", "warning");
    showPage("login");
    return;
  }

  currentLanguage = document.getElementById("language").value;
  currentLevel = document.getElementById("level").value;
  useTimer = document.getElementById("timer").checked;

  // Filtrer les questions
  quizQuestions = questions.filter(
    (q) => q.langage === currentLanguage && q.niveau === currentLevel
  );
  if (quizQuestions.length < 20) {
    showAlert("Pas assez de questions pour ce langage et niveau", "danger");
    return;
  }

  quizQuestions = shuffle(quizQuestions).slice(0, 20);
  userAnswers = new Array(20).fill(null);
  currentQuestionIndex = 0;

  showPage("quiz");
  displayQuestion();
  if (useTimer) {
    startTimer();
  }
}

function displayQuestion() {
  const question = quizQuestions[currentQuestionIndex];
  document.getElementById("progress").textContent = `Question ${
    currentQuestionIndex + 1
  } sur 20`;
  document.getElementById("question").textContent = question.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  question.options.forEach((opt, index) => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.setAttribute("role", "listitem");
    div.setAttribute("tabindex", "0");
    div.textContent = opt;
    div.onclick = () => selectOption(index);
    div.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectOption(index);
      }
    };
    if (userAnswers[currentQuestionIndex] === index) {
      div.classList.add("selected");
    }
    optionsDiv.appendChild(div);
  });

  document.getElementById("prev").disabled = currentQuestionIndex === 0;
  document.getElementById("next").disabled = currentQuestionIndex === 19;
  document
    .getElementById("submit")
    .classList.toggle("hidden", currentQuestionIndex !== 19);
  document
    .getElementById("next")
    .classList.toggle("hidden", currentQuestionIndex === 19);

  updateProgressBar();
}

function selectOption(index) {
  userAnswers[currentQuestionIndex] = index;
  displayQuestion();

  if (useTimer) {
    stopTimer();
    startTimer();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
    if (useTimer) {
      stopTimer();
      startTimer();
    }
  }
}

function nextQuestion() {
  if (currentQuestionIndex < 19) {
    currentQuestionIndex++;
    displayQuestion();
    if (useTimer) {
      stopTimer();
      startTimer();
    }
  }
}

function startTimer() {
  stopTimer(); // Arrête timer existant s’il y en a

  let timeLeft = 30; // 30s par question
  const timerDisplay = document.getElementById("timerDisplay");
  timerDisplay.textContent = `Temps restant : ${timeLeft}s`;
  timerDisplay.classList.remove("hidden");
  timerDisplay.classList.remove("warning");

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Temps restant : ${timeLeft}s`;

    if (timeLeft <= 10) {
      timerDisplay.classList.add("warning");
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      nextQuestion();
      if (currentQuestionIndex < 20) {
        startTimer();
      }
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  const timerDisplay = document.getElementById("timerDisplay");
  timerDisplay.classList.add("hidden");
  timerDisplay.classList.remove("warning");
}

function submitQuiz() {
  stopTimer();
  let score = 0;
  let corrections = "";
  quizQuestions.forEach((q, index) => {
    if (userAnswers[index] === q.bonneReponse) {
      score++;
      corrections += `<div class="correct">Question ${
        index + 1
      }: Correct</div>`;
    } else {
      corrections += `<div class="wrong">Question ${
        index + 1
      }: Incorrect. Bonne réponse: ${
        q.options[q.bonneReponse]
      }<br>Explication: ${q.explication}</div>`;
    }
  });

  const percentage = (score / 20) * 100;
  document.getElementById(
    "score"
  ).textContent = `Score : ${score}/20 (${percentage.toFixed(2)}%)`;
  document.getElementById("corrections").innerHTML = corrections;
  showPage("results");

  // Mise à jour de la progression
  const langProgress = currentUser.progression[currentLanguage] || {
    niveau: currentLevel,
    score: 0,
    completed: false,
  };
  const newScore = Math.max(langProgress.score, percentage);
  const completed = newScore >= 50;
  currentUser.progression[currentLanguage] = {
    niveau: currentLevel,
    score: newScore,
    completed,
  };
  updateUser(currentUser);

  // Historique
  const history =
    JSON.parse(localStorage.getItem("history_" + currentUser.id)) || [];
  history.push({
    date: new Date().toISOString(),
    language: currentLanguage,
    level: currentLevel,
    score: percentage,
  });
  localStorage.setItem("history_" + currentUser.id, JSON.stringify(history));

  // Confetti si score parfait
  if (score === quizQuestions.length) {
    launchConfetti();
    showAlert("🎉 Parfait ! Bravo !", "success");
  }
}

function revise() {
  // Afficher les questions échouées
  const wrongQuestions = quizQuestions.filter(
    (q, index) => userAnswers[index] !== q.bonneReponse
  );
  if (wrongQuestions.length === 0) {
    showAlert("Aucune question à réviser, vous avez tout réussi !", "info");
    return;
  }
  quizQuestions = wrongQuestions;
  userAnswers = new Array(wrongQuestions.length).fill(null);
  currentQuestionIndex = 0;
  showPage("quiz");
  displayQuestion();
  if (useTimer) {
    startTimer();
  }
}

function updateProgressBar() {
  const progressPercent =
    ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = `${progressPercent}%`;
  progressBar.setAttribute("aria-valuenow", progressPercent.toFixed(0));
}

function launchConfetti() {
  const duration = 3 * 1000; // Durée totale en ms
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 50 * (timeLeft / duration);
    // Lance des confettis à des positions aléatoires en haut de l'écran
    confetti(
      Object.assign({}, defaults, {
        particleCount: Math.floor(particleCount),
        origin: { x: Math.random(), y: Math.random() * 0.2 },
      })
    );
  }, 250);
}

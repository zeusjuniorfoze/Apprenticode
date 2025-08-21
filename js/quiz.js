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
  if (quizQuestions.length < 10) {
    showAlert("Pas assez de questions pour ce langage et niveau", "danger");
    return;
  }

  quizQuestions = shuffle(quizQuestions).slice(0, 10);
  userAnswers = new Array(10).fill(null);
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
  } sur ${quizQuestions.length}`;

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
  document.getElementById("next").disabled =
    currentQuestionIndex === quizQuestions.length - 1;

  document
    .getElementById("submit")
    .classList.toggle(
      "hidden",
      currentQuestionIndex !== quizQuestions.length - 1
    );
  document
    .getElementById("next")
    .classList.toggle(
      "hidden",
      currentQuestionIndex === quizQuestions.length - 1
    );

  updateProgressBar();
}

function selectOption(index) {
  userAnswers[currentQuestionIndex] = index;
  displayQuestion();
}

function nextQuestion() {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
    if (useTimer) {
      stopTimer();
      startTimer();
    }
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
      if (currentQuestionIndex < 10) {
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
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === q.bonneReponse;

    if (isCorrect) {
      score++;
      corrections += `
        <div class="card border-success shadow-sm p-3 mb-3">
          <h5 class="text-success">✅ ${q.question}</h5>
          <p class="mb-0"><strong>Votre réponse :</strong> ${q.options[userAnswer]}</p>
        </div>`;
    } else {
      corrections += `
        <div class="card border-danger shadow-sm p-3 mb-3">
          <h5 class="text-danger">❌ ${q.question}</h5>
          <p><strong>Votre réponse :</strong> ${
            userAnswer !== undefined ? q.options[userAnswer] : "Non répondu"
          }</p>
          <p><strong>Bonne réponse :</strong> ${q.options[q.bonneReponse]}</p>
          <p class="text-muted"><em>💡 Explication :</em> ${q.explication}</p>
        </div>`;
    }
  });

  // Calcul du pourcentage
  const percentage = (score / quizQuestions.length) * 100;

  // Affichage du score global
  let appreciation = "";
  if (percentage === 100) {
    appreciation = "🎉 Excellent ! Score parfait Allez au niveau suivant 👏";
  } else if (percentage >= 80) {
    appreciation = "🔥 Très bien ! Vous maîtrisez presque tout.";
  } else if (percentage >= 50) {
    appreciation = "😊 Bon début, continuez à progresser.";
  } else {
    appreciation = "⚠️ Révisez encore un peu, vous pouvez faire mieux !";
  }

  document.getElementById("score").innerHTML = `
    <div class="text-center">
      <h4 class="fw-bold">Score : ${score}/${
    quizQuestions.length
  } (${percentage.toFixed(2)}%)</h4>
      <div class="progress my-2" style="height: 20px;">
        <div class="progress-bar ${
          percentage >= 50 ? "bg-success" : "bg-danger"
        }" role="progressbar" style="width: ${percentage}%" aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100">
          ${percentage.toFixed(0)}%
        </div>
      </div>
      <p class="mt-2">${appreciation}</p>
    </div>
  `;

  // Affichage des corrections
  document.getElementById("corrections").innerHTML = corrections;

  // Redirection vers la page de résultats
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

  // Sauvegarde dans l’historique
  const history =
    JSON.parse(localStorage.getItem("history_" + currentUser.id)) || [];
  history.push({
    date: new Date().toISOString(),
    language: currentLanguage,
    level: currentLevel,
    score: percentage,
  });
  localStorage.setItem("history_" + currentUser.id, JSON.stringify(history));

  // 🎉 Confetti si score parfait
  if (score === quizQuestions.length) {
    launchConfetti();
    showAlert("🎉 Score parfait ! Bravo 👌", "success");
  }
}

function revise() {
  // Filtrer uniquement les questions échouées du quiz actuel
  const wrongQuestions = quizQuestions.filter(
    (q, index) => userAnswers[index] !== q.bonneReponse
  );

  if (wrongQuestions.length === 0) {
    showAlert("Aucune question à réviser, vous avez tout réussi !", "info");
    return;
  }

  // Remettre à zéro pour la révision
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

function goTo(screen) {
  document.querySelectorAll(".screen").forEach(sec => sec.classList.remove("active"));
  document.getElementById(screen).classList.add("active");
}

function toggleHabit(element) {
  element.classList.toggle("done");
  showNotification("✅ Hábito atualizado!");
}

function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
  }, 5000);
}

function goTo(screen) {
  document.querySelectorAll(".screen").forEach(sec => sec.classList.remove("active"));
  document.getElementById(screen).classList.add("active");
}

function toggleHabit(element) {
  element.classList.toggle("done");
}


// Perguntas e respostas do funil
const quizData = [
  {
    question: "Seu filho(a) dormiu bem ontem?",
    options: ["Sim", "Não"],
    messages: ["Ótimo! Continue mantendo a rotina 💤", "Tente uma atividade relaxante antes de dormir 🛌"]
  },
  {
    question: "Ele(a) se alimentou bem hoje?",
    options: ["Sim", "Não"],
    messages: ["Excelente! Reforce refeições coloridas 🥗", "Experimente lanches saudáveis 🍎"]
  },

    {
    question: "Qual sua maior dificuldade em lidar com seu filho(a)?",
    options: ["Comportamento", "Alimentação", "Sono"],
    messages: ["Entendo, o comportamento pode ser desafiador. Vamos trabalhar nisso!", "A alimentação é fundamental. Que tal algumas dicas?", "O sono é crucial. Vamos explorar soluções juntos?"]
  }
];

let currentQuiz = 0;

// Exibir quiz
function showQuiz(index) {
  const question = document.getElementById("quiz-question");
  const buttons = document.querySelectorAll(".quiz-options button");
  question.textContent = quizData[index].question;
  buttons.forEach((btn, i) => btn.textContent = quizData[index].options[i]);
}

// Responder quiz
function answerQuiz(optionIndex) {
  showNotification(quizData[currentQuiz].messages[optionIndex]);
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    showQuiz(currentQuiz);
  } else {
    showResult();
  }
}

// Resultado final
function showResult() {
  document.getElementById("quiz-card").style.display = "none";
  const result = document.getElementById("quiz-result");
  result.style.display = "flex";
  result.innerHTML = `
    <h3>🎉 Parabéns!</h3>
    <p>Você completou o quiz do dia.</p>
    <p>E ganhou um desconto bônus!</p>
    <button onclick="leadCTA()">👉 Garanta seu App agora</button>
    <p>OBS: Confira os Hábitos do Dia!</p>
  `;
  result.style.flexDirection = "column";
  result.style.alignItems = "center";
  result.style.justifyContent = "center";
  result.querySelector("button").style.cssText = "margin-top: 10px;background-color: #a50c84ff; box-shadow: 3px 3px 20px 3px rgba(0,0,0,0.15); color: white; border: none; padding: 10px 20px; font-size: 17px; font-weight: bold; cursor: pointer; border-radius: 10px;";
}




// CTA Final (pode ser redirecionamento para página de venda)
function leadCTA() {
  alert("Redirecionando para agendamento do x1...");
   window.location.href = "https://cuidarmaisonline.netlify.app/#pricing";
}

// Notificação CTA
function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";
  setTimeout(() => { notification.style.display = "none"; }, 3000);
}



/*stylo de bloqueio*/

function leadCTA() {
  // Pode ser link para WhatsApp ou Calendly
  window.open("https://cuidarmaisonline.netlify.app/#pricing", "_blank");
}


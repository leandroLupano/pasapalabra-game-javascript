const questions = [
  {
    letter: "A",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "B",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "C",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "D",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "E",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "F",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "G",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "H",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "I",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "J",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "K",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "L",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "M",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "N",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "Ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "O",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "P",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "Q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  {
    letter: "R",
    answer: "raton",
    status: 0,
    question: "CON LA R. Roedor",
  },
  {
    letter: "S",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "T",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "U",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "V",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "W",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "X",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "Y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "Z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

const startGamePanel = document.querySelector(".start-game");
const userName = document.querySelector(".user-name-input");
const startGameButton = document.querySelector(".start-button");
const questionBox = document.querySelector(".question");
const lettersPanel = document.querySelector(".letters");
const lettersBox = document.querySelectorAll(".letter-box");
const userPanel = document.querySelector(".user-panel");
const okButton = document.querySelector(".ok-button");
const pasapalabraButton = document.querySelector(".pasapalabra-button");
const stopButton = document.querySelector(".stop-button");
const playAgainButton = document.querySelector(".play-again-button");
const questionAnswer = document.querySelector(".answer");
const rankingPanel = document.querySelector(".ranking-panel");
const rankingList = document.querySelector(".ranking-list");
const finalResult = document.querySelector(".results");
const resultPlayAgainButton = document.querySelector(
  ".result-play-again-button"
);
const gameTimer = document.querySelector(".game-time");
const timerMessage = document.querySelector(".timer-message");
let actualIndex;
let correctUserAnswer;
let wrongUserAnswer;
let finishGame;
let timeLeft;
let gameTime;
const userRanking = [];

class UserResults {
  constructor(userName, points) {
    this.userName = userName;
    this.points = points;
  }
}

const introGame = () => {
  startGamePanel.classList.remove("hidden");
  rankingPanel.classList.add("hidden");
  questionBox.classList.add("hidden");
  lettersPanel.classList.add("hidden");
  userPanel.classList.add("hidden");
  questionAnswer.classList.add("hidden");
  gameTimer.classList.add("hidden");
  timerMessage.classList.add("hidden");
  document.querySelector(".user-name-input").value = "";
};

startGameButton.addEventListener("click", () => {
  if (document.querySelector(".user-name-input").value === "") return;

  startGame();
});

const startGame = () => {
  startGamePanel.classList.add("hidden");
  questionBox.classList.remove("hidden");
  lettersPanel.classList.remove("hidden");
  userPanel.classList.remove("hidden");
  playAgainButton.classList.remove("hidden");
  questionAnswer.classList.remove("hidden");
  gameTimer.classList.remove("hidden");

  resetGame();
  startGameTimer();
  showGameQuestion();
};

const resetGame = () => {
  actualIndex = 0;
  correctUserAnswer = 0;
  wrongUserAnswer = 0;
  timeLeft = 110;
  clearInterval(gameTime);

  document.querySelector(".answer-input").value = "";

  questions.forEach((element) => {
    element.status = 0;
  });

  lettersBox.forEach((element) => {
    element.classList.remove("wrong-answer");
    element.classList.remove("correct-answer");
    element.classList.add("neutral-answer");
  });

  questionAnswer.classList.remove("wrong-answer");
  questionAnswer.classList.remove("correct-answer");
  questionAnswer.classList.add("neutral-answer");
  questionAnswer.textContent = `Responde la pregunta o haz click en "Pasapalabra".`;

  for (let i = 0; i < userRanking.length; i++) {
    const element = document.querySelector(".ranking-list-element");
    if (element) {
      rankingList.removeChild(element);
    }
  }
};

const startGameTimer = () => {
  gameTime = setInterval(countDown, 1000);
};

const countDown = () => {
  if (timeLeft <= 0) {
    timerMessage.classList.remove("hidden");
    clearInterval(gameTime);
    gameRanking();
  } else {
    gameTimer.textContent = `${timeLeft} segundos`;
    timeLeft--;
  }
};

const showGameQuestion = () => {
  if (actualIndex === questions.length) {
    actualIndex = 0;
  }

  if (questions[actualIndex].status === 0) {
    questionBox.textContent = questions[actualIndex].question;
  } else {
    checkEndGame();
  }
};

const checkEndGame = () => {
  finishGame = true;

  questions.forEach((element) => {
    if (element.status === 0) {
      finishGame = false;
    }
  });

  if (!finishGame) {
    actualIndex++;
    showGameQuestion();
  } else {
    clearInterval(gameTime);
    gameRanking();
  }
};

okButton.addEventListener("click", () => {
  if (document.querySelector(".answer-input").value === "") return;

  checkAnswer();
});

const checkAnswer = () => {
  const userAnswer = document
    .querySelector(".answer-input")
    .value.toLowerCase();

  if (userAnswer === questions[actualIndex].answer) {
    document.querySelector(".answer-input").value = "";
    correctAnswer();
  } else {
    document.querySelector(".answer-input").value = "";
    wrongAnswer();
  }
};

const correctAnswer = () => {
  lettersBox.forEach((element) => {
    if (element.textContent === questions[actualIndex].letter) {
      element.classList.add("correct-answer");
    }
  });

  questionAnswer.classList.remove("wrong-answer");
  questionAnswer.classList.add("correct-answer");
  questionAnswer.textContent = `La respuesta es correcta!`;

  questions[actualIndex].status = 1;

  actualIndex++;

  showGameQuestion();
};

const wrongAnswer = () => {
  lettersBox.forEach((element) => {
    if (element.textContent === questions[actualIndex].letter) {
      element.classList.add("wrong-answer");
    }
  });

  questionAnswer.classList.remove("correct-answer");
  questionAnswer.classList.add("wrong-answer");
  questionAnswer.textContent = `La respuesta es incorrecta. Era "${questions[actualIndex].answer}".`;

  questions[actualIndex].status = 2;

  actualIndex++;

  showGameQuestion();
};

pasapalabraButton.addEventListener("click", () => pasaPalabra());

const pasaPalabra = () => {
  actualIndex++;

  questionAnswer.classList.remove("correct-answer");
  questionAnswer.classList.remove("wrong-answer");
  questionAnswer.classList.add("neutral-answer");
  questionAnswer.textContent = `Continuamos con la siguiente pregunta.`;

  showGameQuestion();
};

stopButton.addEventListener("click", () => {
  clearInterval(gameTime);
  gameRanking();
});

const gameRanking = () => {
  questions.forEach((element) => {
    if (element.status === 1) {
      correctUserAnswer++;
    }
  });

  questions.forEach((element) => {
    if (element.status === 2) {
      wrongUserAnswer++;
    }
  });

  const userResult = new UserResults(userName.value, correctUserAnswer);

  userRanking.push(userResult);

  userRanking.sort((a, b) => b.points - a.points);

  for (let i = 0; i < userRanking.length; i++) {
    const userElement = document.createElement("li");
    userElement.className = "ranking-list-element";
    userElement.textContent = `${i + 1}º- ${userRanking[i].userName}: ${
      userRanking[i].points
    } puntos.`;
    rankingList.appendChild(userElement);
  }

  finalResult.textContent = `Haz acertado ${correctUserAnswer} preguntas y haz fallado en ${wrongUserAnswer}.`;

  questionBox.classList.add("hidden");
  lettersPanel.classList.add("hidden");
  userPanel.classList.add("hidden");
  questionAnswer.classList.add("hidden");
  gameTimer.classList.add("hidden");
  rankingPanel.classList.remove("hidden");
};

playAgainButton.addEventListener("click", () => {
  clearInterval(gameTime);
  introGame();
});

resultPlayAgainButton.addEventListener("click", () => {
  clearInterval(gameTime);
  introGame();
});

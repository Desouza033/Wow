const bgMusic = document.getElementById('bg-music');
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const surpriseScreen = document.getElementById('surprise-screen');
const noMessage = document.getElementById('no-message');
const birthdayMessage = document.getElementById('birthday-message');
const clickMeBtn = document.getElementById('clickMeBtn');

let messageCount = 0;
const messages = [
  "Come on, click Yes! 🎁",
  "Don't be shy, you want to see it. 😉",
  "It's worth it, trust me!",
  "Still no? You're missing out!",
  "The surprise is really cool!",
  "Please click Yes... 😢",
  "I'm begging you... 🙏",
  "One little click won't hurt!",
  "Why not try it?",
  "You know you want to. 😏"
];

function startApp() {
  bgMusic.play().catch(() => {
    console.log("Autoplay blocked, waiting for user interaction.");
  });
  startScreen.classList.add('hidden');
  questionScreen.classList.remove('hidden');
}

function showSurprise() {
  questionScreen.classList.add('hidden');
  surpriseScreen.classList.remove('hidden');
  birthdayMessage.classList.add('hidden');
  clickMeBtn.style.display = 'block';
}

function showNoMessage() {
  noMessage.textContent = messages[messageCount % messages.length];
  noMessage.classList.remove('hidden');
  messageCount++;
}

function showBirthdayMessage() {
  birthdayMessage.classList.remove('hidden');
  clickMeBtn.style.display = 'none';
}

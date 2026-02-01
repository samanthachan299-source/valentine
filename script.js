const yesBtn = document.getElementById("yesBtn");
const loveImage = document.getElementById("loveImage");
const question = document.getElementById("question");
const heartsContainer = document.getElementById("hearts");

yesBtn.addEventListener("click", () => {
  question.textContent = "YAY!!! 💘💘💘";
  loveImage.style.display = "block";
  yesBtn.style.display = "none";

  startHearts();
});

function startHearts() {
  setInterval(createHeart, 500); // every 0.5s
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  heartsContainer.appendChild(heart);

  // remove heart after animation
  setTimeout(() => {
    heart.remove();
  }, 3000);
}

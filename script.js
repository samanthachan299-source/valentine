const yesBtn = document.getElementById("yesBtn");
const loveImage = document.getElementById("loveImage");
const question = document.getElementById("question");

yesBtn.addEventListener("click", () => {
  question.textContent = "YAY!!! 💘💘💘";
  loveImage.style.display = "block";
  yesBtn.style.display = "none";
});

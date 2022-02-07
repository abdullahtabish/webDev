const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
  const input = e.target.value;

  background.style.filter = `blur(${20 - input.length * 2}px)`;
});

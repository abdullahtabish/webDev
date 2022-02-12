const ratings = document.querySelectorAll(".rating");
const ratingsConatiner = document.querySelector(".rating-container");
const send = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selecterRating = "Satisfied";

ratingsConatiner.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActiveFromClass();
    e.target.parentNode.classList.add("active");
    selecterRating = e.target.nextElementSibling.innerHTML;
  }
});

send.addEventListener("click", (e) => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selecterRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActiveFromClass() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}

const questions = document.querySelectorAll("[data-faq-question]");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    e.preventDefault();
    openAndCloseFaq(e.target.parentNode);
  });
});

function openAndCloseFaq(element) {
  const classe = "faq__questions__item--is-open";

  element.classList.toggle(classe);
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      showNewList(e);
      changeActiveButtonBorder(e);
    });
  });
});

function changeActiveButtonBorder(button) {
  removeActiveButtonBorder();
  button.target.classList.add("shows__tabs__button--is-active");
}

function removeActiveButtonBorder() {
  const buttons = document.querySelectorAll("[data-tab-button]");
  buttons.forEach((e) => {
    e.classList.remove("shows__tabs__button--is-active");
  });
}

function showNewList(button) {
  const activeList = button.target.dataset.tabButton;
  const activeListId = document.querySelector(`[data-tab-id=${activeList}]`);
  disablePreviousList();
  activeListId.classList.add("shows__list--is-active");
}

function disablePreviousList() {
  const tabContainer = document.querySelectorAll("[data-tab-id]");
  tabContainer.forEach((e) => {
    e.classList.remove("shows__list--is-active");
  });
}

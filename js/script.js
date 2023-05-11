window.onload = function () {
  document.addEventListener("click", documentActions);

  function documentActions(e) {
    const targetElement = e.target;
    if (window.innerWidth > 768) {
      if (targetElement.classList.contains("menu-arrow")) {
        // console.log(targetElement);
        // console.log(targetElement.closest(".menu-item"));
        targetElement.closest(".menu-item").classList.toggle("hover");
      }
      if (
        !targetElement.closest(".menu-item") &&
        document.querySelectorAll(".menu-item.hover").length > 0
      ) {
        document
          .querySelectorAll(".menu-item.hover")
          .forEach((elem) => elem.classList.remove("hover"));
      }
    }
  }
};

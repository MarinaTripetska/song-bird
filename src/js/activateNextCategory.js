function activateNextCategory() {
  const categoriesList = document.querySelectorAll("[data-active]");
  let index = 0;
  categoriesList.forEach((el, i) => {
    if (el.previousElementSibling) {
      if (el.previousElementSibling.dataset.active === "true") {
        el.previousElementSibling.dataset.active = "false";
        index = i;
      }
    }
  });

  categoriesList[index].dataset.active = "true";
}

export default activateNextCategory;

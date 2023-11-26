"use strict";

const container = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");
const panelArr = Array.from(panels);

container.addEventListener("click", function (e) {
  const select = e.target.closest(".panel");
  if (!select) return;
  panelArr.forEach((panel) => {
    panel.classList.remove("active");
  });
  select.classList.add("active");
});

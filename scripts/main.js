const mode = document.querySelector(".mode");
mode.addEventListener("click", () => {
  let element = document.body,
    container = document.querySelector(".container"),
    description = document.querySelector(".container-description"),
    add = document.querySelector(".add"),
    gallery = document.querySelector(".gallery"),
    footer = document.querySelector("footer"),
    search = document.querySelector(".search > .input"),
    mark = document.querySelector("span.mark");
  footer.classList.toggle("bg-mode");
  description.classList.toggle("dark-mode");
  search.classList.toggle("bg-mode");
  add.classList.toggle("dark-mode");
  gallery.classList.toggle("dark-mode");
  mode.classList.toggle("dark-mode");
  element.classList.toggle("bg-mode");
  container.classList.toggle("dark-mode");
  mark.classList.toggle("bg-mode");
});

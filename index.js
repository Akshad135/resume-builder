document.addEventListener("DOMContentLoaded", function () {
  const addButtons = document.querySelectorAll(".add-btn");

  addButtons.forEach((addButton) => {
    addButton.addEventListener("click", function () {
      console.log("Button clicked");
      const parent = this.parentNode;
      let template;
      if (parent.classList.contains("socials")) {
        template = document.getElementById("input-template");
      } else if (parent.classList.contains("education")) {
        template = document.getElementById("education-template");
      } else if (parent.classList.contains("skill")) {
        template = document.getElementById("skill-template");
      } else if (parent.classList.contains("projects")) {
        template = document.getElementById("projects-template");
      } else if (parent.classList.contains("experience")) {
        template = document.getElementById("experience-template");
      } else if (parent.classList.contains("hobbies")) {
        template = document.getElementById("hobbies-template");
      } else if (parent.classList.contains("languages")) {
        template = document.getElementById("languages-template");
      }
      const clone = document.importNode(template.content, true);
      parent.appendChild(clone);
    });
  });
});

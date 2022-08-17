var hamburger = document.getElementById("hamburger");
var hamburgerTrigger = document.getElementById("hamburger_trigger");
hamburgerTrigger.addEventListener("click", () => {
  if (hamburger.style.display == "none") {
    hamburger.style.display = "flex";
  } else {
    hamburger.style.display = "none";
  }
});

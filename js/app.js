const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Formulaire soumis !");

const nameValue = document.getElementById("name").value.trim();
const emailValue = document.getElementById("email").value.trim();
const messageValue = document.getElementById("message").value.trim();
const feedback = document.getElementById("feedback");
if (nameValue === "" || messageValue === "") {
  feedback.textContent = "Merci de remplir tous les champs.";
  feedback.style.color = "red";
  return; 
}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(emailValue)) {
  feedback.textContent = "Merci d'indiquer un email valide.";
  feedback.style.color = "red";
  return;
}
feedback.textContent = "Merci " + nameValue + " ! Votre message a bien été envoyé.";
feedback.style.color = "green";
form.reset();
});
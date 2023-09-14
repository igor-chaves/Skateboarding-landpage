// const sendBtn = document.querySelector("button")
const form = document.querySelector("form")
const name = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")

// REGEX EXPLANATION
// ^                 Início da linha.
// [a-zA-Z0-9.-]+    Um ou mais caracteres alfanuméricos, pontos e traços após o "@".
// \.                O caractere de ponto.
// [a-zA-Z]{2,}      Dois ou mais caracteres após o ponto.
// $                 Fim da linha.
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


form.addEventListener("submit", e => {
   e.preventDefault()

   if (!regexEmail.test(email.value)) {
      console.log("Invalid email")
      email.style.border = "2px solid red"
      return
   }

   if (name.value === "" || message.value.trim() === "" || !regexEmail.test(email.value)) {
      e.preventDefault();
      console.log("ERRORRRRRR")
      alert("Fill all the fields")
   }

   // Se todos os campos estiverem corretos, exibe a mensagem de sucesso
   alert("Thank you for your message. We'll reply soon.");
   form.reset()
})



const form = document.querySelector("form")
const name = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")
const errorMsg = document.getElementById("error-msg")
console.log(errorMsg)
// REGEX EXPLANATION
// ^                 Início da linha.
// [a-zA-Z0-9.-]+    Um ou mais caracteres alfanuméricos, pontos e traços após o "@".
// \.                O caractere de ponto.
// [a-zA-Z]{2,}      Dois ou mais caracteres após o ponto.
// $                 Fim da linha.
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


form.addEventListener("submit", e => {
   e.preventDefault()

   if (name.value === "" || email.value === "" || message.value.trim() === "") {
      errorMsg.innerHTML = "Fill all the fields"
      return
   }

   if (!regexEmail.test(email.value)) {
      errorMsg.innerHTML = "Invalid e-mail"
      email.style.borderBottom = "1.5px solid red"
      return
   }

   // Se todos os campos estiverem corretos, exibe a mensagem de sucesso
   alert("Thank you for your message. We'll reply soon.")
   email.style.borderBottom = "1.5px solid black"
   errorMsg.innerHTML = ""
   form.reset()
})


// set bottom border color to black when user type on input
email.addEventListener("input", () => {
   email.style.borderBottom = "1.5px solid black"
})
name.addEventListener("input", () => {
   name.style.borderBottom = "1.5px solid black"
})
message.addEventListener("input", () => {
   message.style.borderBottom = "1.5px solid black"
})

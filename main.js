//enviar ou n enviar o form
document.querySelector("form")
.addEventListener("submit", event => {
    console.log("enviar o formulário")

    event.preventDefault()
})
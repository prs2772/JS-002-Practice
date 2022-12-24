const inputFirst = document.querySelector("#dynamic-section--input__field-one")
const inputSecond = document.querySelector(
  "#dynamic-section--input__field-two"
);
const buttonSubmit = document.querySelector("#dynamic-section--button__submit")
const divResult = document.querySelector("#dynamic-section--div")
const form = document.querySelector("#dynamic-section--form")
const paragraph = document.createElement("p")

form.addEventListener('submit', onClick)

function onClick(event) {
  event.preventDefault()
  paragraph.innerText = Number(inputFirst.value) + Number(inputSecond.value)
  divResult.appendChild(paragraph)
}

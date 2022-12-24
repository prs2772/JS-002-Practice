const inputFirst = document.querySelector("#dynamic-section--input__field-one");
const inputSecond = document.querySelector(
  "#dynamic-section--input__field-two"
);
const divResult = document.querySelector("#dynamic-section--div");
const paragraph = document.createElement("p");

function onClick() {
  paragraph.innerText = Number(inputFirst.value) + Number(inputSecond.value);
  divResult.appendChild(paragraph);
}

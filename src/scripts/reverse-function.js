const reverseWordButton = document.querySelector(".reverse-function-button");
reverseWordButton.addEventListener("click", reverseWord);

function reverseWord() {
  const inputValue = document.getElementById("reverse").value;
  const reversedWord = inputValue.split("").reverse().join("");
  const addResult = document.querySelector(".reverse-function-result");

  addResult.textContent = reversedWord;
}

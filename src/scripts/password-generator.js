const passwordGenerationButton = document.querySelector(
  ".password-generator-button"
);
passwordGenerationButton.addEventListener("click", generatePassword);

function getRandomCharacter(characters) {
  return characters[Math.floor(Math.random() * characters.length)];
}

function shuffleCharacters(character) {
  return character
    .split("")
    .sort(() => Math.random() - Math.random())
    .join("");
}

function generatePassword() {
  const numbers = "0123456789";
  const symbols = ",.<>?/;:!@#$%^&*()_+={}[]|~";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

  let password =
    getRandomCharacter(numbers) +
    getRandomCharacter(symbols) +
    getRandomCharacter(uppercaseLetters) +
    getRandomCharacter(lowercaseLetters);

  while (password.length < 8) {
    const randomCharacters =
      uppercaseLetters + lowercaseLetters + symbols + numbers;
    password += getRandomCharacter(randomCharacters);
  }

  password = shuffleCharacters(password);

  const resultElement = document.querySelector(".password-generator-result");

  resultElement.textContent = password;
}

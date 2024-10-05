function randomNumberSort(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}
const correctButton = randomNumberSort(5);
console.log(correctButton);

function checkButton(clickedButton) {
  const messageElement = document.getElementById("message");
  if (clickedButton === correctButton) {
    messageElement.textContent = `Você acertou! O botão correto é o ${
      clickedButton + 1
    }.`;
    messageElement.style.color = "green";
  } else {
    messageElement.textContent = `Você errou! O botão ${
      clickedButton + 1
    } não é o correto.`;
    messageElement.style.color = "red";
  }
}

// Initialize speech synthesis
const synth = window.speechSynthesis;

// Function to speak the text in the textarea
function speakText() {
  const inputText = document.getElementById('inputText').value;
  if (inputText.trim() === '') {
    alert('Please enter some text.');
    return;
  }

  const utterance = new SpeechSynthesisUtterance(inputText);
  synth.speak(utterance);

  // Display the spoken text in the output section
  document.getElementById('outputText').innerText = inputText;
}
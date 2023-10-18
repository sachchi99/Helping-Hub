
const microphoneButton = document.getElementById('micCheckbox');
let recognition;

microphoneButton.addEventListener('click', () => {
    if (!recognition) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.onresult = (event) => {
            const command = event.results[0][0].transcript.toLowerCase();
            if (command.includes('scroll down')) {
              window.scrollBy(0, window.innerHeight);
            } else if (command.includes('scroll up')) {
              window.scrollBy(0, -window.innerHeight); // Scroll up by the height of the window
            }
        };
        recognition.onend = () => {
            microphoneButton.textContent = 'Start Listening';
        };
        recognition.start();
        microphoneButton.textContent = 'Listening... Say "Page Two"';
    } else {
        recognition.stop();
        recognition = null;
        microphoneButton.textContent = 'Start Listening';
    }
});


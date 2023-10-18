


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
            } else if (command.includes('go to home')) {
              // Replace "targetElement" with the actual element you want to click on
              const targetElement = document.getElementById("homev");
              targetElement.click();
          }
            else if (command.includes('go to about')) {
              // Replace "targetElement" with the actual element you want to click on
              const targetElement = document.getElementById("aboutv");
              targetElement.click();
            }
            else if (command.includes('go to service')) {
              // Replace "targetElement" with the actual element you want to click on
              const targetElement = document.getElementById("servicev");
              targetElement.click();
            }
            else if (command.includes('go to contact')) {
              // Replace "targetElement" with the actual element you want to click on
              const targetElement = document.getElementById("contactv");
              targetElement.click();
            }
            else if (command.includes('go to healthcare support')) {
              // Replace "targetElement" with the actual element you want to click on
              const targetElement = document.getElementById("healthcarev");
              targetElement.click();
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


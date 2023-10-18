



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
            else if (command.includes('go to treatment')) {
              // Replace "targetElement" with the actual element you want to click on
              const targetElement = document.getElementById("treatmentv");
              targetElement.click();
            }
            else if (command.includes('go to contact')) {
              // Replace "targetElement" with the actual element you want to click on
              const targetElement = document.getElementById("contactv");
              targetElement.click();
            }
            else if (command.includes('go to doctor')) {
              // Replace "targetElement" with the actual element you want to click on
              const targetElement = document.getElementById("doctorv");
              targetElement.click();
            }
            else if (command.includes('go to main page')) {
              // Replace "targetElement" with the actual element you want to click on
              const targetElement = document.getElementById("mainv");
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





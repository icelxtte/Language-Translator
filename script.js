// Initialize i18next with translation resources
i18next.init({
  lng: 'en',  // Default language
  resources: {
    en: {
      translation: {
        hello: "Hello",
        good_morning: "Good Morning",
        good_night: "Good Night",
        thank_you: "Thank You",
        please: "Please",
        sorry: "Sorry",
        yes: "Yes",
        no: "No",
        goodbye: "Goodbye",
        how_are_you: "How are you?"
      }
    },
    es: {
      translation: {
        hello: "Hola",
        good_morning: "Buenos días",
        good_night: "Buenas noches",
        thank_you: "Gracias",
        please: "Por favor",
        sorry: "Lo siento",
        yes: "Sí",
        no: "No",
        goodbye: "Adiós",
        how_are_you: "¿Cómo estás?"
      }
    },
    fr: {
      translation: {
        hello: "Bonjour",
        good_morning: "Bonjour",
        good_night: "Bonne nuit",
        thank_you: "Merci",
        please: "S'il vous plaît",
        sorry: "Désolé",
        yes: "Oui",
        no: "Non",
        goodbye: "Au revoir",
        how_are_you: "Comment ça va ?"
      }
    },
    de: {
      translation: {
        hello: "Hallo",
        good_morning: "Guten Morgen",
        good_night: "Gute Nacht",
        thank_you: "Danke",
        please: "Bitte",
        sorry: "Entschuldigung",
        yes: "Ja",
        no: "Nein",
        goodbye: "Tschüss",
        how_are_you: "Wie geht's dir?"
      }
    },
    it: {
      translation: {
        hello: "Ciao",
        good_morning: "Buongiorno",
        good_night: "Buona notte",
        thank_you: "Grazie",
        please: "Per favore",
        sorry: "Mi scuso",
        yes: "Sì",
        no: "No",
        goodbye: "Addio",
        how_are_you: "Come stai?"
      }
    }
  }
}, function(err, t) {
  // Initialize page with default language
  document.getElementById('translated-text').textContent = t('hello');
});

// Function to translate phrase
function translatePhrase() {
  const fromLang = document.getElementById('from-lang').value;
  const toLang = document.getElementById('to-lang').value;
  const phrase = document.getElementById('phrase-input').value.trim();

  if (!phrase) {
    alert("Please enter a phrase.");
    return;
  }

  // Change language dynamically
  i18next.changeLanguage(toLang, function(err, t) {
    // Check if the phrase is in the translation files
    const translation = t(phrase);
    if (translation && translation !== phrase) {
      document.getElementById('translated-text').textContent = translation;
    } else {
      document.getElementById('translated-text').textContent = "Translation not found.";
    }
  });
}

// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');
  
    // Change the text of the toggle button based on the mode
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️'; // Sun icon for light mode
    } else {
        toggleButton.textContent = '🌙'; // Moon icon for dark mode
    }
}

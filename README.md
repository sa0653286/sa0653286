function translate(text, language) {
  // Get the Google Translate API key.
  var apiKey = "YOUR_API_KEY";

  // Create the Google Translate object.
  var translate = new google.translate.Translate();

  // Translate the text to the specified language.
  var translatedText = translate.translate(text, {
    target: language,
    key: apiKey
  });

  // Return the translated text.
  return translatedText;
}

// Get the current language.
var currentLanguage = navigator.language;

// Create a select element to select the language.
var languageSelect = document.getElementById("language-select");

// Add a language option for each supported language.
var supportedLanguages = ["en", "fr", "de", "es", "zh-CN"];
for (var i = 0; i < supportedLanguages.length; i++) {
  var option = document.createElement("option");
  option.value = supportedLanguages[i];
  option.text = supportedLanguages[i];
  languageSelect.appendChild(option);
}

// Set the default language.
languageSelect.value = currentLanguage;

// Listen for the change event on the language select element.
languageSelect.addEventListener("change", function() {
  // Get the selected language.
  var selectedLanguage = languageSelect.value;

  // Translate the page to the selected language.
  var translatedText = translate(document.body.innerHTML, selectedLanguage);

  // Set the page content to the translated text.
  document.body.innerHTML = translatedText;
})

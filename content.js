chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.text) {
    fetch('https://api.languagetool.org/v2/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `text=${encodeURIComponent(request.text)}&language=en-US`
    })
    .then(response => response.json())
    .then(data => {
      let correctedText = request.text;
      data.matches.forEach(match => {
        correctedText = correctedText.replace(match.context.text, match.replacements[0].value);
      });
      alert(`Corrected Text: ${correctedText}`);
    })
    .catch(error => console.error('Error:', error));
  }
});

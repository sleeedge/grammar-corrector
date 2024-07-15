chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.text) {
    fetch('https://api.grammarapi.com/1.0/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify({ text: request.text })
    })
    .then(response => response.json())
    .then(data => {
      let correctedText = data.correctedText;
      alert(`Corrected Text: ${correctedText}`);
    })
    .catch(error => console.error('Error:', error));
  }
});

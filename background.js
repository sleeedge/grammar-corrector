chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "correctText",
    title: "Correct Grammar",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "correctText") {
    chrome.tabs.sendMessage(tab.id, { text: info.selectionText });
  }
});

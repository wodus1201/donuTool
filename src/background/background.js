chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url && (tab.url.startsWith("http://") || tab.url.startsWith("https://"))) {
    chrome.storage.local.get("donuToolActive", (data) => {
      if (data.donuToolActive) {
        chrome.scripting.executeScript({
          target: { tabId },
          files: ["content/content.js"],
        });
      }
    });
  }
});

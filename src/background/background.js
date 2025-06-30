chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === "complete") {
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

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url && (tab.url.startsWith("http://") || tab.url.startsWith("https://"))) {
    chrome.storage.local.get("donuToolActive", (data) => {
      if (data.donuToolActive) {
        chrome.scripting.executeScript({
          target: { tabId },
          files: ["overlay/injectToolBarUI.js"],
        });
      }
    });
  }
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "goToNextTab") {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (activeTabs) => {
        const currentIndex = activeTabs[0].index;
        const nextIndex = (currentIndex + 1) % tabs.length;
        chrome.tabs.update(tabs[nextIndex].id, { active: true });
      });
    });
    return true;
  }
  if (message.action === "goToPreviousTab") {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (activeTabs) => {
        const currentIndex = activeTabs[0].index;
        const previousIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        chrome.tabs.update(tabs[previousIndex].id, { active: true });
      });
    });
    return true;
  }
});

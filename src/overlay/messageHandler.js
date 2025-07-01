export function handleMessageFromPopUp() {
  chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "requestFullscreen") {
      document.documentElement.requestFullscreen();
    }
    if (message.action === "removeToolbar") {
      const element = document.getElementById("donuTool-toolBar");
      if (element) element.remove();
    }
  });
}

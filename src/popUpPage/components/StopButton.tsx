export default function StopButton() {
  const removeToolBarUI = async () => {
    const tabs = await chrome.tabs.query({});
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id!, { action: "removeToolbar" });
    });
    chrome.storage.local.set({ donuToolActive: false });
  };

  return (
    <button
      onClick={removeToolBarUI}
      className="font-semibold absolute top-3 text-xs left-17 px-3.5 py-2 flex cursor-pointer items-center justify-center rounded-full text-red-400 bg-gray-100 p-1 shadow transition duration-300 hover:shadow-md">
      종료
    </button>
  );
}

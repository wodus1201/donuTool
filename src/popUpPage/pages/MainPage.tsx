import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  const navigateToSettingPage = () => {
    navigate("/setting");
  };

  const addToolBarUI = async () => {
    const tabs = await chrome.tabs.query({});
    tabs.forEach((tab) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id! },
        files: ["content/content.js"],
      });
    });
    chrome.storage.local.set({ donuToolActive: true });
  };

  const removeToolBarUI = async () => {
    const tabs = await chrome.tabs.query({});
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id!, { action: "removeToolbar" });
    });
    chrome.storage.local.set({ donuToolActive: false });
  };

  return (
    <>
      <h2 className="text-3xl mb-4 font-black">DonuTool</h2>
      <button
        id="fullscreenButton"
        className="font-semibold px-3.5 py-2 flex cursor-pointer items-center justify-center rounded-xl text-gray-600 bg-gray-100 p-1 shadow transition duration-300 hover:shadow-md">
        전체화면
      </button>
      <button
        onClick={addToolBarUI}
        className="font-semibold absolute top-3 text-xs right-31 px-3.5 py-2 flex cursor-pointer items-center justify-center rounded-full text-gray-600 bg-gray-100 p-1 shadow transition duration-300 hover:shadow-md">
        시작
      </button>
      <button
        onClick={removeToolBarUI}
        className="font-semibold absolute top-3 text-xs right-17 px-3.5 py-2 flex cursor-pointer items-center justify-center rounded-full text-gray-600 bg-gray-100 p-1 shadow transition duration-300 hover:shadow-md">
        종료
      </button>
      <button
        onClick={navigateToSettingPage}
        className="font-semibold absolute top-3 text-xs right-3 px-3.5 py-2 flex cursor-pointer items-center justify-center rounded-full text-gray-600 bg-gray-100 p-1 shadow transition duration-300 hover:shadow-md">
        설정
      </button>
    </>
  );
}

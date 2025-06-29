import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  const navigateToSettingPage = () => {
    navigate("/setting");
  };

  const removeToolBar = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id!, {
        action: "removeToolbar",
      });
    });
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
        onClick={removeToolBar}
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

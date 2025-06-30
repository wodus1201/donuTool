import GoBackButton from "@/popUpPage/components/GoBackButton";
import donuToolBar from "@/assets/donuToolBar.png";

export default function SettingPage() {
  return (
    <>
      <GoBackButton />
      <div className="text-2xl font-bold mb-7">설정</div>
      <img src={donuToolBar} className="w-[150px] h-[150px] mb-7"></img>
      <div className="flex justify-center items-center mb-5">
        <div className="grid grid-cols-5 grid-rows-2 gap-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center bg-white w-[35px] h-[35px] rounded-full text-xs font-black text-gray-500">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

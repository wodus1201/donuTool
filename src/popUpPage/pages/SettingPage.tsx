export default function SettingPage() {
  return (
    <>
      <div className="text-2xl font-bold mb-7">설정</div>
      <div className="rounded-2xl w-[200px] h-[150px] mb-7 flex justify-center items-center bg-white">툴바UI</div>
      <div className="w-[300px] h-[100px] flex justify-center items-center">
        <div className="grid grid-cols-5 grid-rows-2 gap-2 w-full h-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center bg-white rounded-full text-xs">
              상호작용{i + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

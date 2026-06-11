export default function SearchSection() {
    return (
          <div className="mt-10 w-[665px] h-[210px] rounded-[20px] bg-[#D9D9D9]/10 backdrop-blur-lg border-2 border-[#FF9237]">
                <div className="px-6 py-5 h-full flex flex-col justify-center gap-2">
                    <p className="text-[#FB7200] font-orbitron font-bold text-[14px] text-left">Długość okna. Wpisz wartość od 1-6 godzin</p>
                    <div className="flex items-center gap-4">
                        <input
                            className="flex-1 rounded-[10px] border-1 border-white bg-transparent text-[14px] text-white p-3 font-orbitron font-medium placeholder:text-white/50 outline-none"
                            placeholder="np. 2h"/>
                        <button className="bg-[#FB7200] hover:bg-[#e56a00] text-white font-orbitron font-bold text-[14px] px-8 py-3 rounded-[10px] whitespace-nowrap transition-colors">
                            Szukaj okno
                        </button>
                    </div>
                </div>
            </div>
    )
}
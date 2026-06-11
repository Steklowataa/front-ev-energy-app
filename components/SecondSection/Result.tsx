export default function Result() {
    return (
        <>
        <div>
            <h1 className="font-orbitron font-bold text-[30px] text-white items-start justify-start mt-10">WYNIKI WYSZUKIWANIA:</h1>
            <div className="animate-fadeIn hover:scale-105 transition-transform w-[320px] h-[210px] rounded-[10px] bg-[#54FF3E]/10 border-1 border-[#54FF3E] shadow-[0_0_30px_rgba(84,255,62,1)]">
            <div className="flex flex-col items-start pl-4 pt-4">
                <h1 className="font-sans font-medium text-white">wt. 10 cze, 2:00-4:00</h1>
                 <div className="flex items-start mt-8">
                    <span className="font-orbitron text-[44px] font-extralight text-white leading-none">
                        83
                    </span>
                    <span className="font-orbitron text-[24px] text-[#D9D9D9] font-light mt-2 ml-2">OAZ %</span>
                </div>
                <div className="font-sans text-[#54FF3E] text-[14px] mt-2">Najlepsze okno</div>
                <div className="font-sans font-medium text-[#D9D9D9] text-[14px] mt-8">Wind 10. Solar 20. Inne 10</div>
            </div>

            </div>
        </div>
        </>
    )
}
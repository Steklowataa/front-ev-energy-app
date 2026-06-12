import type { ChargingWindow } from "../../types/energy"
import { formatDate, formatTime } from "../../utils/timeFunctions"
import rankStyles from "../../utils/rankingStyles"


interface Props {
    results: ChargingWindow[],
}

export default function Result({ results }: Props) {
    return (
        <>
            <h1 className="font-orbitron font-bold text-[30px] text-white mt-10 mb-5 w-[865px] text-left">WYNIKI WYSZUKIWANIA:</h1>
            <div className="flex gap-4">
                {results.map((w) => {
                    const style = rankStyles[w.rank]
                    return (
                        <div key={w.rank}
                            className={`flex-1 rounded-[10px] ${style.bg} border ${style.border} backdrop-blur-sm ${style.shadow} w-[320px] h-[200px]`}>
                            <div className="flex flex-col items-start pl-4 pt-4 pb-4">
                                <h2 className="font-sans font-medium text-white">{formatDate(w.from)}. {formatTime(w.from)}–{formatTime(w.to)}</h2>
                                <div className="flex items-start mt-8">
                                    <span className="font-orbitron text-[44px] font-extralight text-white leading-none">
                                        {w.cleanEnergyPercent}
                                    </span>
                                    <span className="font-orbitron text-[24px] text-[#D9D9D9] font-light mt-2 ml-2">OAZ %</span>
                                </div>
                                <div className={`font-sans text-[14px] mt-2 ${style.labelColor}`}>{style.label}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
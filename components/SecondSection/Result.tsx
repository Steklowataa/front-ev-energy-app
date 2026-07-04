import type { ChargingWindow } from "../../types/energy"
import { formatDate, formatTime } from "../../utils/timeFunctions"
import rankStyles from "../../utils/rankingStyles"
import { useTranslation } from "react-i18next"

interface Props {
    results: ChargingWindow[]
}

export default function Result({ results }: Props) {
    const { t } = useTranslation()
    return (
        <>
            <h1 className="font-orbitron font-bold text-[22px] md:text-[30px] text-white mt-10 mb-5 w-full max-w-[865px] text-left">
                {t("result.title")}
            </h1>
            <div className="flex flex-col md:flex-row gap-4 w-full max-w-[865px]">
                {results.map((w) => {
                    const style = rankStyles[w.rank]
                    return (
                        <div key={w.rank}
                            className={`w-full md:flex-1 rounded-[10px] ${style.bg} border ${style.border} backdrop-blur-sm ${style.shadow} min-h-[160px] md:min-h-[200px]`}>
                            <div className="flex flex-col items-start p-4">
                                <h2 className="font-sans font-medium text-white text-[13px] md:text-[15px]">
                                    {formatDate(w.from)}. {formatTime(w.from)}–{formatTime(w.to)}
                                </h2>
                                <div className="flex items-start mt-4 md:mt-8">
                                    <span className="font-orbitron text-[36px] md:text-[44px] font-extralight text-white leading-none">
                                        {w.cleanEnergyPercent}
                                    </span>
                                    <span className="font-orbitron text-[18px] md:text-[24px] text-[#D9D9D9] font-light mt-2 ml-2">
                                        {t("result.unit")}
                                    </span>
                                </div>
                                <div className={`font-sans text-[13px] md:text-[14px] mt-2 ${style.labelColor}`}>
                                    {t(`ranking.${w.rank}`)}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
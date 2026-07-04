import ChartComponent from "./ChartComponent"
import type { PropsForSmall } from "../../types/intensity"
import { formatDate} from "../../utils/timeFunctions"
import { useTranslation } from "react-i18next"

export default function EnergyComponentSmall({ nextDays, selectedDay }: PropsForSmall) {
    const { t } = useTranslation()
    return (
        <>
        <div className="animate-fadeIn w-[280px] h-[340px] rounded-[20px] bg-[#D9D9D9]/10 backdrop-blur-sm border-2 border-[#FF9237] shadow-[0_0_30px_rgba(77,84,100,1)] flex flex-col items-center justify-center">
            {/* <div className="flex flex-col justify-center items-center"> */}
                <p className="font-sans text-[#D9D9D9] text-bold text-[16px]">
                    {t("energy.energyAt")} {formatDate(nextDays?.date)}
                </p>
                <p className="font-sans text-[16px] text-[#FF9237] font-bold">{nextDays?.index.toUpperCase()}</p>
                <div className="flex items-start mt-2 mb-2">
                    <span className="font-sans text-[44px] font-extralight text-white leading-none">{nextDays?.averageForecast ?? '---'}</span>
                    <span className="font-sans text-[14px] text-[#D9D9D9] font-light mt-2 ml-2">{t('energy.unit')}</span>
                </div>
                <ChartComponent day={selectedDay} />
            </div>
        </>
    )
}
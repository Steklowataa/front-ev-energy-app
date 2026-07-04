import ChartComponent from "./ChartComponent"
import type { Props } from "../../types/intensity"
import { formatDate, formatTimeToday } from "../../utils/timeFunctions"
import { useTranslation } from "react-i18next"

export default function EnergyComponent({ days, intensity, selectDay }: Props) {
    const { t } = useTranslation()
    if (!intensity || !days) return <div>loading</div>

    return (
        <div className="animate-fadeIn w-[85vw] max-w-[250px] md:max-w-[300px] lg:max-w-[312px] rounded-[20px] bg-[#D9D9D9]/10 backdrop-blur-sm border-2 border-[#FF9237] shadow-[0_0_30px_rgba(77,84,100,1)] flex flex-col items-center justify-center py-6 md:py-2">
            <p className="font-sans text-[#D9D9D9] font-bold text-[13px] md:text-[18px]">
                {t("energy.energyAt")} {formatDate(days[0].date)} o {formatTimeToday()}
            </p>
            <p className="font-sans text-[20px] md:text-[26px] text-[#FF9237] font-bold">
                {intensity.intensity.index.toUpperCase()}
            </p>
            <div className="flex items-start mt-2 mb-2 md:mt-2 md:mb-2">
                <span className="font-sans text-[48px] md:text-[64px] font-extralight text-white leading-none">
                    {intensity.intensity.forecast ?? intensity.intensity.actual}
                </span>
                <span className="font-sans text-[16px] md:text-[24px] text-[#D9D9D9] font-light mt-2 ml-2">
                    {t('energy.unit')}
                </span>
            </div>
            <ChartComponent day={selectDay} />
        </div>
    )
}
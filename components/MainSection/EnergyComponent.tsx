import ChartComponent from "./ChartComponent"
import type { Props } from "../../types/intensity"
import { formatDate, formatTimeToday} from "../../utils/timeFunctions"
import { useTranslation } from "react-i18next"

export default function EnergyComponent({ days, intensity, selectDay }: Props) {
    const { t } = useTranslation()
    if (!intensity || !days) return <div>loading</div>

    return (
        <div className="animate-fadeIn w-[312px] h-[400px] rounded-[20px] bg-[#D9D9D9]/10 backdrop-blur-sm border-2 border-[#FF9237] shadow-[0_0_30px_rgba(77,84,100,1)] flex flex-col items-center justify-center">
            <p className="font-sans text-[#D9D9D9] text-bold text-[20px]">
                {t("energy.energyAt")} {formatDate(days[0].date )} o {formatTimeToday()}
            </p>
            <p className="font-sans text-[26px] text-[#FF9237] font-bold">
                {intensity.intensity.index.toUpperCase()}
            </p>
            <div className="flex items-start mt-2 mb-2">
                <span className="font-sans text-[64px] font-extralight text-white leading-none">
                    {intensity.intensity.forecast ?? intensity.intensity.actual}
                </span>
                <span className="font-sans text-[24px] text-[#D9D9D9] font-light mt-2 ml-2">{t('energy.unit')}</span>
            </div>
            <ChartComponent day={selectDay} />
        </div>
    )
}
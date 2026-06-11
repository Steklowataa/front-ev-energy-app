import ChartComponent from "./ChartComponent"
import type { PropsForSmall } from "../../types/intensity"

export default function EnergyComponentSmall({ days,nextDays }: PropsForSmall) {
    const date = nextDays?.date
    return (
        <>
        <div className="animate-fadeIn w-[280px] h-[340px] rounded-[20px] bg-[#D9D9D9]/10 backdrop-blur-sm border-2 border-[#FF9237] shadow-[0_0_30px_rgba(77,84,100,1)] flex flex-col items-center justify-center">
            {/* <div className="flex flex-col justify-center items-center"> */}
                <p className="font-sans text-[#D9D9D9] text-bold text-[16px]">
                    Energia{" "} {date ? new Date(date).toLocaleDateString('pl-PL', {day: 'numeric',month: 'short'}): "---"}
                </p>
                <p className="font-sans text-[16px] text-[#FF9237] font-bold">{nextDays?.index.toUpperCase()}</p>
                <div className="flex items-start mt-2 mb-10">
                    <span className="font-sans text-[44px] font-extralight text-white leading-none">{nextDays?.averageForecast ?? '---'}</span>
                    <span className="font-sans text-[14px] text-[#D9D9D9] font-light mt-2 ml-2">gCO2/kWh</span>
                </div>
                <ChartComponent day={days?.[1]} />
            </div>
        </>
    )
}
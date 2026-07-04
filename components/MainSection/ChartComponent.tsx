import { PieChart, Pie, Cell } from 'recharts'
import { useWindowSize } from '../../hooks/useWindowSize'
import type { DailyGenerationSummary } from '../../types/energy'
import { useTranslation } from "react-i18next"
import { FUEL_TYPES } from '../../types/fuel'

interface Props {
    day: DailyGenerationSummary | undefined
}

const fuels = Object.values(FUEL_TYPES)

const FUEL_COLORS: Record<string, string> = {
    coal: '#f97316',
    gas: '#facc15',
    imports: '#94a3b8',
    other: '#F4A563',
    biomass: '#22c55e',
    nuclear: '#3AC522',
    hydro: '#229FC5',
    wind: '#22C5BD',
    solar: '#ADC522'
}

export default function ChartComponent({ day }: Props) {
    const { t } = useTranslation()
    const { width } = useWindowSize()

    if (!day) return null

    // rozmiar wykresu zależny od szerokości ekranu
    const isSmallScreen = width < 768
    const chartSize = isSmallScreen ? 90 : 120
    const innerRadius = isSmallScreen ? 25 : 35
    const outerRadius = isSmallScreen ? 40 : 55

    const chartData = day.averageMix
        .filter(item => item.perc > 0 && fuels.some(f => f === item.fuel))
        .map(item => ({ name: item.fuel, value: item.perc }))

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center w-full px-2 mb-2 md:mb-5">
                <span className="font-sans text-[24px] md:text-[30px] font-light text-[#54FF3E] inline">
                    {day.cleanEnergyPercent}%{' '}
                    <span className="text-[12px] md:text-[14px] text-[#FF9237] font-medium">
                        {t("charging.cleanPercent")}
                    </span>
                </span>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
                <PieChart width={chartSize} height={chartSize}>
                    <Pie
                        data={chartData}
                        cx={chartSize / 2}
                        cy={chartSize / 2}
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        dataKey="value"
                        strokeWidth={0}>
                        {chartData.map((entry, index) => (
                            <Cell key={index} fill={FUEL_COLORS[entry.name] ?? '#ccc'} />
                        ))}
                    </Pie>
                </PieChart>
                <div className="flex flex-col gap-1">
                    {chartData.map((entry, index) => (
                        <div key={index} className="flex items-center gap-1 md:gap-2">
                            <div className="w-2 h-2 rounded-sm shrink-0" style={{ backgroundColor: FUEL_COLORS[entry.name] ?? '#ccc' }} />
                            <span className="text-white text-[8px] md:text-[9px] font-orbitron">
                                {t(`fuels.${entry.name}`)}: {entry.value}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
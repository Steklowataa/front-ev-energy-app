import { PieChart, Pie, Cell } from 'recharts'
import type { DailyGenerationSummary } from '../../types/energy'
import { useTranslation } from "react-i18next"

interface Props {
    day: DailyGenerationSummary | undefined
}

const fuels = ['coal', 'gas', 'imports', 'other', 'solar', 'wind', 'nuclear', 'biomass', 'hydro']

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
    if (!day) return null

    const chartData = day.averageMix
        .filter(item => item.perc > 0 && fuels.includes(item.fuel))
        .map(item => ({ name: item.fuel, value: item.perc }))

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center w-full px-2 mb-5">
                <span className="font-sans text-[30px] font-light text-[#54FF3E] inline">{day.cleanEnergyPercent}% <span className="text-[14px] text-[#FF9237] font-medium">{t("charging.cleanPercent")}</span></span>
            </div>
            <div className="flex items-center gap-4">
                <PieChart width={120} height={120}>
                    <Pie
                        data={chartData}
                        cx={60}
                        cy={60}
                        innerRadius={35}
                        outerRadius={55}
                        dataKey="value"
                        strokeWidth={0}>
                        {chartData.map((entry, index) => (
                            <Cell key={index} fill={FUEL_COLORS[entry.name] ?? '#ccc'} />
                        ))}
                    </Pie>
                </PieChart>
                <div className="flex flex-col gap-1">
                    {chartData.map((entry, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: FUEL_COLORS[entry.name] ?? '#ccc' }} />
                            <span className="text-white text-[9px] font-orbitron">
                                {t(`fuels.${entry.name}`)}: {entry.value}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
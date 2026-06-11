import { PieChart, Pie, Cell } from 'recharts'
import { DailyGenerationSummary } from '../types/energy'

interface Props {
    day: DailyGenerationSummary
}

const dirtyFuels = ['coal', 'gas', 'imports', 'other']


const FUEL_COLORS: Record<string, string> = {
    coal: '#f97316',
    gas: '#facc15',
    imports: '#94a3b8',
    other: '#F4A563',
    'Czysta energia': '#22c55e',
}

export default function ChartComponent({day}: Props) {
    if(!day) return null

    const charData = [
        ...day.averageMix
            .filter(item => item.perc > 0 && dirtyFuels.includes(item.fuel))
            .map(item => ({name: item.fuel, value: item.perc})),
        { name: 'Czysta energia', value: day.cleanEnergyPercent}
    ]


    return (
        <div className="flex items-center gap-6 p-2">
           <PieChart width={140} height={140}>
                <Pie
                    data={charData}
                    cx={70}
                    cy={70}
                    innerRadius={40}
                    outerRadius={60}
                    dataKey="value"
                    strokeWidth={0}>
                    {charData.map((entry, index) => (
                        <Cell key={index} fill={FUEL_COLORS[entry.name] ?? '#ccc'}/>
                    ))}
                </Pie>
            </PieChart>
            <div className="flex flex-col gap-2 w-[100px]">
                {charData.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div
                            className="w-3 h-3"
                            style={{ backgroundColor: FUEL_COLORS[entry.name] ?? '#ccc'}}
                        />
                        <span className="text-white text-[12px] font-orbitron">
                            {entry.name}: {entry.value}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
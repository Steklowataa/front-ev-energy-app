import { useState, useEffect } from "react"
import { Intensity, DailyGenerationSummary, DailyIntensitySummary } from "../types/energy"
import { GetCurrentIntensity, GetDailyGenerationSummary, GetNextDaysForecast} from "../services/EnergyService"
import EnergyComponent from "../components/EnergyComponent"
import EnergyComponentSmall from "../components/EnergyComponentSmall"


export default function HomePage() {
    const [intensity, setIntensity] = useState<Intensity | null>(null)
    const [days, setDays] = useState<DailyGenerationSummary[] | null>(null)
    const [nextDays, setNextDays] = useState<DailyIntensitySummary[] | null>(null)
    
    useEffect(() => {
        GetCurrentIntensity().then(setIntensity).catch(console.error)
        GetDailyGenerationSummary().then(setDays).catch(console.error)
        GetNextDaysForecast().then(setNextDays).catch(console.error)
    }, [])

    return (
        <main
            style={{ backgroundImage: "url('/images/planet-background.avif')" }}
            className="min-h-screen bg-cover bg-center bg-no-repeat">
            <div className="px-70 pt-20">
                <div className="text-[60px] font-orbitron font-bold space-y-0">
                    <h1 className="text-[#FFFFFF]/60">SMART EV CHARGING</h1>
                    <h1 className="text-[#FF9237] -mt-7">DASHBOARD</h1>
                </div>
                <div>
                    <h2 className="mt-5 font-sans text-white text-[22px] font-light w-[700px]">
                        Śledź brytyjską sieć energetyczną. Aktualny i prognozowany udział źródeł energii - dziś, jutro i pojutrze
                    </h2>
                </div>
                <div className="flex justify-center gap-8 mt-10 items-center">
                    <EnergyComponent days={days} intensity={intensity} selectDay={days?.[0]} />
                    <EnergyComponentSmall days={days} intensity={intensity} selectDay={days?.[1]} nextDays={nextDays?.[1]} />
                    <EnergyComponentSmall days={days} intensity={intensity} selectDay={days?.[2]} nextDays={nextDays?.[2]} />
                </div>
            </div>
        </main>
    )
}
import EnergyComponent from "./EnergyComponent"
import EnergyComponentSmall from "./EnergyComponentSmall"
import type { DailyGenerationSummary, DailyIntensitySummary, Intensity } from "../../types/energy"

interface Props {
    intensity: Intensity | undefined
    days: DailyGenerationSummary[] | undefined
    nextDays: DailyIntensitySummary[] | undefined
    isMainReady: DailyGenerationSummary[] | undefined
    isSmallReady: DailyIntensitySummary[] | undefined

}

export default function MainSection({ intensity, days, nextDays, isMainReady, isSmallReady }: Props) {
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
                    {isMainReady ? (
                        <EnergyComponent
                            days={days}
                            intensity={intensity}
                            selectDay={days?.[0]}
                        />
                    ) : (
                        <div className="w-[312px] h-[400px] bg-white/10 rounded-[20px] animate-pulse" />
                    )}
                    {isSmallReady ? (
                        <>
                            <EnergyComponentSmall
                                days={days}
                                selectedDay={days?.[1]}
                                nextDays={nextDays?.[1]}/>
                            <EnergyComponentSmall
                                days={days}
                                selectedDay = {days?.[2]}
                                nextDays={nextDays?.[2]}/>
                        </>
                    ) : (
                        <>
                            <div className="w-[280px] h-[340px] bg-white/10 rounded-[20px] animate-pulse" />
                            <div className="w-[280px] h-[340px] bg-white/10 rounded-[20px] animate-pulse" />
                        </>
                    )}

                </div>
            </div>
        </main>
    )
}
import EnergyComponent from "./EnergyComponent"
import EnergyComponentSmall from "./EnergyComponentSmall"
import type { DailyGenerationSummary, DailyIntensitySummary, Intensity } from "../../types/energy"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "./LanguageSwitcher"

interface Props {
    intensity: Intensity | undefined
    days: DailyGenerationSummary[] | undefined
    nextDays: DailyIntensitySummary[] | undefined
    isMainReady: DailyGenerationSummary[] | undefined
    isSmallReady: DailyIntensitySummary[] | undefined
}

export default function MainSection({ intensity, days, nextDays, isMainReady, isSmallReady }: Props) {
    const { t } = useTranslation()
    return (
        <main
            style={{ backgroundImage: "url('/images/planet-background.avif')" }}
            className="min-h-screen bg-cover bg-center bg-no-repeat">
            <LanguageSwitcher />
            <div className="px-6 md:px-16 lg:px-24 pt-16 md:pt-20">
                <div className="font-orbitron font-bold">
                    <h1 className="text-[28px] md:text-[50px] lg:text-[60px] lg:ml-45 text-[#FFFFFF]/60">
                        {t('header.title1')}
                    </h1>
                    <h1 className="text-[28px] md:text-[50px] lg:text-[60px] lg:ml-45 text-[#FF9237] md:-mt-7">
                        {t('header.title2')}
                    </h1>
                </div>
                <h2 className="mt-4 font-sans text-white text-[14px] md:text-[18px] lg:text-[22px] lg:ml-45 font-light w-full max-w-[700px]">
                    {t('header.subtitle')}
                </h2>
                <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-center gap-6 mt-10 items-center pb-16">
                    {isMainReady ? (
                        <EnergyComponent
                            days={days}
                            intensity={intensity}
                            selectDay={days?.[0]}
                        />
                    ) : (
                        <div className="w-[85vw] max-w-[312px] h-[400px] bg-white/10 rounded-[20px] animate-pulse" />
                    )}
                    {isSmallReady ? (
                        <>
                            <EnergyComponentSmall
                                days={days}
                                selectedDay={days?.[1]}
                                nextDays={nextDays?.[1]} />
                            <EnergyComponentSmall
                                days={days}
                                selectedDay={days?.[2]}
                                nextDays={nextDays?.[2]} />
                        </>
                    ) : (
                        <>
                            <div className="w-[85vw] max-w-[280px] h-[340px] bg-white/10 rounded-[20px] animate-pulse" />
                            <div className="w-[85vw] max-w-[280px] h-[340px] bg-white/10 rounded-[20px] animate-pulse" />
                        </>
                    )}
                </div>
            </div>
        </main>
    )
}
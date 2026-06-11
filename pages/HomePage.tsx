import { useState, useEffect } from "react"
import type { Intensity, DailyGenerationSummary, DailyIntensitySummary } from "../types/energy"
import {GetCurrentIntensity,GetDailyGenerationSummary,GetNextDaysForecast} from "../services/EnergyService"
import MainSection from "../components/MainSection/MainSection"
import SecondSection from "../components/SecondSection/SecondSection"

export default function HomePage() {
    const [intensity, setIntensity] = useState<Intensity | undefined>(undefined)
    const [days, setDays] = useState<DailyGenerationSummary[] | undefined>(undefined)
    const [nextDays, setNextDays] = useState<DailyIntensitySummary[] | undefined>(undefined)
    const isMainReady = intensity && days
    const isSmallReady = nextDays

    useEffect(() => {
        Promise.all([
            GetCurrentIntensity(),
            GetDailyGenerationSummary(),
            GetNextDaysForecast()
        ])
            .then(([intensityRes, daysRes, nextDaysRes]) => {
                setIntensity(intensityRes)
                setDays(daysRes)
                setNextDays(nextDaysRes)
            })
            .catch(console.error)
    }, [])

    return (
      <>
        <MainSection isMainReady={isMainReady} isSmallReady={isSmallReady} intensity={intensity} days={days} nextDays={nextDays}/>
        <SecondSection/>
      </>
    )
}
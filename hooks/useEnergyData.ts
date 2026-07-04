import { useState, useEffect } from "react"
import type { Intensity, DailyGenerationSummary, DailyIntensitySummary } from "../types/energy"
import { GetCurrentIntensity, GetDailyGenerationSummary, GetNextDaysForecast } from "../services/EnergyService"

interface EnergyData {
    intensity: Intensity | undefined
    days: DailyGenerationSummary[] | undefined
    nextDays: DailyIntensitySummary[] | undefined
    isLoading: boolean
    error: string | null
}

export function useEnergyData(): EnergyData {
    const [intensity, setIntensity] = useState<Intensity | undefined>(undefined)
    const [days, setDays] = useState<DailyGenerationSummary[] | undefined>(undefined)
    const [nextDays, setNextDays] = useState<DailyIntensitySummary[] | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

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
            .catch(() => setError("Nie udało się pobrać danych. Sprawdź połączenie i odśwież stronę."))
            .finally(() => setIsLoading(false))
    }, [])

    return { intensity, days, nextDays, isLoading, error }
}
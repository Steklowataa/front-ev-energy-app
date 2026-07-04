import type { DailyGenerationSummary, Intensity, DailyIntensitySummary } from "./energy"


export interface Props {
    days: DailyGenerationSummary[] | undefined
    intensity: Intensity | undefined
    selectDay: DailyGenerationSummary | undefined
}

export interface PropsForSmall {
    days: DailyGenerationSummary[] | undefined
    nextDays: DailyIntensitySummary | undefined
    selectedDay: DailyGenerationSummary | undefined
}

export interface MainProps {
    intensity: Intensity | undefined
    days: DailyGenerationSummary[] | undefined
    nextDays: DailyIntensitySummary[] | undefined
    isMainReady: DailyGenerationSummary[] | undefined
    isSmallReady: DailyIntensitySummary[] | undefined
}
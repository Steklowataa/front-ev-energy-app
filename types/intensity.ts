import { DailyGenerationSummary, Intensity } from "./energy"


export interface Props {
    days: DailyGenerationSummary[] | null
    intensity: Intensity | null
    selectDay: DailyGenerationSummary | null
}
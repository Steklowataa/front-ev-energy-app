export interface Intensity {
    from: string,
    to: string,
    intensity: IntensitySlot

}

export interface IntensitySlot {
    forecast: number | undefined,
    actual: number | undefined,
    index: string
}

export interface GenerationMixItem{
    fuel: string,
    perc: number
}

export interface DailyGenerationSummary {
    date: string,
    averageMix: GenerationMixItem[],
    cleanEnergyPercent: number
}

export interface ChargingWindow {
    from: string,
    to: string,
    cleanEnergyPercent: number,
    rank: number
}

export interface DailyIntensitySummary {
    date: string,
    averageForecast: string,
    index: string
}

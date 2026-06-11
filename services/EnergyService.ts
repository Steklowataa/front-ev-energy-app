import { Intensity, DailyGenerationSummary, DailyIntensitySummary} from "../types/energy";

const BASE_URL = "http://localhost:5170/api/energy"

export async function GetCurrentIntensity(): Promise<Intensity> {
    const response = await fetch(`${BASE_URL}/current`)
    if (!response.ok) throw new Error("failed to fetch intensity")
    const json = await response.json()
    return json.data[0]
}

export async function GetDailyGenerationSummary(): Promise<DailyGenerationSummary[]> {
    const response = await fetch(`${BASE_URL}/generation/three-days`)
    if (!response.ok) throw new Error("failed to fetch generation summary")
    const json = await response.json()
    console.log(json)
    return json
}

export async function GetNextDaysForecast(): Promise<DailyIntensitySummary[]> {
    const response = await fetch(`${BASE_URL}/intensity/three-days`)
    if (!response.ok) throw new Error("failed to fetch intensity summary")
    const json = await response.json()
    return json

}
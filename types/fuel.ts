export const FUEL_TYPES = {
    BIOMASS: 'biomass',
    NUCLEAR: 'nuclear',
    HYDRO: 'hydro',
    WIND: 'wind',
    SOLAR: 'solar',
    GAS: 'gas',
    COAL: 'coal',
    IMPORTS: 'imports',
    OTHER: 'other',
} as const


export const ALL_FUELS: string[] = Object.values(FUEL_TYPES)
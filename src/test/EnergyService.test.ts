import { describe, it, expect, vi, beforeEach } from 'vitest'
import { GetChargingWindows, GetCurrentIntensity, GetDailyGenerationSummary } from '../../services/EnergyService'

const mockFetch = vi.fn()
vi.stubGlobal('fetch', mockFetch)

beforeEach(() => {
    mockFetch.mockReset()
})

function mockResponse(data: unknown, ok = true) {
    mockFetch.mockResolvedValueOnce({
        ok,
        json: async () => data,
    })
}

describe('GetChargingWindows', () => {
    it('wywoluje poprawny url z parametrem hours', async () => {
        mockResponse([])

        await GetChargingWindows({ hours: 3 })

        expect(mockFetch).toHaveBeenCalledWith(
            'http://localhost:5170/api/energy/charging-window/top/3'
        )
    })

    it('rzuca error gdy response nie jest ok', async () => {
        mockResponse(null, false)

        await expect(GetChargingWindows({ hours: 2 })).rejects.toThrow('failed to fetch charging windows')
    })

})

describe('GetCurrentIntensity', () => {
    it('zwraca pierwszy element z data', async () => {
        const mock = {
            data: [{ from: '2026-06-13T10:00Z', to: '2026-06-13T10:30Z', intensity: { forecast: 120, actual: null, index: 'low' } }]
        }
        mockResponse(mock)

        const result = await GetCurrentIntensity()

        expect(result.intensity.index).toBe('low')
        expect(result.intensity.forecast).toBe(120)
    })

    it('rzuca error gdy response nie jest ok', async () => {
        mockResponse(null, false)

        await expect(GetCurrentIntensity()).rejects.toThrow('failed to fetch intensity')
    })
})

describe('GetDailyGenerationSummary', () => {
    it('zwraca tablice trzech dni', async () => {
        const mock = [
            { date: '2026-06-13', averageMix: [], cleanEnergyPercent: 80 },
            { date: '2026-06-14', averageMix: [], cleanEnergyPercent: 75 },
            { date: '2026-06-15', averageMix: [], cleanEnergyPercent: 70 },
        ]
        mockResponse(mock)

        const result = await GetDailyGenerationSummary()

        expect(result).toHaveLength(3)
    })

    it('rzuca error gdy response nie jest ok', async () => {
        mockResponse(null, false)

        await expect(GetDailyGenerationSummary()).rejects.toThrow('failed to fetch generation summary')
    })
})
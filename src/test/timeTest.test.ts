import { describe, it, expect } from 'vitest'
import { formatTime, formatDate } from '../../utils/timeFunctions'

describe('formatTime', () => {
    it('zwraca pusty string dla undefined', () => {
        expect(formatTime(undefined)).toBe("")
    })

    it('zwraca godzine w formacie HH:MM', () => {
        const result = formatTime('2026-06-13T10:00Z')
        expect(result).toMatch(/^\d{2}:\d{2}$/)
    })

    it('uwzglednia strefe czasowa Europe/Warsaw (UTC+2 latem)', () => {
        const result = formatTime('2026-06-13T10:00Z')
        expect(result).toBe('12:00')
    })

    it('uwzglednia strefe czasowa Europe/Warsaw (UTC+1 zima)', () => {
        const result = formatTime('2026-01-13T10:00Z')
        expect(result).toBe('11:00')
    })
})

describe('formatDate', () => {
    it('zwraca pusty string dla undefined', () => {
        expect(formatDate(undefined)).toBe("")
    })

    it('zwraca date w formacie DD.MM', () => {
        const result = formatDate('2026-06-13T10:00Z')
        expect(result).toMatch(/^\d{2}\.\d{2}$/)
    })

    it('zwraca poprawna date', () => {
        const result = formatDate('2026-06-13T10:00Z')
        expect(result).toBe('13.06')
    })

    it('nie przesuwa daty przy polnocy w strefie Warsaw', () => {
        const result = formatDate('2026-06-12T23:00Z')
        expect(result).toBe('13.06')
    })
})
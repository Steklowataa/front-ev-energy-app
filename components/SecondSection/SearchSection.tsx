import { useState } from "react"
import { GetChargingWindows } from "../../services/EnergyService"
import type { ChargingWindow} from "../../types/energy"
import Result from "./Result"
import Error from "./Error"
import { useTranslation } from "react-i18next"


export default function SearchSection() {
    const { t } = useTranslation()
    const [result, setResult] = useState<ChargingWindow[] | undefined>(undefined)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [hours, setHours] = useState("")
        
    async function handleSearch() {
        const parsed = parseInt(hours)
        if(!parsed || parsed < 1 || parsed > 6) {
            showError("podaj wartosc od 1 do 6")
            return
        }
        setError("")
        setLoading(true)
        try {
            const response = await GetChargingWindows({hours: parsed})
            setResult(response)
            setHours("")
        } catch {
            showError("brak polaczenia z backendem")
        } finally {
            setLoading(false)
        }
    }

    function showError(msg: string) {
        setError(msg)
        setTimeout(() => {
            setError("")
        }, 3000)
    }
        return (
            <>
            {error && <Error errorText={error}/>}
                <div className="mx-auto mt-10 w-[665px] h-[210px] rounded-[20px] bg-[#D9D9D9]/10 backdrop-blur-lg border-2 border-[#FF9237]">
                    <div className="px-6 py-5 h-full flex flex-col justify-center gap-2">
                        <p className="text-[#FB7200] font-orbitron font-bold text-[14px] text-left">{t("charging.hours")}</p>
                        <div className="flex items-center gap-4">
                            <input
                                value={hours}
                                onChange={(e) => setHours(e.target.value.replace(/\D/g, ""))}
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                className="flex-1 rounded-[10px] border-1 border-white bg-transparent text-[14px] text-white p-3 font-orbitron font-medium placeholder:text-white/50 outline-none"
                                placeholder="np. 2h"/>
                            <button 
                                onClick={handleSearch}
                                disabled={loading}
                                className="bg-[#FB7200] hover:bg-[#e56a00] cursor-pointer text-white font-orbitron font-bold text-[14px] px-8 py-3 rounded-[10px] whitespace-nowrap transition-colors">
                                {t("charging.search")}
                            </button>
                        </div>
                    </div>
                </div>
                {result && result.length > 0 && (
                    <Result results={result}/>
                )}
            </>
        )
    }
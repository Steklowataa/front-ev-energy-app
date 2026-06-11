import SearchSection from "./SearchSection"
import Result from "./Result"


export default function SecondSection() {
    return (
        <>
        <main style={{ backgroundImage: "url('/images/energy-background.png')" }}
            className="min-h-screen bg-cover bg-no-repeat bg-[center_60px]">
             <div 
            className="flex flex-col items-center justify-center text-center">
            <h1 className="inline text-[40px] font-orbitron font-bold space-y-0 mt-20 text-white w-[700px] leading-tight"> 
                <p className="text-[#FB7200] inline">Kiedy ładować?</p> Znajdź okno czystej  <p className="text-[#FB7200] inline">energii</p>
            </h1>
            <h2 className="font-sans text-[24px] text-white mt-7 font-light w-[600px] leading-tight">Wybierz długość okna i znajdź najlepszy przedział czasowy w ciągu 48h</h2>
            <SearchSection/>
            <Result/>
        </div>
        </main>
        </>
    )
}
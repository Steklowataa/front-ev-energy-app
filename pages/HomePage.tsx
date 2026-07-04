import MainSection from "../components/MainSection/MainSection"
import SecondSection from "../components/SecondSection/SecondSection"
import ErrorComponent from "../components/MainSection/ErrorComponent"
import { useEnergyData } from "../hooks/useEnergyData"

export default function HomePage() {
   const { intensity, days, nextDays, error } = useEnergyData()
    const isMainReady = intensity && days
    const isSmallReady = nextDays

    if (error) return (
       <ErrorComponent error={error}/>
    )

    return (
      <>
        <MainSection isMainReady={isMainReady} isSmallReady={isSmallReady} intensity={intensity} days={days} nextDays={nextDays}/>
        <SecondSection/>
      </>
    )
}
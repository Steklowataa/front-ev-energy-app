import SearchSection from "./SearchSection"
import { useTranslation } from "react-i18next"

export default function SecondSection() {
    const { t } = useTranslation()
    return (
        <main
            style={{ backgroundImage: "url('/images/energy-background.png')" }}
            className="min-h-screen bg-cover bg-no-repeat bg-[center_20px]">
            <div className="flex flex-col items-center justify-center text-center px-6 md:px-10">
                <h1 className="text-[28px] md:text-[40px] font-orbitron font-bold mt-10 text-white w-full max-w-[700px] leading-tight animate-fadeInDown"
                    style={{ animationDelay: '0.1s' }}>
                    <span className="text-[#FB7200]">{t('charging.title')} </span>
                    {t("charging.title2")}
                    <span className="text-[#FB7200]">{t("charging.title3")}</span>
                </h1>
                <h2 className="font-sans text-[16px] md:text-[24px] text-white mt-7 font-light w-full max-w-[600px] leading-tight">
                    {t("charging.subtitle")}
                </h2>
                <div className="w-full max-w-[865px]">
                    <SearchSection />
                </div>
            </div>
        </main>
    )
}
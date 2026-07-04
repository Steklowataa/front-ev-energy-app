import { useTranslation } from "react-i18next"


export default function ErrorComponent({error}: {error: string}) {
    const { t } = useTranslation()
    return (
         <div className="min-h-screen flex items-center justify-center"
            style={{ backgroundImage: "url('/images/planet-background.avif')" }}>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-[20px] p-10 border-2 border-[#FF9237]">
                <p className="text-white text-[20px] font-sans">{t(error)}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="cursor-pointer mt-6 px-6 py-2 bg-[#FF9237] text-white rounded-lg font-orbitron">
                    {t("error.refresh")}
                </button>
            </div>
        </div>
    )
}
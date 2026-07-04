import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
    const { i18n } = useTranslation()
    const current = i18n.language

    return (
        <div className="flex justify-end gap-2 px-6">
            <button
                onClick={() => i18n.changeLanguage('pl')}
                className={`cursor-pointer font-orbitron text-[14px] ${current === 'pl' ? 'text-[#FF9237]' : 'text-white'}`}>
                PL
            </button>
            <span className="text-white/40">|</span>
            <button
                onClick={() => i18n.changeLanguage('en')}
                className={`cursor-pointer font-orbitron text-[14px] ${current === 'en' ? 'text-[#FF9237]' : 'text-white'}`}>
                EN
            </button>
        </div>
    )
}
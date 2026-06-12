const rankStyles: Record<number, { border: string; bg: string; shadow: string; label: string; labelColor: string }> = {
    1: {
        border: "border-[#54FF3E]",
        bg: "bg-[#54FF3E]/10",
        shadow: "shadow-[0_0_30px_rgba(84,255,62,1)]",
        label: "Najlepsze okno",
        labelColor: "text-[#54FF3E]",
    },
    2: {
        border: "border-[#4D5464]",
        bg: "bg-[#4D5464]/10",
        shadow: "",
        label: "2 miejsce",
        labelColor: "text-[#4D5464]",
    },
    3: {
        border: "border-[#4D5464]",
        bg: "bg-[#4D5464]/10",
        shadow: "",
        label: "3 miejsce",
        labelColor: "text-[#4D5464]",
    },
}

export default rankStyles;
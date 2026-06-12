export const formatTimeToday = () => {
    return new Date().toLocaleTimeString('pl-PL',{hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Warsaw'})
}

export const formatTime = (iso: string | undefined) => {
    if(!iso) return ""
    return new Date(iso).toLocaleTimeString('pl-PL',{hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Warsaw'})
}


export const formatDate = (iso: string | undefined) => {
    if(!iso) return ""
    return new Date(iso).toLocaleDateString('pl-PL',{day: '2-digit', month: '2-digit', timeZone: 'Europe/Warsaw'})
}
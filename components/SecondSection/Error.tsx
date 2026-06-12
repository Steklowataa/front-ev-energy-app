export default function Error({ errorText}: {errorText: string}) {
    return (
        <>
        <div className="fixed top-4 px-6 py-3 shadow-lg -translate-x-1/2 z-50 left-1/2 bg-red-600 font-bold rounded-[5px] text-white font-orbitron text-[14px]">
            { errorText }
        </div>
        </>
    )
}
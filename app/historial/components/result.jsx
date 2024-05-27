export default function Result({ match, isNextMatch }) {

    if (isNextMatch) {
        return (
            <p className="text-primary font-bebas text-2xl">VS</p>
        )
    }
    
    return (
        <>
            <p className="text-primary font-bebas text-2xl">{match.golesEpis}</p>
            <p className="text-primary font-bebas text-2xl">-</p>
            <p className="text-primary font-bebas text-2xl ">{match.golesRival}</p>
        </>
    )
}
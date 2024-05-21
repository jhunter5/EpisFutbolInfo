export default function TeamCard({ team }) {
    return(
        <div className="flex flex-col justify-center items-center h-full">
            <img src={team.logo} alt=""  className="max-h-24 w-20 h-15"/>
            <p className="text-center text-secondary font-assistant">{team.name}</p>
        </div>
    )
}
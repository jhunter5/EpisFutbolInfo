import TeamCard from "./teamCard";
import Result from "./result";
import SurfaceContainerRounded from "./surfaceContainerRounded";

export default function SingleMatch({ match, isNextMatch }) {

    return (
        <SurfaceContainerRounded className={ match.local ? 'flex' : 'flex flex-row-reverse'}>
            <TeamCard team={{logo: "https://media.api-sports.io/football/teams/40.png", name:'Epis FC' }} />
            <Result match={match} isNextMatch={isNextMatch}/>
            <TeamCard team={{logo: `https://media.api-sports.io/football/teams/${match.randomShield}.png`, name: match.equipoRival }} />
        </SurfaceContainerRounded>
    )

}
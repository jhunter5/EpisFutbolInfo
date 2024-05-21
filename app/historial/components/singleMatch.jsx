import TeamCard from "./teamCard";
import Result from "./result";
import SurfaceContainerRounded from "./surfaceContainerRounded";

export default function SingleMatch({ match }) {

    if (match.local) {
            return (
                <SurfaceContainerRounded>
                    <TeamCard team={{logo: "https://media.api-sports.io/football/teams/40.png", name:'Epis FC' }} />
                    <Result match={match} />
                    <TeamCard team={{logo: `https://media.api-sports.io/football/teams/${match.randomShield}.png`, name: match.equipoRival }} />
                </SurfaceContainerRounded>
            )
        }
    else {
            return (
                <SurfaceContainerRounded>
                    <TeamCard team={{logo: `https://media.api-sports.io/football/teams/${match.randomShield}.png`, name: match.equipoRival }} />
                    <Result match={match} />
                    <TeamCard team={{logo: "https://media.api-sports.io/football/teams/40.png", name:'Epis FC' }} />
                </SurfaceContainerRounded>
            )
    }
}
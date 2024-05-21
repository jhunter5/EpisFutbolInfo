import TeamCard from "./teamCard";
import SurfaceContainerLowRounded from "./surfaceContainerLowRounded";
import SurfaceContainerRounded from "./surfaceContainerRounded";

export default function NextMatch({ match }) {
    return (
        <SurfaceContainerLowRounded>
            <SurfaceContainerRounded>
            <TeamCard team={{logo: "https://media.api-sports.io/football/teams/40.png", name:'Liverpool' }} />
            <p className="text-2xl text-primary">VS</p>
            <TeamCard team={{logo: `https://media.api-sports.io/football/teams/50.png`, name:'Manchester City' }} />
            </ SurfaceContainerRounded>
        </SurfaceContainerLowRounded >
        
    );
}



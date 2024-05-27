import SurfaceContainerLowRounded from "./surfaceContainerLowRounded";
import SeeMoreButton from "./seeMoreButton";
import SingleMatch from "./singleMatch";
import { useQuery } from '@tanstack/react-query'

async function fetchNextMatch() {
    const response = await fetch('https://6649364d4032b1331bed7e34.mockapi.io/api/nextMatch', {
        method: 'GET',
    });
    const data = await response.json();
    return data[1];
}

export default function NextMatch() {

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['nextMatch'],
        queryFn: fetchNextMatch,
    })
    
    return (
        <SurfaceContainerLowRounded>
            {isPending && <p>Cargando...</p>}
            {isError && <p>Error: {error.message}</p>}
            {data && <SingleMatch match={data} isNextMatch={true} />}
            <SeeMoreButton onClick={() => console.log("Ver más")} />
        </SurfaceContainerLowRounded >
        
    );
}



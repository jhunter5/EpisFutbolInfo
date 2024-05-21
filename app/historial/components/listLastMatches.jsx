'use client'

import SingleMatch from "./singleMatch";
import SurfaceContainerLowRounded from "./surfaceContainerLowRounded";
import { useEffect } from "react";
import { useQuery } from '@tanstack/react-query'
async function fetchMatches() {
    const response = await fetch('https://6649364d4032b1331bed7e34.mockapi.io/api/historialPartidos', {
        method: 'GET',
    });
    const data = await response.json();
    return data;
}

export default function ListLastMatches() {

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['lastMatches'],
        queryFn: fetchMatches,
    })

    return(
        
        <SurfaceContainerLowRounded>
            {isPending && <p>Cargando...</p>}
            {isError && <p>Error: {error.message}</p>}
            {data && data.map((match) => <SingleMatch key={match.id} match={match} />)}
        </ SurfaceContainerLowRounded>
    )
}
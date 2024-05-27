'use client'
import ListLastMatches from "./components/listLastMatches"
import NextMatch from "./components/nextMatch"
import PlayersCard from "./components/playersCard"

import {QueryClient, QueryClientProvider } from '@tanstack/react-query'


export default function Historial() {
    const queryClient = new QueryClient()

    return(
        <QueryClientProvider client={queryClient}>
            <main className="flex min-h-screen justify-center items-center bg-surface p-10">
                <div className="w-11/12 h-full p-4 mt-8"> 
                    <div className="flex flex-col items-center w-full gap-5">
                        <h1 className="font-bebas text-primary text-3xl">Next Match</h1>
                        <p className="font-assistant mb-2">Team's next match</p>
                        <NextMatch />
                        <h1 className="font-bebas text-primary text-3xl mt-4">History</h1>
                        <p className="font-assistant mb-2">The last 3 games</p>
                        <ListLastMatches />
                        <h1 className="font-bebas text-primary text-3xl mt-4">Know the players</h1>
                        <PlayersCard />
                    </div>
                </div>
            </main>
        </QueryClientProvider>
    )
}
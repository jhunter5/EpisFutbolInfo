'use client'
import ListLastMatches from "./components/listLastMatches"
import NextMatch from "./components/nextMatch"
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Historial() {
    const queryClient = new QueryClient()

    return(
        <QueryClientProvider client={queryClient}>
            <main className="flex min-h-screen justify-center items-center bg-surface p-10">
                <div className="flex w-11/12 h-full p-4 gap-20 mt-8"> 
                    <div className="w-4/5">
                        <img src="/aside-soccer.jpg" alt="" className="h-full w-full" />
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <h1>Proximo Partido</h1>
                        <p>El proximo partido del equipo</p>
                        <NextMatch />
                        <h1>Historial</h1>
                        <p>Historial de partidos jugados por el equipo</p>
                        <ListLastMatches />
                    </div>
                </div>
            </main>
        </QueryClientProvider>
    )
}
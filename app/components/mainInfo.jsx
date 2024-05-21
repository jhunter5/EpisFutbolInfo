import Link from "next/link"

export default function MainInfo() {
    return (
        <section className="flex flex-col items-center text-on-surface z-10 bg-surface-container p-8 rounded-xl max-w-lg gap-4">
          <h1 className="text-7xl  text-primary font-bebas">EpiStats</h1>
          <p className="text-lg text-center font-assistant tracking-normal">
            EpiStats its an aplicattion that allows you to see the statistics of the <span className="text-secondary">EPIS team</span> team along with the statistics of the players.
          </p>
          <div className="flex flex-row justify-center w-full gap-12">
            <Link className="bg-primary-container text-surface-container rounded-xl p-2 " href={'/historial'}><span className="text-on-primary-container">View the stats</span> </Link>
            <Link className="bg-secondary-container text-surface-container rounded-xl p-2" href={'/login'}> <span className="text-on-secondary-container">About the team</span></Link>
          </div>
        </section>
    )
}
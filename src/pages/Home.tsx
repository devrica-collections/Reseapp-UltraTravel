import { useCountries } from '../hooks/useCountries'

function Home() {
    const { data: countries, status } = useCountries()

    if (status === 'pending') return <p>Laddar...</p>
    if (status === 'error') return <p>Kunde inte ladda länder.</p>

    return (
        <main>
        <h1>Länder</h1>
        <p role="status">{status}</p>
        <p>Antal hämtade länder: {countries.length}</p>
        <ul>
            {countries.map((countries) => (
                <p key={countries.name}>
                    {countries.name} – {countries.region}
                </p>
            ))}
        </ul>
        </main>
    )
}

export default Home

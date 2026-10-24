import { useEffect, useState } from 'react'
import { getCountries } from '../services/countriesService'
import type { Country } from '../types/countries.type'

function Home() {
    const [countries, setCountries] = useState<Country[]>([])
    const [status, setStatus] = useState('Hämtar länder...')

    useEffect(() => {
        let ignore = false

        async function loadCountries() {
            try {
                const fetchedCountries = await getCountries()

                if (ignore) return

                setCountries(fetchedCountries)
                console.log('Länder från API:', fetchedCountries)
                setStatus('Länderna är hämtade.')
            } catch (error) {
                if (ignore) return

                console.error('Anropet misslyckades:', error)
                setStatus('Kunde inte hämta länder. Se felet i konsolen.')
            }
        }

        loadCountries()

        return () => {
            ignore = true
        }
    }, [])

    return (
        <main>
        <h1>Länder</h1>
        <p role="status">{status}</p>
        <p>Antal hämtade länder: {countries.length}</p>
        <ul>
            {countries.map((country) => (
                <li key={country.names.common}>
                    {country.names.common} – {country.region}
                </li>
            ))}
        </ul>
        </main>
    )
}

export default Home

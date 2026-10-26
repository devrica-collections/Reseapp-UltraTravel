import { useParams } from 'react-router'

function CountryDetail() {
    const { code } = useParams()

    return (
        <main>
            <p>Landkod: {code}</p>
        </main>
    )
}

export default CountryDetail
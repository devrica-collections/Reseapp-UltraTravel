import { useParams } from 'react-router'

function CountryDetail() {
    const { code } = useParams()

    return (
        <>
            <p>Landkod: {code}</p>
        </>
    )
}

export default CountryDetail
import { useWiki } from '../hooks/useWiki'

type CountryInfoProps = {
    countryName: string
}

function CountryInfo({ countryName }: CountryInfoProps) {
    const { data: wiki, status, refetch } = useWiki(countryName)

    if (!countryName) {
        return <p>Landets namn saknas.</p>
    }

    if (status === 'pending') {
        return <p role="status">Hämtar information från Wikipedia...</p>
    }

    if (status === 'error') {
        return (
            <div>
                <p role="alert">Kunde inte hämta information från Wikipedia.</p>
                <button type="button" onClick={() => refetch()}>
                    Försök igen
                </button>
            </div>
        )
    }

    return (
        <section>
            <h2>Om {countryName}</h2>

            {wiki.thumbnail && (
                <img
                    src={wiki.thumbnail.source}
                    alt={`Artikelbild för ${wiki.title}`}
                    width={wiki.thumbnail.width}
                    height={wiki.thumbnail.height}
                />
            )}

            <p lang="en">{wiki.extract}</p>

            <p>
                Källa: <a href={wiki.content_urls.desktop.page}>Wikipedia</a>
            </p>
        </section>
    )
}

export default CountryInfo
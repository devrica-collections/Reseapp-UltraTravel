import { useWiki } from '../hooks/useWiki'
import ContentSkeleton from './ContentSkeleton'

type CountryInfoProps = {
    countryName: string
}

function CountryInfo({ countryName }: CountryInfoProps) {
    const { data: wiki, status, refetch } = useWiki(countryName)

    if (!countryName) {
        return <p>Landets namn saknas.</p>
    }

    if (status === 'pending') {
        return <ContentSkeleton label="Hämtar information från Wikipedia..." showImage />
    }

    if (status === 'error') {
        return (
            <div className="detail-panel">
                <h2>Om {countryName}</h2>
                <p role="alert">Kunde inte hämta information från Wikipedia.</p>
                <button className="detail-retry" type="button" onClick={() => refetch()}>
                    Försök igen
                </button>
            </div>
        )
    }

    return (
        <section className="detail-panel">
            <h2>Om {countryName}</h2>

            <div className={`wiki-content ${wiki.thumbnail ? 'wiki-content-with-image' : ''}`}>
                {wiki.thumbnail && (
                    <img
                        className="wiki-image"
                        src={wiki.thumbnail.source}
                        alt={`Artikelbild för ${wiki.title}`}
                        width={wiki.thumbnail.width}
                        height={wiki.thumbnail.height}
                    />
                )}
                <p lang="en" className="wiki-text">{wiki.extract}</p>
            </div>

            <p className="wiki-source">
                Källa: <a href={wiki.content_urls.desktop.page}>Wikipedia</a>
            </p>
        </section>
    )
}

export default CountryInfo

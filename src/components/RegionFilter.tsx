type RegionFilterProps = {
    region: string
    onRegionChange: (region: string) => void
}

const regions = [
    '',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
]

function RegionFilter({ region, onRegionChange }: RegionFilterProps) {
    return (
        <div role="group" aria-label="Filtrera efter region">
            {regions.map((value) => (
                <button
                    key={value}
                    type="button"
                    aria-pressed={region === value}
                    onClick={() => onRegionChange(value)}
                >
                    {value || 'All'}
                    {region === value && (
                        <span aria-hidden="true"> ✓</span>
                    )}
                </button>
            ))}
        </div>
    )
}

export default RegionFilter
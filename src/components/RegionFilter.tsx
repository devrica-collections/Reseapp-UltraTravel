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
        <div className="space-y-3 text-left">
            <p id="region-filter-label" className="text-sm font-semibold">Region</p>
            <div
                role="group"
                aria-labelledby="region-filter-label"
                className="flex flex-wrap gap-2"
            >
                {regions.map((value) => (
                    <button
                        key={value}
                        type="button"
                        aria-pressed={region === value}
                        className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                            region === value
                                ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                                : 'border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent hover:text-accent-foreground'
                        }`}
                        onClick={() => onRegionChange(value)}
                    >
                        {value || 'All'}
                        <span aria-hidden="true" className="inline-block w-3">
                            {region === value ? '✓' : ''}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default RegionFilter

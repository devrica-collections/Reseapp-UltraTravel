import { Skeleton } from '@/components/ui/skeleton'

function CountryListSkeleton() {
    return (
        <div role="status">
            <span className="sr-only">Hämtar länder...</span>
            <div aria-hidden="true" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }, (_, index) => (
                    <div key={index} className="space-y-4 rounded-lg border border-border p-4">
                        <Skeleton className="h-32 w-full motion-reduce:animate-none" />
                        <Skeleton className="h-6 w-3/4 motion-reduce:animate-none" />
                        <Skeleton className="h-4 w-1/2 motion-reduce:animate-none" />
                        <Skeleton className="h-4 w-2/3 motion-reduce:animate-none" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CountryListSkeleton

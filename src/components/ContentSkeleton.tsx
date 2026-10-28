import { Skeleton } from '@/components/ui/skeleton'

type ContentSkeletonProps = {
    label: string
    showImage?: boolean
}

function ContentSkeleton({ label, showImage = false }: ContentSkeletonProps) {
    return (
        <div role="status" className="my-6 rounded-lg border border-border p-5">
            <span className="sr-only">{label}</span>
            <div aria-hidden="true" className="space-y-4">
                <Skeleton className="h-7 w-1/2 motion-reduce:animate-none" />
                {showImage && (
                    <Skeleton className="h-36 w-full max-w-sm motion-reduce:animate-none" />
                )}
                <Skeleton className="h-4 w-full motion-reduce:animate-none" />
                <Skeleton className="h-4 w-5/6 motion-reduce:animate-none" />
                <Skeleton className="h-4 w-2/3 motion-reduce:animate-none" />
            </div>
        </div>
    )
}

export default ContentSkeleton

type PaginationProps = {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    const buttonClassName = 'inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors enabled:hover:border-primary/50 enabled:hover:bg-accent enabled:hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-40'

    return (
        <nav
            aria-label="Paginering"
            className="my-8 flex flex-wrap items-center justify-center gap-3 px-4 sm:gap-5"
        >
            <button
                type="button"
                className={buttonClassName}
                disabled={currentPage <= 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Föregående
            </button>

            <span aria-live="polite" className="text-sm font-medium text-muted-foreground">
                Sida {currentPage} av {totalPages}
            </span>

            <button
                type="button"
                className={buttonClassName}
                disabled={currentPage >= totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Nästa
            </button>
        </nav>
    )
}

export default Pagination

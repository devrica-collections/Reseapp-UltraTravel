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
    return (
        <nav aria-label="Paginering">
            <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Föregående
            </button>

            <span aria-live="polite">
                Sida {currentPage} av {totalPages}
            </span>

            <button
                type="button"
                disabled={currentPage >= totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Nästa
            </button>
        </nav>
    )
}

export default Pagination
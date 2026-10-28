import { Link, NavLink } from 'react-router'

function Navbar() {
    return (
        <header className="border-b border-border bg-background text-foreground">
            <nav
                aria-label="Huvudnavigation"
                className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6"
            >
                <Link
                    to="/"
                    className="rounded text-xl font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                    UltraTravel
                </Link>
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `inline-flex min-h-11 items-center rounded-md px-4 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                            isActive
                                ? 'bg-primary text-primary-foreground'
                                : 'hover:bg-accent hover:text-accent-foreground'
                        }`
                    }
                >
                    Home
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar

import { Link } from "react-router";

function Footer() {
    return (
        <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border py-6 text-[0.9rem] text-muted-foreground">
            <p>2026 Alla rättigheter förbehållna</p>
            <div className="flex gap-4">
                <Link to="/about">Om oss</Link>
            </div>
        </footer>
    )
}

export default Footer
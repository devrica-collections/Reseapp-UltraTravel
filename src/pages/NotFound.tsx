import { Link } from 'react-router'

function NotFound() {
    return (
        <main>
            <h1>Sidan hittades inte, adressen du försökte öppna finns inte.</h1>
            <Link to="/">Till home</Link>
        </main>
    )
}

export default NotFound
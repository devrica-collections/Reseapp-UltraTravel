import { Link } from 'react-router'

function NotFound() {
    return (
        <>
            <h1>Sidan hittades inte, adressen du försökte öppna finns inte.</h1>
            <Link to="/">Till home</Link>
        </>
    )
}

export default NotFound
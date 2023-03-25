import Link from 'next/link'
function ClientPage() {
    return (
        <div>
            <h1>The Client Page</h1>
            <ul>
                <li>
                    <Link href="/clients/ebrar">Ebrar</Link>
                </li>
                <li>
                    <Link href="/clients/tuna">tunanehri</Link>
                </li>
            </ul>
        </div>
    )
}

export default ClientPage
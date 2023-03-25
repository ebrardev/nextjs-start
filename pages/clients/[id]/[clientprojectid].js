import Link from 'next/link'
import { useRouter } from 'next/router'
function SelectedClientProjectPage() {

    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <h1>The Project Page for a Specific Project for a Selected Client</h1>
            <Link href="/">Back to home</Link>
        </div>
    )
}

export default SelectedClientProjectPage
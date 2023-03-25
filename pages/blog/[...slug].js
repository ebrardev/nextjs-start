import { useRouter } from "next/router"
import Link from "next/link"
function BlogPostPage() {

    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <h1>The Blog Post</h1>
            <Link href="/">Back to home</Link>
        </div>
    )
}

export default BlogPostPage
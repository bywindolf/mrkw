import Link from 'next/link'
import Main from './components/layout/main'

export default async function NotFound() {
    return (
        <Main>
            <div>
                <h2>Not Found: </h2>
                <p>Could not find requested resource</p>
                <p>
                    View <Link href="/blog">all posts</Link>
                </p>
            </div>
        </Main>
    )
}

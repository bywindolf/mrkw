import Link from 'next/link'
import Hero from './components/hero'
import Main from './components/main'
import PageSubHeadline from './components/page-sub-headline'
import Work from './components/work'

export default function Home() {
    return (
        <>
            <Hero>
                <h1>
                    Digital designer embrazing a updated role as frontend
                    developer.
                </h1>
                <p>Littery have beend coding since the age of MS-Dos.</p>
                <Link href="" className="button">
                    sdsd
                </Link>
            </Hero>
            <Main>
                <PageSubHeadline>Featured works</PageSubHeadline>
                <Work type="work" />
                <Work type="experience" />
            </Main>
        </>
    )
}

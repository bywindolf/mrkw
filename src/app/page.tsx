import Hero from "./(website)/components/Hero";
import Main from "./(website)/components/Main";
import PageSubHeadline from "./(website)/components/PageSubHeadline";
import Work from "./(website)/components/Work";

export default function Home() {
  return (
    <>
      <Hero>
        <h1>Hello hero</h1>
      </Hero>
      <Main>
        <PageSubHeadline>Featured works</PageSubHeadline>
        <Work />
      </Main>
    </>
  );
}

import Hero from "./components/Hero";
import Main from "./components/Main";
import PageSubHeadline from "./components/PageSubHeadline";
import Work from "./components/Work";

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

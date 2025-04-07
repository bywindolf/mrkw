import Hero from "./components/hero";
import Main from "./components/main";
import PageSubHeadline from "./components/page-sub-headline";
import Work from "./components/work";

export default function Home() {
  return (
    <>
      <Hero>
        <h1>Hello hero!</h1>
        <h2></h2>
      </Hero>
      <Main>
        <PageSubHeadline>Featured works</PageSubHeadline>
        <Work type="work" />
        <Work type="experience" />
      </Main>
    </>
  );
}

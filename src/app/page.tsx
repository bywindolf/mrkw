import Hero from "./(website)/components/Hero";
import Main from "./(website)/components/Main";
import SubHeadline from "./(website)/components/PageSubHeadline";

export default function Home() {
  return (
    <>
      <Hero>
        <h1>Hello hero</h1>
      </Hero>
      <Main>
        <SubHeadline>Featured works</SubHeadline>
      </Main>
    </>
  );
}

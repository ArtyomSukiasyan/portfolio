import Header from "../components/sections/header/Header";
import Preview from "../components/sections/preview/Preview";
import About from "../components/sections/about/About";
import Projects from "../components/sections/projects/Projects";
import Contact from "../components/sections/contact/Contact";

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <Preview />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

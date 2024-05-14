import { descriptionContent, fullName, LOGO } from "../constants/config";
import Head from "next/head";
import Header from "../components/sections/header/Header";
import Preview from "../components/sections/preview/Preview";
import About from "../components/sections/about/About";
import Projects from "../components/sections/projects/Projects";
import Contact from "../components/sections/contact/Contact";
import "../styles/globals.css";
import "../styles/theme.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>{fullName}</title>
        <meta name="description" content={descriptionContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${LOGO}</text></svg>`}
        />
      </Head>
      <Header />
      <Preview />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

import { descriptionContent, fullName } from "../constants/config";
import Head from "next/head";
import Header from "../components/header/Header";
import Preview from "../components/preview/Preview";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>{fullName}</title>
        <meta name="description" content={descriptionContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Preview />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

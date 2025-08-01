import Header from "../components/sections/header/Header";
import Preview from "../components/sections/preview/Preview";
import About from "../components/sections/about/About";
import Projects from "../components/sections/projects/Projects";
import Contact from "../components/sections/contact/Contact";
import PostHogClient from "../providers/posthog";

export default async function Home() {
  const posthog = await PostHogClient();

  posthog.capture({
    distinctId: "server",
    event: "Page Viewed",
    properties: {
      url: "/",
      timestamp: new Date().toISOString(),
    },
  });
  return (
    <>
      <Header />
      <Preview />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

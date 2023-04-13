import { descriptionContent, TITLE } from "../constants/config";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={descriptionContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>Portfolio</main>
    </>
  );
}

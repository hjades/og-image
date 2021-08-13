import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

const title = "Welcome to OG Image (Next.js) by Jade";

const Home: NextPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <Head>
        <title>OG Image (Next.js) | Jade</title>
        <meta
          name="description"
          content="OG Image (Next.js) | Made with 🧡  by Jade"
        />
        <meta property="og:image" content={`/t?title=${title}`} />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to OG Image (<a href="https://nextjs.org">Next.js</a>) by Jade
        </h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={title} src={`/t?title=${title}`} width="600px" />
      </main>
    </div>
  );
};

export default Home;

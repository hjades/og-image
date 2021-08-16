import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const defaultTitle = "Welcome to OG Image (Next.js) by Jade";

const Home: NextPage = () => {
  const { query } = useRouter();
  const title = query.title ? String(query.title) : defaultTitle;

  return (
    <div>
      <Head>
        <title>OG Image (Next.js) | Jade</title>
        <meta
          name="description"
          content="OG Image (Next.js) | Made with 🧡  by Jade"
        />
        <meta name="thumbnail" content={`/t?title=${title}`} />
        <meta property="og:image" content={`/t?title=${title}`} />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
			Testing goormIDE
        </h1>
        <p>
          Generate your thumbnail by adding <code>?title=YOUR_TITLE</code>{" "}
          behind the URL
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="Testing goormIDE" src="/api?title=Testing goormIDE" width="600px" />
      </main>
    </div>
  );
};

export default Home;

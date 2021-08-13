import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

const Other: NextPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <Head>
        <title>{query.title} | Jade</title>
        <meta
          name="description"
          content={`${query.title} | Made with 🧡  by Jade`}
        />
        <meta property="og:image" content={`/t?title=${query.title}`} />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to {query.title}</h1>
        {query.title && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt={String(query.title)}
            src={`/t?title=${query.title}`}
            width="600px"
          />
        )}
      </main>
    </div>
  );
};

export default Other;

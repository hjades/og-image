import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { query } = useRouter();
  const querystring = `?title=${query.title}&footer=${query.footer}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>OG Image (Next.js) | Jade</title>
        <meta
          name="description"
          content="OG Image (Next.js) | Made with 🧡  by Jade"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to OG Image (<a href="https://nextjs.org">Next.js</a>) by Jade
        </h1>
        <p className={styles.description}>
          Generate your image by adding{" "}
          <code>?title=YOUR_TITLE&footer=A_FOOTER</code> behind the URL
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={querystring} src={`/api${querystring}`} width="600px" />
      </main>
    </div>
  );
};

export default Home;

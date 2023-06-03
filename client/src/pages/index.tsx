import type { NextPage } from "next";
import Head from "next/head";

import Counter from "../features/counter/Counter";
import styles from "../styles/Home.module.css";

type DataType = {
  communicatingFromBackendToFrontend: boolean;
};

interface IndexPageProps {
  data: DataType;
}

const IndexPage: NextPage<IndexPageProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <section className={styles.section}>
            {data && (
              <span>{data.communicatingFromBackendToFrontend.toString()}</span>
            )}
          </section>
          <span>Learn </span>
          <a
            className={styles.link}
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className={styles.link}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={styles.link}
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className={styles.link}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};
export async function getStaticProps() {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? process.env.BACKEND_LOCAL_URL
      : process.env.BACKEND_PROD_URL;
  const res = await fetch(`${baseUrl}`);
  const data: DataType = await res.json();

  console.log(data);

  return {
    props: { data },
  };
}

export default IndexPage;

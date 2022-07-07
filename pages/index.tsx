import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="p-[0 2rem]">
      <Head>
        <title>Next Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen p-4 flex flex-1 flex-col justify-center items-center text-4xl">
        <h1 className="font-bold text-center">
          Welcome to{" "}
          <a
            href="https://github.com/andrecox/next-template"
            className="text-blue-500 underline decoration-transparent hover:decoration-blue-500 transition-all"
          >
            Next Template!
          </a>
        </h1>
        <h2 className="mt-2">
          Powered by{" "}
          <a
            href="https://nextjs.org"
            className="text-blue-500 underline decoration-transparent hover:decoration-blue-500 transition-all"
          >
            Next.js
          </a>
        </h2>

        <p className="text-center m-16 text-[1.5rem]">
          Get started by editing{" "}
          <code className="bg-[#fafafa] rounded-md p-[0.75rem] font-mono text-[1.1rem]">
            pages/index.js
          </code>
        </p>

        <div className="flex items-center justify-center flex-wrap max-w-[800px]">
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <p className="text-center mt-16 text-[1.5rem]">
          MobX state management built in!
        </p>
        <Link href="/mobx">
          <a className="text-blue-500 under text-xl underline decoration-transparent  hover:decoration-blue-500 transition-all">
            Check it out here
          </a>
        </Link>
      </main>
    </div>
  );
}
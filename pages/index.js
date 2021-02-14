import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const users = await db
    .collection("users")
    .find({})
    .sort({ metacritic: -1 })
    .limit(1000)
    .toArray();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}
export default function Home({users}) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ul>
        {users.map((user) => (
          <li key={user._id}>
            <h2>{user.username}</h2>
            <h3>{user.email}</h3>
            <p>{user.role}</p>
          </li>
        ))}
      </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

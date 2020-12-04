import Head from 'next/head'
import styles from './home.module.css'
import Link from 'next/link'
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Home() {
  const onLogin = () => { alert("login") };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Container maxWidth="md">
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome</h1>
          <h2>To view our subscription plans, please click on the link below</h2>
          <p>
            <Link  href="/subscription-plans">
              <Button variant="contained" color='primary'>Subscription Plans</Button>
            </Link>
          </p>
        </main>
      </Container>
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
    </>
  )
}

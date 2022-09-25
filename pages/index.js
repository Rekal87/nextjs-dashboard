import { Container } from '@mui/material';
import Head from 'next/head';
import Dashboard from '../components/Dashboard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Dashboard</title>
        <meta name='description' content='Just a Dashboard' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container maxWidth='false'>
        <div className='wrapper'>
          <Dashboard />
        </div>
      </Container>
    </div>
  );
}

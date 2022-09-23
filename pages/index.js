import { Container } from '@mui/material';
import Head from 'next/head';
import Profile from '../components/Profile';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Dashboard</title>
        <meta name='description' content='Just a Dashboard' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Sidebar />
      </Container>
    </div>
  );
}

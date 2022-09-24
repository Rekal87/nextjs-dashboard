import { Container } from '@mui/material';
import Head from 'next/head';
import Navbar from '../components/Navbar';
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
        <Navbar />
      </Container>
    </div>
  );
}

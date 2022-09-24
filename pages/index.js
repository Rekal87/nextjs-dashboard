import { Container } from '@mui/material';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Dashboard</title>
        <meta name='description' content='Just a Dashboard' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <div className='wrapper'>
          <PageTitle />
        </div>
      </Container>
    </div>
  );
}

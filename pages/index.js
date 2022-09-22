import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Dashboard</title>
        <meta name='description' content='Just a Dashboard' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sidebar />
    </div>
  );
}

import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main>{children}</main>
    </>
  );
}

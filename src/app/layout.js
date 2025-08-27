import './globals.css';
import Navbar from './components/navbar';

export const metadata = {
  title: 'LawBooks Dashboard',
  description: 'Dashboard for managing legal books and resources',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}

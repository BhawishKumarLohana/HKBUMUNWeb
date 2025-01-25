
import './globals.css'; // Make sure this line is present
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
export const metadata = {
  title: "HKBUMUN",
  description: "Together We Go",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Job Board',
  description: 'Find your dream job!',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <Navbar />
        <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <footer className="bg-gray-200 py-4 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Job Board. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
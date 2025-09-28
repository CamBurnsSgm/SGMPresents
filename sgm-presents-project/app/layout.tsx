import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Root layout for the SGM Presents application.
 *
 * This layout wraps all pages and provides a consistent header and footer.
 */
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <header className="bg-primary text-white">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <Link href="/" className="flex items-center gap-2">
              {/* Display the logo image. The file lives in the /public folder as logo.png */}
              <Image src="/logo.png" alt="SGM Presents logo" width={40} height={40} />
              <span className="text-xl font-bold">SGM Presents</span>
            </Link>
            <nav className="space-x-4">
              <Link href="/football" className="hover:underline">Football</Link>
              <Link href="/boxing" className="hover:underline">Boxing</Link>
              <Link href="/f1" className="hover:underline">F1</Link>
              <Link href="/music" className="hover:underline">Music</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/services" className="hover:underline">Services</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 container mx-auto px-6 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 text-sm text-gray-600 py-4">
          <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>© {new Date().getFullYear()} SGM Presents. All rights reserved.</p>
            <div className="space-x-4">
              <Link href="/legal/privacy" className="hover:underline">Privacy</Link>
              <Link href="/legal/terms" className="hover:underline">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
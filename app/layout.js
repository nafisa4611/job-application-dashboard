import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">QuickHire</Link>
            <div className="space-x-6">
              <Link href="/" className="text-gray-600 hover:text-black">Find Jobs</Link>
              <Link href="/admin" className="bg-black text-white px-4 py-2 rounded-lg text-sm">Post a Job</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
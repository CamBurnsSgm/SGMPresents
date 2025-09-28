import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="space-y-16">
      {/* Hero Section */}
      <div className="text-center py-20 bg-gray-50 rounded-lg shadow">
        <h2 className="text-4xl font-bold mb-4">Your voice. Your story.</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          SGM Presents is a multi‑channel network for sports and music fans. Explore our channels and get involved with short form content, stories and beyond.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Work with us
        </Link>
      </div>

      {/* Niche Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Football', href: '/football' },
          { title: 'Boxing', href: '/boxing' },
          { title: 'F1', href: '/f1' },
          { title: 'Music', href: '/music' }
        ].map(({ title, href }) => (
          <Link
            key={title}
            href={href}
            className="relative block h-48 rounded-lg overflow-hidden shadow group"
          >
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-2xl font-semibold text-gray-700">{title}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Introduction Section */}
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Who we are</h3>
        <p className="text-gray-700">
          We’re a team of creators, journalists and producers passionate about telling stories that matter. From vox pops on the high street to in‑depth features and challenges, we deliver short form content with personality.
        </p>
      </div>
    </section>
  );
}
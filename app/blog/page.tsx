import type { Metadata } from 'next';
import Link from 'next/link';
import posts from '@/lib/posts.json';

export const metadata: Metadata = {
  title: 'Blog | Property Management Consultants',
  description:
    'Property management insights, landlord tips, and North Alabama real estate news from Property Management Consultants, LLC.',
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl mb-4">Property Management Consultants Blog</h1>
          <p className="text-xl text-blue-100">
            Property management insights, landlord tips, and North Alabama real estate news.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {sorted.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <span className="text-gray-400 text-sm">·</span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl text-brand-navy mb-3 leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-blue transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-brand-blue font-semibold text-sm hover:underline"
                  >
                    Read article
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl mb-4">Own a rental in North Alabama?</h2>
          <p className="text-blue-100 text-lg mb-6">Book a free call and let&apos;s talk through your property and goals.</p>
          <Link
            href="/book-a-call"
            className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg text-lg hover:bg-white hover:text-brand-navy transition-colors"
          >
            Book a 15-Minute Owner Call
          </Link>
        </div>
      </section>
    </>
  );
}

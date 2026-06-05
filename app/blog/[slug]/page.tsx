import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import posts from '@/lib/posts.json';

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.content.trim().split('\n\n').filter(Boolean);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4 text-blue-200 text-sm">
            <Link href="/blog" className="hover:text-white transition-colors">← Blog</Link>
            <span>·</span>
            <span>{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl leading-tight">{post.title}</h1>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-brand-blue pl-5">
            {post.excerpt}
          </p>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
            {paragraphs.map((para, i) => (
              <p key={i} className="leading-relaxed">{para}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-brand-cream rounded-2xl p-8 text-center">
              <h3 className="text-2xl text-brand-navy mb-3">Have questions about your property?</h3>
              <p className="text-gray-600 mb-6">Book a free 15-minute call. We&apos;ll walk through your specific situation and give you clear answers.</p>
              <Link
                href="/book-a-call"
                className="inline-flex items-center px-6 py-3 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-blue transition-colors"
              >
                Book a 15-Minute Owner Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

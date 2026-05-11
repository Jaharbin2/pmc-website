import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const posts: Record<string, {
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
}> = {
  'property-management-huntsville-al': {
    title: 'Property Management in Huntsville, AL: What Landlords Need to Know',
    date: 'April 12, 2025',
    category: 'Landlord Guide',
    readTime: '6 min read',
    excerpt: "Huntsville is one of the fastest-growing cities in the Southeast — and that growth is reshaping its rental market. Here's what local landlords need to know about managing rental property in the Rocket City in 2025.",
    content: `Huntsville, Alabama has transformed dramatically over the past decade. Fueled by expansion at Redstone Arsenal, the arrival of major aerospace and defense contractors, and a booming tech sector at Cummings Research Park, the Rocket City is now one of the hottest real estate markets in the South.

For landlords, that's both an opportunity and a responsibility.

The Huntsville Rental Market in 2025

Vacancy rates in Huntsville remain among the lowest in the state. The influx of high-earning engineers, military families, and aerospace professionals has pushed rents upward and shortened the average time a quality property sits vacant. Well-priced, well-maintained properties in desirable neighborhoods — Jones Valley, Hampton Cove, Five Points, MidCity — frequently receive multiple applications within days of listing.

What Landlords Are Getting Wrong

The most common mistake local landlords make is underpricing. Fear of vacancy leads owners to list below market, which attracts the wrong tenant pool and leaves thousands of dollars on the table annually. A proper market analysis before every lease cycle is essential.

The second most common mistake: deferred maintenance. Huntsville's competitive rental market means tenants have options. Properties in poor condition don't just sit vacant longer — they attract tenants with fewer options, which often means higher-risk applicants.

Alabama Landlord-Tenant Law Basics

Alabama's landlord-tenant laws are governed primarily by the Alabama Uniform Residential Landlord and Tenant Act. Key points for Huntsville landlords:

Security deposits must be returned within 60 days of move-out. You must provide written notice before entering a tenant's property (typically 24 hours). Lease violations require proper written notice before pursuing eviction. Eviction requires a court filing — self-help evictions (changing locks, removing belongings) are illegal.

Why Professional Management Makes Sense in Huntsville

The Huntsville market moves fast. Listing delays cost money. Slow screening lets good applicants walk. Mishandled maintenance creates liability. For most landlords — especially those with jobs, families, or multiple properties — professional management isn't an expense, it's a protection.

At Property Management Consultants, we manage properties throughout Huntsville and the Tennessee Valley. Our pricing is simple: $250 once when we place a tenant, 10% monthly after that. No renewal fees, no inspection charges, no markups on repairs.`,
  },
  'property-management-cost-north-alabama': {
    title: 'How Much Does Property Management Cost in North Alabama?',
    date: 'March 28, 2025',
    category: 'Pricing',
    readTime: '5 min read',
    excerpt: "Property management fees in North Alabama vary widely — and the sticker price is often just the beginning. Here's a complete breakdown of what you'll actually pay, and how to compare companies fairly.",
    content: `One of the most common questions we hear from North Alabama landlords: "How much does property management cost?"

The honest answer is: it depends. Not just on the management fee, but on every additional charge a company layers in throughout the year.

The Standard Fee Structure

Most North Alabama property management companies charge a monthly management fee between 8% and 12% of monthly rent. At first glance, that feels comparable across companies. But the real cost difference shows up in the ancillary fees.

Fees That Add Up

Here are fees many management companies charge that you should ask about before signing:

Leasing fee: Typically 50–100% of one month's rent ($1,000–$2,000+) every time a new tenant is placed. Lease renewal fee: $150–$400 charged every year when an existing tenant renews. Inspection fee: $75–$150 per inspection, sometimes billed separately from management. Maintenance markup: 10–20% added on top of every contractor invoice. Setup / onboarding fee: $200–$500 just to get started. Move-out fee: Billed for conducting the move-out inspection.

A Real-World Comparison

Take a property renting at $1,400/month. With a typical management company you might pay $1,680 in management fees, $1,400 for leasing, $300 for renewal in Year 2, $300 for inspections, and $150 in maintenance markups — totaling over $3,800 in Year 1.

With Property Management Consultants: $1,680 in management + $250 leasing fee = $1,930. The difference is over $1,600 annually — on a single property.

Property Management Consultants' Approach

We charge $250 once when we place a tenant and 10% monthly. That's it. No renewal fees, no inspection fees, no maintenance markups. We built our pricing to be something you can explain to your spouse in one sentence.

Use our Net Income Calculator to see exactly what you'd keep with Property Management Consultants versus a typical competitor.`,
  },
  'tenant-screening-alabama-landlords': {
    title: 'Tenant Screening in Alabama: What Every Landlord Should Know',
    date: 'March 10, 2025',
    category: 'Tenant Management',
    readTime: '7 min read',
    excerpt: "Bad tenant placement is the most expensive mistake a landlord can make. Here's how professional screening works, what criteria are legally sound, and how Property Management Consultants protects your property.",
    content: `Nothing affects your experience as a landlord more than the quality of your tenant. A great tenant pays on time, cares for the property, and stays for years. A bad placement can cost $5,000–$15,000 in lost rent, eviction costs, and repairs.

Screening isn't just a checkbox — it's your first and most important line of defense.

The Legal Framework

In Alabama, tenant screening must comply with the federal Fair Housing Act, which prohibits discrimination based on race, color, religion, sex, national origin, disability, and familial status. This means your criteria must be applied consistently to every applicant, be objective and documented, and not have a disparate impact on protected classes.

Property Management Consultants' Screening Criteria

We apply the same standards to every applicant: Credit score minimum of 600. Verifiable gross monthly income of at least 3× the monthly rent. No evictions in the past 7 years. Criminal background reviewed individually based on nature, date, and severity. Prior landlord references checked for patterns of late payment, property damage, or lease violations. $40 application fee per adult covers credit, background, and eviction history searches.

Why Consistency Matters

The biggest Fair Housing risk isn't intentional discrimination — it's inconsistency. If you approve a tenant with a 590 credit score and later deny someone with a 600, that inconsistency creates liability. Document your criteria, apply them uniformly, and keep records.

The Cost of a Bad Placement

Alabama's eviction process, even when handled correctly, takes 4–8 weeks. During that period, you're collecting no rent. Add attorney fees (~$680 for a standard eviction), court costs, potential property damage, and the cost of re-leasing, and a single bad tenant can set you back $8,000–$15,000.

Good screening is worth every dollar of the application fee. At Property Management Consultants, we run full credit, criminal, and eviction searches, verify income, and contact prior landlords before presenting any applicant recommendation.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
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

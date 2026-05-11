import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reviews | Property Management Consultants',
  description:
    'Read what property owners and tenants say about Property Management Consultants in Huntsville, AL. All reviews from Google.',
};

const reviews = [
  {
    name: 'Lee Priest',
    stars: 5,
    type: 'Owner',
    text: 'Property Management Consultants have been great from day one. Mr. Jacob Harbin has gone above and beyond to accommodate both myself (owner) and the tenants. I highly recommend Property Management Consultants.',
  },
  {
    name: 'Matt G',
    stars: 5,
    type: 'Owner',
    text: 'Jacob and his team did a phenomenal job of securing tenants for my property in Huntsville. A+ in communication and patience. I will continue to use his team as my portfolio grows. Thanks!',
  },
  {
    name: 'Michelle Scott',
    stars: 5,
    type: 'Owner',
    text: 'We received a referral from our neighbor and called Jacob at Property Management Consultants to help find tenants for two of our rental properties. This is the first time that we have worked with a property manager and working with Jacob put our mind at ease — when we had questions, he had answers. Jacob is very professional, personable, and responsive. We would recommend Property Management Consultants for your property management needs.',
  },
  {
    name: 'Lila Harris',
    stars: 5,
    type: 'Owner',
    text: 'Jacob has been above and beyond in finding me a new tenant and assisting in preparing the house for move-in. I have been very happy with Jacob and his team!',
  },
  {
    name: 'Justin Carpenter',
    stars: 5,
    type: 'Owner',
    text: 'Jacob is great and I feel that my house is in good hands with Property Management Consultants.',
  },
  {
    name: 'Chad Howard',
    stars: 5,
    type: 'Owner',
    text: 'Jacob was a pleasure to work with and made renting our home stress free. Jacob is in constant communication with us and always responsive if we have questions. My wife and I are extremely pleased with the professionalism and attention to detail that Jacob and his company displayed during our transition to our next duty assignment. I highly recommend Jacob — he is the best Property Manager I have had the pleasure of working with, across two rental properties over the past 13 years.',
  },
  {
    name: 'Christian Neidhamer',
    stars: 5,
    type: 'Owner',
    text: 'Great company to work with, could not be happier! Makes the whole rental process a breeze. Would recommend to family and friends.',
  },
  {
    name: 'Eric Richardson',
    stars: 5,
    type: 'Owner',
    text: 'Jacob is amazing at taking care of renting and managing my property. Has been a great experience!',
  },
  {
    name: 'Robert Coughlin',
    stars: 5,
    type: 'Vendor',
    text: 'They care about their clients and uphold the highest professional standards. Jacob is very communicative and a pleasure to work with.',
  },
  {
    name: 'Martin Dindlebeck',
    stars: 5,
    type: 'Vendor',
    text: 'We\'ve had the pleasure of working with Property Management Consultants as a maintenance service provider and it\'s been a consistently smooth and professional experience. Their team is organized, responsive, and clear in their communication, which makes coordinating maintenance jobs efficient and hassle-free. They respect our time and recommendations, which helps us deliver quality service to both property owners and tenants. Property Management Consultants is one of the most reliable and well-run management teams we\'ve worked with, and we\'re proud to continue our partnership with them.',
  },
  {
    name: 'Cody Cabaniss',
    stars: 5,
    type: 'Vendor',
    text: 'I get to work with Property Management Consultants as their photographer and they are some of my favorite clients. They are so easy to work with and so helpful in making the properties ready to go for pictures, which makes my job that much easier. I am also a Realtor in TN and Jacob is who I will refer people to for property management services if I have anyone looking in Alabama!',
  },
  {
    name: 'Clay',
    stars: 5,
    type: 'Realtor',
    text: 'Property Management Consultants has been incredible to work with. Jacob Harbin is one of the easiest and most professional guys in the business. As a realtor, I\'ve trusted him with multiple client referrals for managing their rental properties, and the feedback has been nothing but positive every single time. He treats my clients with the same level of care and attention that I do, which gives me complete peace of mind. His service fees are extremely reasonable, and he\'s truly one of the most trustworthy people you\'ll meet in this industry. Highly recommend!',
  },
  {
    name: 'Zack Shelton',
    stars: 5,
    type: 'Vendor',
    text: 'Jacob and his team are extremely knowledgeable and easy to work with. We have worked with him and his team many times for maintenance and rental preps and he is always very professional and informative. I highly recommend him for all of your property management needs!',
  },
  {
    name: 'Corey Wimberly',
    stars: 5,
    type: 'Vendor',
    text: 'Excellent service and communication. I highly recommend.',
  },
  {
    name: 'James',
    stars: 5,
    type: 'Owner',
    text: 'Jacob actually called me back and helped me get my house listed professionally and through the right channels.',
  },
  {
    name: 'Hunter Goode',
    stars: 5,
    type: 'Tenant',
    text: 'One of the best property management companies I\'ve ever had the pleasure of dealing with. Jacob has been so efficient and friendly the entire time.',
  },
  {
    name: 'Amara Klein',
    stars: 5,
    type: 'Tenant',
    text: 'I highly recommend Property Management Consultants. They\'re friendly, dependable, and consistently deliver great service. Couldn\'t ask for a better experience!',
  },
  {
    name: 'Brittney Cooper',
    stars: 5,
    type: 'Tenant',
    text: 'It was a frustrating experience at first, but my landlord sorted things out quickly and even checked in to make sure everything was in working order!',
  },
  {
    name: 'Natalee Seal',
    stars: 5,
    type: 'Tenant',
    text: 'They have been very understanding during my hardships while I\'m trying to catch up. 10/10 would recommend to anybody as a landlord.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const ownerReviews = reviews.filter((r) => r.type === 'Owner');
  const otherReviews = reviews.filter((r) => r.type !== 'Owner');


  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <h1 className="text-5xl sm:text-6xl mb-4">What Our Clients Say</h1>
          <p className="text-xl text-blue-100">
            Real reviews from property owners and tenants across North Alabama — all from Google.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Owner Reviews */}
          <div>
            <h2 className="text-3xl text-brand-navy mb-8">From Property Owners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ownerReviews.map((review) => (
                <div key={review.name} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col gap-4">
                  <Stars count={review.stars} />
                  <p className="text-gray-700 leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                  <div className="font-semibold text-brand-navy">{review.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tenant + Vendor + Realtor Reviews */}
          <div>
            <h2 className="text-3xl text-brand-navy mb-8">From Tenants, Vendors & Referral Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherReviews.map((review) => (
                <div key={review.name} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Stars count={review.stars} />
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{review.type}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                  <div className="font-semibold text-brand-navy">{review.name}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl mb-4">Ready to experience the difference?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Book a free 15-minute owner call and see why North Alabama landlords trust Property Management Consultants.
          </p>
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

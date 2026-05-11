import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Property Management Consultants | Property Management Consultants, LLC',
  description:
    'Get in touch with Property Management Consultants, LLC. Call, email, or send a message. We\'re available Mon–Fri 9am–5pm in Huntsville, AL.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl mb-4">Contact Property Management Consultants</h1>
          <p className="text-xl text-blue-100">
            Questions about management, a property, or just want to say hello — we&apos;re here.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl text-brand-navy">Get in Touch</h2>
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: 'Phone',
                    content: <a href="tel:9388674438" className="text-brand-blue hover:underline">(938) 867-4438</a>,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email',
                    content: <a href="mailto:Info@propertyconsultantsllc.com" className="text-brand-blue hover:underline break-all">Info@propertyconsultantsllc.com</a>,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: 'Address',
                    content: <span className="leading-snug">228 Holmes Avenue NE, 2nd Floor<br />Huntsville, AL 35801</span>,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: 'Office Hours',
                    content: <span>Mon–Fri, 9am–5pm CST</span>,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{item.label}</div>
                      <div className="text-gray-700 text-sm">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="font-semibold text-brand-navy text-sm mb-2">Prefer to schedule a call?</div>
                <p className="text-gray-600 text-sm mb-3">Book a free 15-minute owner call at a time that works for you.</p>
                <a
                  href="/book-a-call"
                  className="block w-full text-center px-4 py-2 bg-brand-navy text-white text-sm font-semibold rounded-lg hover:bg-brand-blue transition-colors"
                >
                  Book a 15-Min Owner Call
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

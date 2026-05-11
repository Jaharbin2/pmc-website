import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export const metadata: Metadata = {
  title: {
    default: 'Property Management Consultants, LLC | Huntsville, AL',
    template: '%s | Property Management Consultants, LLC',
  },
  description:
    'Professional property management in Huntsville, Madison, Athens, and North Alabama. Transparent pricing: $250 leasing fee + 10% management. No hidden fees.',
  metadataBase: new URL('https://propertyconsultantsllc.com'),
  openGraph: {
    siteName: 'Property Management Consultants, LLC',
    type: 'website',
  },
};

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'RealEstateAgent'],
  name: 'Property Management Consultants, LLC',
  url: 'https://propertyconsultantsllc.com',
  telephone: '+19388674438',
  email: 'Info@propertyconsultantsllc.com',
  description:
    'Professional residential property management in North Alabama. Transparent pricing, personal service, no hidden fees.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '228 Holmes Avenue NE, 2nd Floor',
    addressLocality: 'Huntsville',
    addressRegion: 'AL',
    postalCode: '35801',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.7304,
    longitude: -86.5861,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    'Huntsville, AL',
    'Madison, AL',
    'Athens, AL',
    'Florence, AL',
    'Sheffield, AL',
    'Muscle Shoals, AL',
    'Tuscumbia, AL',
  ],
  priceRange: '$250 leasing fee + 10% monthly management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
        <Script
          src="https://leasing-sms-ai-production.up.railway.app/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

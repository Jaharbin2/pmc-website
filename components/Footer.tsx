import Link from 'next/link';
import Image from 'next/image';

const serviceAreas = [
  'Huntsville', 'Madison', 'Athens', 'Florence', 'Sheffield', 'Muscle Shoals', 'Tuscumbia',
];

const ownerLinks = [
  { href: '/for-owners', label: 'For Owners' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/owner-tools', label: 'Owner Tools' },
  { href: '/book-a-call', label: 'Book a Call' },
];

const tenantLinks = [
  { href: '/rentals', label: 'Browse Rentals' },
  { href: '/how-to-apply', label: 'How to Apply' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Property Management Consultants, LLC"
              width={160}
              height={48}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Your Property, Our Priority. Transparent pricing, personal service, no hidden fees.
            </p>
            <div className="space-y-2 text-sm text-blue-100">
              <p>
                <a href="tel:9388674438" className="hover:text-white transition-colors">
                  (938) 867-4438
                </a>
              </p>
              <p>
                <a href="mailto:Info@propertyconsultantsllc.com" className="hover:text-white transition-colors">
                  Info@propertyconsultantsllc.com
                </a>
              </p>
              <p className="leading-snug">
                228 Holmes Avenue NE, 2nd Floor<br />
                Huntsville, AL 35801
              </p>
              <p>Mon–Fri 9am–5pm</p>
            </div>
          </div>

          {/* For Owners */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">For Owners</h3>
            <ul className="space-y-2">
              {ownerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-200 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-white mt-6 mb-4 text-sm uppercase tracking-wider">For Tenants</h3>
            <ul className="space-y-2">
              {tenantLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-200 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-200 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((city) => (
                <li key={city}>
                  <span className="text-blue-200 text-sm">{city}, AL</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-300 text-sm">
          © 2025 Property Management Consultants, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

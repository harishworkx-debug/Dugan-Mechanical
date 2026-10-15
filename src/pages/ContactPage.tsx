import { Phone, Globe, Navigation, MapPin, ExternalLink } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallCTA, CTASection } from '@/components/CTA';
import { businessInfo } from '@/data/business';

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Dugan Mechanical"
        description={`Contact ${businessInfo.name} at ${businessInfo.phone}. Plumbing services in Maine. Visit our website or find us on Google Maps.`}
        canonicalPath="/contact"
      />
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Get In Touch
            </span>
            <h1 className="mt-3 text-4xl font-bold text-navy-900 sm:text-5xl">
              Contact Dugan Mechanical
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              The fastest way to reach {businessInfo.name} is by phone. Call to discuss your
              plumbing needs and schedule service.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-navy-900 p-8 text-white">
                <h2 className="text-2xl font-bold">{businessInfo.name}</h2>
                <p className="mt-2 text-slate-300">Plumbing Services in Maine</p>

                <div className="mt-8 space-y-5">
                  <a
                    href={businessInfo.phoneLink}
                    className="flex items-center gap-4 transition-colors hover:text-blue-400"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Phone</p>
                      <p className="text-lg font-bold">{businessInfo.phone}</p>
                    </div>
                  </a>

                  <a
                    href={businessInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 transition-colors hover:text-blue-400"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Website</p>
                      <p className="text-lg font-bold">duganmechanical.com</p>
                    </div>
                  </a>

                  <a
                    href={businessInfo.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 transition-colors hover:text-blue-400"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                      <Navigation className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Google Maps</p>
                      <p className="text-lg font-bold">View Listing</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Service Area</p>
                      <p className="text-lg font-bold">{businessInfo.state}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <CallCTA size="lg" variant="light" />
                </div>
              </div>

              <div className="rounded-xl bg-amber-50 p-6 ring-1 ring-amber-200">
                <p className="text-sm leading-relaxed text-amber-900">
                  The street address and business hours have not been verified for publication.
                  Please call {businessInfo.phone} or visit the official website to confirm
                  address and hours before visiting in person.
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
                <div className="relative" style={{ paddingBottom: '75%' }}>
                  <iframe
                    src={businessInfo.mapsEmbed}
                    className="absolute inset-0 h-full w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Dugan Mechanical location on Google Maps"
                  />
                </div>
              </div>
              <a
                href={businessInfo.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Open in Google Maps
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Discuss Your Plumbing Needs?"
        subtext={`Call ${businessInfo.phone} to get started.`}
      />
    </>
  );
}

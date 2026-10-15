import { Link, useParams, Navigate } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CallCTA, CTASection } from '@/components/CTA';
import { ServiceCard } from '@/components/ServiceCard';
import { LocationCard } from '@/components/LocationCard';
import { services, getService, primaryLocationSlug } from '@/data/services';
import { locations, getLocation } from '@/data/locations';
import { businessInfo } from '@/data/business';

export function ServiceLocationPage() {
  const params = useParams();
  const path = params.serviceLocation || '';

  const match = services.find((s) => {
    const prefix = `${s.slug}-`;
    return path.startsWith(prefix);
  });

  if (!match) return <Navigate to="/404" replace />;

  const locationSlug = path.slice(match.slug.length + 1);
  const service = getService(match.slug);
  const location = getLocation(locationSlug);

  if (!service || !location) return <Navigate to="/404" replace />;

  const canonicalPath = `/${service.slug}-${location.slug}`;
  const isPrimary = location.slug === primaryLocationSlug;

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const allOtherLocations = locations.filter((l) => l.slug !== location.slug);
  const otherLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 6);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Plumber',
      name: businessInfo.name,
      telephone: businessInfo.phone,
      url: businessInfo.website,
    },
    areaServed: {
      '@type': 'City',
      name: `${location.name}, ${location.state}`,
    },
    description: service.shortDescription,
  };

  return (
    <>
      <SEO
        title={`${service.name} in ${location.name}, ${location.stateAbbrev}`}
        description={`${service.name} in ${location.name}, ${location.stateAbbrev}. ${service.shortDescription} Call ${businessInfo.phone}.`}
        canonicalPath={canonicalPath}
        ogImage={service.image}
        structuredData={structuredData}
      />
      <Breadcrumbs
        items={[
          { label: 'Services', path: '/services' },
          { label: service.name, path: `/${service.slug}-${primaryLocationSlug}` },
          { label: `${location.name}, ${location.stateAbbrev}` },
        ]}
      />

      {/* Hero */}
      <section className="relative flex min-h-[400px] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {service.name} in {location.name}, {location.stateAbbrev}
            </h1>
            <p className="mt-4 text-lg text-slate-200">{service.shortDescription}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallCTA size="lg" />
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-900">
                {service.name} Services in {location.name}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">{service.longDescription}</p>

              {/* Symptoms */}
              <h3 className="mt-10 text-xl font-bold text-navy-900">
                Common Signs You May Need This Service
              </h3>
              <ul className="mt-4 space-y-3">
                {service.symptoms.map((symptom) => (
                  <li key={symptom} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>

              {/* Service Scope */}
              <h3 className="mt-10 text-xl font-bold text-navy-900">What This Service Includes</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">{service.serviceScope}</p>

              {/* Customer Guidance */}
              <h3 className="mt-10 text-xl font-bold text-navy-900">How to Prepare for Your Call</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">{service.customerGuidance}</p>

              {/* Local context */}
              {location.description && (
                <>
                  <h3 className="mt-10 text-xl font-bold text-navy-900">
                    Serving {location.name}, {location.stateAbbrev}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">{location.description}</p>
                  <p className="mt-4 text-base leading-relaxed text-slate-500">
                    If you are in {location.name} or the surrounding area in {location.county} and
                    need {service.name.toLowerCase()}, call {businessInfo.name} at{' '}
                    <a
                      href={businessInfo.phoneLink}
                      className="font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {businessInfo.phone}
                    </a>{' '}
                    to discuss your situation.
                  </p>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-navy-900 p-6 text-white">
                <h3 className="text-lg font-bold">Call to Discuss</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Call {businessInfo.name} to talk about {service.name.toLowerCase()} in{' '}
                  {location.name}.
                </p>
                <a
                  href={businessInfo.phoneLink}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  <Phone className="h-5 w-5" />
                  {businessInfo.phone}
                </a>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  Other Services
                </h3>
                <ul className="mt-4 space-y-2">
                  {relatedServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/${s.slug}-${location.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm text-blue-600 transition-colors hover:text-blue-700"
                      >
                        <ArrowRight className="h-3.5 w-3.5" />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  {service.name} in Other Areas
                </h3>
                <ul className="mt-4 space-y-2">
                  {otherLocations.map((l) => (
                    <li key={l.slug}>
                      <Link
                        to={`/${service.slug}-${l.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm text-blue-600 transition-colors hover:text-blue-700"
                      >
                        <ArrowRight className="h-3.5 w-3.5" />
                        {l.name}, {l.stateAbbrev}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-navy-900">
                {service.name} FAQs in {location.name}
              </h2>
            </div>
            <div className="mt-10">
              <FAQAccordion items={service.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Related Services Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy-900">
              Other Plumbing Services in {location.name}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Explore additional plumbing services available in {location.name}, {location.stateAbbrev}.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* All Locations Grid */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy-900">
              {service.name} Across Maine
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              {service.name} is available in communities throughout Maine. Select your city to learn more.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allOtherLocations.map((l) => (
              <LocationCard key={l.slug} location={l} serviceSlug={service.slug} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={`Need ${service.name} in ${location.name}?`}
        subtext={`Call ${businessInfo.name} at ${businessInfo.phone} to discuss your plumbing needs.`}
      />
    </>
  );
}

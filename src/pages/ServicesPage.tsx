import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTA';
import { services, primaryLocationSlug } from '@/data/services';
import { businessInfo } from '@/data/business';

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Plumbing Services in Maine"
        description={`Explore the plumbing services offered by ${businessInfo.name} in Maine, including plumbing repair, drain cleaning, leak detection, water heater services, and fixture installation.`}
        canonicalPath="/services"
      />
      <Breadcrumbs items={[{ label: 'Services' }]} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Our Services
            </span>
            <h1 className="mt-3 text-4xl font-bold text-navy-900 sm:text-5xl">
              Plumbing Services in Maine
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              {businessInfo.name} offers a range of plumbing services for residential and commercial
              properties. Click any service below to learn more and see if it is available in your
              area. Call {businessInfo.phone} to discuss your specific needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-slate-50 p-8 text-center ring-1 ring-slate-200">
            <p className="text-lg text-slate-700">
              Not sure which service you need? Call{' '}
              <a
                href={businessInfo.phoneLink}
                className="font-bold text-blue-600 hover:text-blue-700"
              >
                {businessInfo.phone}
              </a>{' '}
              and describe what you are experiencing.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Have a Plumbing Project in Mind?"
        subtext="Call Dugan Mechanical to discuss your plumbing needs and find the right service."
      />
    </>
  );
}

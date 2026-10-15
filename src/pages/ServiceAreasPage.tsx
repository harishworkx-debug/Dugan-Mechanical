import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LocationCard } from '@/components/LocationCard';
import { CTASection } from '@/components/CTA';
import { locations } from '@/data/locations';
import { businessInfo } from '@/data/business';

export function ServiceAreasPage() {
  return (
    <>
      <SEO
        title="Service Areas in Maine"
        description={`${businessInfo.name} provides plumbing services in communities across Maine. View the list of service areas and call ${businessInfo.phone} to confirm coverage for your location.`}
        canonicalPath="/service-areas"
      />
      <Breadcrumbs items={[{ label: 'Service Areas' }]} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Service Coverage
            </span>
            <h1 className="mt-3 text-4xl font-bold text-navy-900 sm:text-5xl">
              Maine Communities We Serve
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              {businessInfo.name} provides plumbing services to communities in Maine. The locations
              listed below are within the proposed service territory. Please call to confirm that
              your specific area is covered before scheduling service.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <LocationCard key={loc.slug} location={loc} />
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-navy-900 p-8 text-center">
            <h2 className="text-2xl font-bold text-white">Verify Your Location</h2>
            <p className="mt-4 text-slate-300">
              Not sure if your community is covered? Call{' '}
              <a href={businessInfo.phoneLink} className="font-bold text-blue-400 hover:text-blue-300">
                {businessInfo.phone}
              </a>{' '}
              to confirm service availability for your address.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Need a Plumber in Your Area?"
        subtext="Call Dugan Mechanical to confirm service coverage and discuss your plumbing needs."
      />
    </>
  );
}

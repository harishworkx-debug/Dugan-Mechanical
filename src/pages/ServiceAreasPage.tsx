import { Link } from 'react-router-dom';
import { MapPin, Navigation, Clock, ShieldCheck, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTASection } from '@/components/CTA';
import { locations } from '@/data/locations';
import { services, primaryLocationSlug } from '@/data/services';
import { businessInfo } from '@/data/business';

export function ServiceAreasPage() {
  const primaryLocations = locations.slice(0, 6);
  const extendedLocations = locations.slice(6);

  return (
    <>
      <SEO
        title={`Service Areas in Saco & Southern Maine | ${businessInfo.name}`}
        description={`${businessInfo.name} provides expert plumbing and heating services across Saco, Biddeford, Scarborough, Portland, and Southern Maine. Check our local service coverage.`}
        canonicalPath="/service-areas"
      />
      <Breadcrumbs items={[{ label: 'Service Areas' }]} />

      {/* Hero Header */}
      <section className="bg-navy-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-semibold text-blue-300 ring-1 ring-blue-400/30">
              <MapPin className="h-3.5 w-3.5" />
              Saco Home Base & Southern Maine Service Radius
            </span>
            <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Communities We Serve Across Saco & Southern Maine
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Dugan Mechanical is headquartered in Saco, Maine. Our primary service territory spans
              York and Cumberland counties, focusing on coastal and inland communities where we can
              provide dependable, prompt response times for plumbing, heating, and drain services.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={businessInfo.phoneLink}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700"
              >
                <Phone className="h-4 w-4" />
                Call for Dispatch: {businessInfo.phone}
              </a>
              <a
                href="#coverage-details"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                View Coverage Details
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Policy & Limitations Section */}
      <section id="coverage-details" className="border-b border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
                <Navigation className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-navy-900">Central Saco Dispatch</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                All service technicians and trucks dispatch directly from our Saco base. This enables
                rapid arrival times for active leaks, boiler lockouts, and backups in Saco and Biddeford.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
                <Clock className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-navy-900">Realistic Response Windows</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                We believe in honest scheduling. We give clear arrival windows and call ahead before
                arriving. We never claim instant 15-minute response in distant towns when traffic or distance prevents it.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-navy-900">No Hidden Travel Fees</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Within our primary York and Cumberland County service zone, we provide transparent,
                upfront quotes before starting work. If your job requires special long-distance travel, we inform you upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Locations Directory */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Local Communities
            </span>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              Primary Response Zone (York & Cumberland Counties)
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              These communities represent our most active daily service routes. Click any community
              below to explore plumbing, heating, and drain services tailored to that area.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {primaryLocations.map((loc) => {
              const isHomeBase = loc.slug === 'saco-me';
              return (
                <div
                  key={loc.slug}
                  className={`flex flex-col justify-between rounded-2xl p-6 ring-1 transition-all hover:shadow-lg ${
                    isHomeBase
                      ? 'bg-blue-50/60 ring-blue-300'
                      : 'bg-white ring-slate-200 hover:ring-blue-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        {loc.county}
                      </span>
                      {isHomeBase && (
                        <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                          Home Base
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-navy-900">
                      {loc.name}, {loc.stateAbbrev}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {loc.description}
                    </p>

                    {/* Popular Services Quick Links */}
                    <div className="mt-4 border-t border-slate-100 pt-3">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        Common Services in {loc.name}:
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5 text-xs">
                        <Link
                          to={`/plumbing-repair-${loc.slug}`}
                          className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        >
                          Plumbing Repair
                        </Link>
                        <Link
                          to={`/water-heater-repair-${loc.slug}`}
                          className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        >
                          Water Heaters
                        </Link>
                        <Link
                          to={`/drain-cleaning-${loc.slug}`}
                          className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        >
                          Drain Cleaning
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link
                      to={`/plumbing-repair-${loc.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800"
                    >
                      <span>Explore all services in {loc.name}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Extended Coverage Zone */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-navy-900 text-center">
              Scheduled & Extended Service Areas
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">
              For properties in neighboring communities, we provide scheduled maintenance, major boiler
              replacements, and planned fixture installations. Call to confirm availability for your street address.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {extendedLocations.map((loc) => (
                <div
                  key={loc.slug}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all hover:bg-white hover:shadow-sm"
                >
                  <p className="text-xs font-semibold text-blue-600">{loc.county}</p>
                  <h4 className="mt-1 text-lg font-bold text-navy-900">{loc.name}, ME</h4>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-3">{loc.description}</p>
                  <Link
                    to={`/plumbing-repair-${loc.slug}`}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
                  >
                    View {loc.name} Services <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
            <div className="bg-navy-900 p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold">Southern Maine Operational Map</h3>
                <p className="text-sm text-slate-300">
                  Headquartered at Saco, ME 04072 | Serving York & Cumberland Counties
                </p>
              </div>
              <a
                href={businessInfo.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Open Google Maps Listing
                <Navigation className="h-4 w-4" />
              </a>
            </div>
            <iframe
              title="Dugan Mechanical Saco Maine Service Area Map"
              src={businessInfo.mapsEmbed}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTASection
        headline="Need Plumbing or Heating Service in Southern Maine?"
        subtext={`Call Dugan Mechanical at ${businessInfo.phone} to confirm dispatch availability for your town.`}
      />
    </>
  );
}


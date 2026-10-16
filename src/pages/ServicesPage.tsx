import { Link } from 'react-router-dom';
import {
  Wrench,
  Droplets,
  Flame,
  Search,
  Pipette,
  ShowerHead,
  AlertCircle,
  ArrowRight,
  Phone,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTASection } from '@/components/CTA';
import { services, primaryLocationSlug } from '@/data/services';
import { businessInfo } from '@/data/business';

export function ServicesPage() {
  return (
    <>
      <SEO
        title={`Plumbing & Heating Services in ${businessInfo.city}, ${businessInfo.stateAbbrev} | ${businessInfo.name}`}
        description={`Explore verified plumbing, heating, boiler repair, drain cleaning, water heater, and pipe services by ${businessInfo.name} in Saco and Southern Maine. Call ${businessInfo.phone}.`}
        canonicalPath="/services"
      />
      <Breadcrumbs items={[{ label: 'Services' }]} />

      {/* Header Banner */}
      <section className="bg-navy-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-semibold text-blue-300 ring-1 ring-blue-400/30">
              <Sparkles className="h-3.5 w-3.5" />
              Verified Mechanical, Plumbing & Heating Services
            </span>
            <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Plumbing, Heating & Mechanical Services in Saco & Southern Maine
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              At {businessInfo.name}, every service we offer is backed by code-compliant craftsmanship,
              modern diagnostic tools, and transparent upfront communication. Whether you need an
              urgent pipe repair, an annual boiler inspection, or a high-efficiency water heater
              replacement, here is an in-depth breakdown of what we do and how we help.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={businessInfo.phoneLink}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700"
              >
                <Phone className="h-4 w-4" />
                Speak with a Technician: {businessInfo.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Request an Estimate
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Authority Detailed Directory */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-12">
            {services.map((service, index) => {
              const dedicatedUrl = `/${service.slug}-${primaryLocationSlug}`;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md lg:p-8"
                >
                  <div className="grid gap-8 lg:grid-cols-12">
                    {/* Left: Service Overview & Image */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700 font-bold text-sm">
                            0{index + 1}
                          </span>
                          <h2 className="text-2xl font-bold text-navy-900">
                            {service.name}
                          </h2>
                        </div>
                        <p className="mt-4 text-base leading-relaxed text-slate-600">
                          {service.longDescription}
                        </p>
                      </div>

                      <div className="mt-6 overflow-hidden rounded-xl">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          loading="lazy"
                          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Right: Triggers, Scope & Clear Next Steps */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                      {/* What We Do */}
                      <div className="rounded-xl bg-slate-50 p-5 ring-1 ring-slate-100">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900">
                          What {businessInfo.name} Does
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700">
                          {service.serviceScope}
                        </p>
                      </div>

                      {/* When You Need It */}
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900">
                          When You Need This Service (Common Signs)
                        </h3>
                        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                          {service.symptoms.slice(0, 4).map((symptom) => (
                            <li key={symptom} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600 mt-0.5" />
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Customer Guidance & Next Step */}
                      <div className="border-t border-slate-100 pt-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600">
                          Next Step For Property Owners
                        </h3>
                        <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                          {service.customerGuidance}
                        </p>
                      </div>

                      {/* Action Links with Exact Anchor Text */}
                      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between border-t border-slate-200">
                        <Link
                          to={dedicatedUrl}
                          className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-800 transition-colors text-sm"
                        >
                          <span>Learn more about {service.name} in Saco, ME</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a
                          href={businessInfo.phoneLink}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-navy-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-800"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          Call {businessInfo.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Need help choosing banner */}
          <div className="mt-16 rounded-2xl bg-slate-50 p-8 text-center ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-navy-900">Unsure Which Service Fits Your Issue?</h2>
            <p className="mx-auto mt-2 max-w-xl text-slate-600 text-sm">
              Plumbing and heating problems often present combined symptoms—such as an active leak that
              stems from high system pressure or a boiler that won't fire due to an expansion tank fault.
              Call us directly to talk through what you're seeing.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <a
                href={businessInfo.phoneLink}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700"
              >
                <Phone className="h-4 w-4" />
                Call {businessInfo.phone}
              </a>
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-navy-900 hover:bg-slate-50"
              >
                Check Service Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Solve Your Plumbing or Heating Issue?"
        subtext="Contact Dugan Mechanical today for honest guidance, upfront pricing, and dependable Southern Maine craftsmanship."
      />
    </>
  );
}


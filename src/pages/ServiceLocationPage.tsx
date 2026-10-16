import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  AlertTriangle,
  Wrench,
  Sparkles,
  Send,
  MapPin,
  ChevronRight,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CTASection } from '@/components/CTA';
import { services, getService, primaryLocationSlug } from '@/data/services';
import { locations, getLocation } from '@/data/locations';
import { serviceDetails } from '@/data/serviceDetails';
import { businessInfo } from '@/data/business';

export function ServiceLocationPage() {
  const params = useParams();
  const path = params.serviceLocation || '';

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

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
  const details = serviceDetails[service.slug] || {
    typesOfRepairs: service.symptoms,
    diagnosticProcess: [
      { step: '1', title: 'Assessment', desc: 'We inspect the issue and trace symptoms.' },
      { step: '2', title: 'Upfront Quote', desc: 'Clear pricing before any work starts.' },
      { step: '3', title: 'Repair', desc: 'Code-compliant craftsmanship.' },
      { step: '4', title: 'Testing', desc: 'Full pressure and function test.' },
    ],
    limitations: 'All work adheres to Maine state plumbing codes.',
    equipmentOrMaterials: { title: 'Materials Used', items: ['Code-approved fittings', 'Quality fixtures'] },
    localContextInsight: 'Providing reliable service across Southern Maine.',
  };

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const otherLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 6);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${location.name}, ${location.stateAbbrev}`,
    serviceType: service.name,
    provider: {
      '@type': ['Plumber', 'HVACBusiness'],
      name: businessInfo.name,
      telephone: businessInfo.phone,
      url: businessInfo.website,
      address: {
        '@type': 'PostalAddress',
        addressLocality: businessInfo.city,
        addressRegion: businessInfo.stateAbbrev,
        postalCode: businessInfo.postalCode,
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: `${location.name}, ${location.state}`,
    },
    description: `${service.name} services in ${location.name}, ${location.stateAbbrev} by ${businessInfo.name}. Honest diagnostics, upfront pricing, and prompt dispatch from our Saco base.`,
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <>
      <SEO
        title={`${service.name} in ${location.name}, ${location.stateAbbrev} | ${businessInfo.name}`}
        description={`${service.name} in ${location.name}, ${location.stateAbbrev}. Professional diagnostics, upfront pricing & prompt dispatch from ${businessInfo.name}. Call ${businessInfo.phone}.`}
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

      {/* Hero Section */}
      <section className="relative flex min-h-[440px] items-center overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-950/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-semibold text-blue-300 ring-1 ring-blue-400/30">
              <MapPin className="h-3.5 w-3.5" />
              <span>Serving {location.name}, ME ({location.county})</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {service.name} in {location.name}, {location.stateAbbrev}
            </h1>
            <p className="mt-4 text-lg text-slate-200 leading-relaxed">
              Looking for dependable {service.name.toLowerCase()} in {location.name}? {businessInfo.name} delivers
              honest diagnostics, code-compliant craftsmanship, and upfront pricing for residential
              and commercial property owners across {location.county}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={businessInfo.phoneLink}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700"
              >
                <Phone className="h-5 w-5" />
                <span>Call {businessInfo.phone}</span>
              </a>
              <a
                href="#estimate-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                <span>Request Online Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-blue-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-blue-400" /> Upfront Estimates</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-blue-400" /> Maine Code Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Primary Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Service Intent & Scope */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Detailed Service Breakdown
                </span>
                <h2 className="mt-2 text-2xl font-bold text-navy-900 sm:text-3xl">
                  {service.name} Scope for {location.name} Properties
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {service.longDescription}
                </p>
                <div className="mt-6 rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wide">
                    Included in Our Service Scope:
                  </h3>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {service.serviceScope}
                  </p>
                </div>
              </div>

              {/* Specific Types of Repairs / Problems Covered */}
              <div>
                <h3 className="text-xl font-bold text-navy-900">
                  Common {service.name} Scenarios We Handle
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Homeowners and facility managers in {location.name} contact us for these specific issues:
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {details.typesOfRepairs.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-white p-3.5 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4-Step Diagnostic & Repair Process */}
              <div>
                <h3 className="text-xl font-bold text-navy-900">
                  Our Step-by-Step Diagnostic & Repair Process
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  We follow a consistent, code-compliant workflow to protect your property and ensure durable fixes:
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {details.diagnosticProcess.map((step) => (
                    <div key={step.step} className="rounded-xl border border-slate-200 bg-slate-50/60 p-5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                          {step.step}
                        </span>
                        <h4 className="font-bold text-navy-900 text-sm">{step.title}</h4>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Limitations Box */}
              <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-amber-700 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-amber-900">
                      Realistic Trade Limitations & Transparency
                    </h4>
                    <p className="mt-1 text-xs text-amber-800 leading-relaxed">
                      {details.limitations}
                    </p>
                  </div>
                </div>
              </div>

              {/* Supported Materials / Equipment */}
              {details.equipmentOrMaterials && (
                <div>
                  <h3 className="text-lg font-bold text-navy-900">
                    {details.equipmentOrMaterials.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {details.equipmentOrMaterials.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Local Area Context & Honest Dispatch Notice */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-navy-900">
                    Local Service Context for {location.name}, Maine
                  </h3>
                </div>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">{location.description}</p>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed italic">{details.localContextInsight}</p>
                <div className="mt-4 border-t border-blue-200/60 pt-3 text-xs text-slate-600">
                  {isPrimary ? (
                    <p>
                      <strong>Home Base Dispatch:</strong> Saco is our operational home. Technicians are
                      stationed locally for rapid arrival across all Saco residential and business properties.
                    </p>
                  ) : (
                    <p>
                      <strong>Central Dispatch Notice:</strong> All dispatch originates from our central Saco base.
                      We service {location.name} and {location.county} with clear travel coordination, upfront estimates,
                      and no surprise trip charges.
                    </p>
                  )}
                </div>
              </div>

              {/* On-Page Fast Estimate Request Form */}
              <div id="estimate-form" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900">
                  Request an Estimate in {location.name}
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  Submit your details below and a technician will follow up to discuss your {service.name.toLowerCase()} needs.
                </p>

                {formSubmitted ? (
                  <div className="mt-4 rounded-xl bg-emerald-50 p-5 text-center ring-1 ring-emerald-200">
                    <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-600" />
                    <h4 className="mt-2 text-base font-bold text-emerald-900">Thank you, {formData.name}!</h4>
                    <p className="mt-1 text-xs text-emerald-800">
                      We received your request for <strong>{service.name}</strong> in <strong>{location.name}</strong> and will call {formData.phone} shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="mt-4 space-y-3.5">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="207-xxx-xxxx"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700">Brief Problem Description</label>
                      <textarea
                        rows={2}
                        placeholder={`Describe what you're seeing in your ${location.name} home...`}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-blue-700"
                    >
                      <Send className="h-4 w-4" />
                      Submit {location.name} Service Request
                    </button>
                  </form>
                )}
              </div>

              {/* Service FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-navy-900">
                    {service.name} FAQs in {location.name}
                  </h3>
                  <div className="mt-4">
                    <FAQAccordion items={service.faqs} />
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Call CTA Box */}
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl bg-navy-900 p-6 text-white shadow-md">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    Direct Phone Contact
                  </span>
                  <h3 className="mt-1 text-lg font-bold">
                    Need {service.name} in {location.name}?
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    Call our dispatch line to describe your problem and get upfront guidance.
                  </p>
                  <a
                    href={businessInfo.phoneLink}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-base font-bold text-white transition-all hover:bg-blue-700 shadow-md"
                  >
                    <Phone className="h-4 w-4" />
                    {businessInfo.phone}
                  </a>
                </div>

                {/* Other Services in this City */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                    Other Services in {location.name}
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs">
                    {relatedServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/${s.slug}-${location.slug}`}
                          className="flex items-center justify-between rounded-lg bg-white p-2.5 border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors"
                        >
                          <span className="font-medium text-slate-700">{s.name} in {location.name}</span>
                          <ArrowRight className="h-3.5 w-3.5 text-blue-600" />
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-1 font-bold text-blue-600 hover:underline pt-2 text-xs"
                      >
                        Explore all services in Main Service Hub
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* This Service in Other Southern Maine Communities */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                    {service.name} Across Southern Maine
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs">
                    {otherLocations.map((l) => (
                      <li key={l.slug}>
                        <Link
                          to={`/${service.slug}-${l.slug}`}
                          className="flex items-center gap-2 rounded-lg bg-white p-2.5 border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors"
                        >
                          <MapPin className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                          <span className="font-medium text-slate-700">{service.name} in {l.name}, {l.stateAbbrev}</span>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        to="/service-areas"
                        className="inline-flex items-center gap-1 font-bold text-blue-600 hover:underline pt-2 text-xs"
                      >
                        View all Service Areas in Local Hub
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={`Dealing with a ${service.name} Issue in ${location.name}?`}
        subtext={`Call Dugan Mechanical at ${businessInfo.phone} to discuss your situation with a licensed technician.`}
      />
    </>
  );
}


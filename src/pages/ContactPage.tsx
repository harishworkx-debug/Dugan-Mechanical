import { useState } from 'react';
import { Phone, Clock, MapPin, Send, CheckCircle2, ShieldCheck, Navigation } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTASection } from '@/components/CTA';
import { businessInfo } from '@/data/business';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Plumbing Repair',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.location) return;
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title={`Contact ${businessInfo.name} | Saco & Southern Maine Plumbing & Heating`}
        description={`Contact ${businessInfo.name} at ${businessInfo.phone}. Licensed plumbing & heating service in Saco, Biddeford, Scarborough, and Southern Maine. Request an estimate.`}
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
              Have an active leak, water heater issue, or heating project in Southern Maine? Call us
              directly for immediate assistance or send your details below to schedule service.
            </p>
          </div>

          {/* Quick Call Hero Box */}
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-gradient-to-r from-blue-700 to-navy-900 p-8 text-white shadow-xl">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row text-center sm:text-left">
              <div>
                <span className="inline-block rounded-full bg-blue-500/30 px-3 py-1 text-xs font-semibold text-blue-200">
                  Fastest Way to Reach Us
                </span>
                <h2 className="mt-2 text-2xl font-bold">Need Immediate Dispatch or Guidance?</h2>
                <p className="mt-1 text-sm text-blue-100">
                  Speak directly with an experienced technician about your issue.
                </p>
              </div>
              <a
                href={businessInfo.phoneLink}
                className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-4 text-xl font-extrabold text-blue-900 shadow-lg transition-transform hover:scale-105 hover:bg-slate-50"
              >
                <Phone className="h-6 w-6 text-blue-600 fill-blue-600" />
                <span>{businessInfo.phone}</span>
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            {/* Lead Form */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-navy-900">Request Service or an Estimate</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill in the details below. Required fields are kept to a minimum so you can reach us quickly.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-xl bg-emerald-50 p-6 text-center ring-1 ring-emerald-200">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">Thank You, {formData.name}!</h3>
                  <p className="mt-2 text-sm text-emerald-800 leading-relaxed">
                    Your request for <strong>{formData.service}</strong> in <strong>{formData.location}</strong> has
                    been received. We will contact you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <p className="mt-4 text-xs text-emerald-700">
                    If this is an active water leak or urgent heating emergency, please call{' '}
                    <a href={businessInfo.phoneLink} className="font-bold underline">
                      {businessInfo.phone}
                    </a>{' '}
                    immediately.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Miller"
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-900">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="207-xxx-xxxx"
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-semibold text-slate-900">
                        Job Location / City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="location"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Saco, Scarborough, Biddeford"
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-900">
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    >
                      <option value="Plumbing Repair">General Plumbing Repair (Leaks, Faucets, Toilets)</option>
                      <option value="Heating & Boiler Services">Heating & Boiler Repair / Diagnostics</option>
                      <option value="Drain Cleaning">Drain Cleaning & Clog Clearing</option>
                      <option value="Water Heater Service">Water Heater Repair / Replacement</option>
                      <option value="Pipe Repair">Pipe Repair / Freeze Thawing</option>
                      <option value="Fixture Installation">Fixture Installation (Sink, Toilet, Faucet)</option>
                      <option value="Sewer Line Service">Sewer Line Inspection / Clearing</option>
                      <option value="Other Mechanical Issue">Other Mechanical / Plumbing Need</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
                      Brief Description of the Problem (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what symptoms you notice (e.g. slow drain, noisy radiator, water pooling under sink)..."
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700"
                  >
                    <Send className="h-5 w-5" />
                    Submit Service Request
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                    <ShieldCheck className="h-4 w-4 text-blue-600" />
                    <span>Your information is kept strictly confidential and only used to coordinate service.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Business NAP & Hours Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-navy-900 p-8 text-white shadow-sm">
                <h3 className="text-xl font-bold">Business Information</h3>
                <p className="mt-1 text-sm text-slate-300">
                  Consistent with our Google Business Profile and local directory listings:
                </p>

                <div className="mt-6 space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-300">Direct Phone</p>
                      <a href={businessInfo.phoneLink} className="text-lg font-bold text-white hover:text-blue-300">
                        {businessInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <MapPin className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-300">Primary Dispatch Base</p>
                      <p className="text-white font-medium">{businessInfo.city}, ME {businessInfo.postalCode}</p>
                      <p className="text-xs text-slate-400">Serving York & Cumberland Counties</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Clock className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-300">Operating Hours</p>
                      <p className="text-white font-medium">Mon – Fri: 7:30 AM – 5:00 PM</p>
                      <p className="text-xs text-slate-400">Prompt dispatch coordination for urgent leaks</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Navigation className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-300">Google Maps</p>
                      <a
                        href={businessInfo.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline font-medium"
                      >
                        View Official Listing on Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
                <iframe
                  title="Dugan Mechanical Saco Maine Google Map"
                  src={businessInfo.mapsEmbed}
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Prefer Speaking with Someone Directly?"
        subtext={`Give us a call at ${businessInfo.phone}. We are ready to answer your questions and coordinate service.`}
      />
    </>
  );
}


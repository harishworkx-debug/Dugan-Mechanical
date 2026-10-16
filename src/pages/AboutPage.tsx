import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Flame,
  Droplets,
  Award,
  Clock,
  Phone,
  ArrowRight,
  MapPin,
  Star,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallCTA, CTASection } from '@/components/CTA';
import { businessInfo } from '@/data/business';

export function AboutPage() {
  return (
    <>
      <SEO
        title={`About ${businessInfo.name} | Plumbing & Heating in ${businessInfo.city}, ${businessInfo.stateAbbrev}`}
        description={`Learn about ${businessInfo.name}, a licensed plumbing and heating contractor based in Saco, Maine. Honest diagnostics, upfront pricing, and Southern Maine expertise.`}
        canonicalPath="/about"
      />
      <Breadcrumbs items={[{ label: 'About' }]} />

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Local Trade Craftsmanship
              </span>
              <h1 className="mt-3 text-4xl font-bold text-navy-900 sm:text-5xl">
                About Dugan Mechanical
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Founded and operated by <strong>Riordan Dugan</strong>, {businessInfo.name} provides dependable plumbing,
                hydronic heating, and mechanical services for homeowners and commercial establishments
                throughout York and Cumberland counties.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Praised by local Maine clients for exceptional attention to detail, clear communication, and
                same-day responsiveness, we treat every property as if it were our own. Our philosophy is simple:
                we provide honest diagnostics, explain your repair or replacement options clearly, give upfront estimates
                before starting, and complete every job to Maine state plumbing codes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CallCTA size="lg" />
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-4 font-semibold text-navy-900 hover:bg-slate-50 transition-colors"
                >
                  Contact Our Saco Office
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
              <img
                src="https://images.pexels.com/photos/8486927/pexels-photo-8486927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Plumbing technician with professional pipe wrenches in Maine"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values & Trade Standards */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Our Commitments
            </span>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              How We Do Business
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              We take pride in building long-term relationships through genuine craftsmanship and honest advice.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-navy-900 text-lg">Licensed & Insured</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                All mechanical and plumbing work complies strictly with Maine state plumbing and safety
                codes to ensure your property remains protected and compliant.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-navy-900 text-lg">Upfront Quotes</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                No surprises or hidden fees. We diagnose the root cause and review the necessary scope
                and pricing with you before picking up a wrench.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
                <Flame className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-navy-900 text-lg">Plumbing & Heating</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                True mechanical capability: from delicate faucet repairs and drain clearing to full
                boiler hydronic loop balancing and water heater installations.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-navy-900 text-lg">Local Saco Roots</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                We understand Maine homes—from historic coastal buildings with older cast iron lines to
                modern suburban systems needing freeze protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Core Expertise
            </span>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              Our Primary Trade Specializations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Dugan Mechanical delivers focused, high-standard workmanship across these key disciplines:
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Wrench,
                title: 'General Plumbing & Pipe Repair',
                description:
                  'Fast, durable repairs for copper, PEX, and PVC water lines, burst pipes, and leaking fixtures throughout residential and commercial properties.',
              },
              {
                icon: Flame,
                title: 'Boiler & Hydronic Heating',
                description:
                  'Diagnostic troubleshooting, zone valve replacements, circulator pump repairs, and hydronic loop bleeding to keep Maine homes warm during sub-zero winters.',
              },
              {
                icon: Droplets,
                title: 'Drain & Sewer Line Clearing',
                description:
                  'Snaking, clearing main line obstructions, eliminating stubborn kitchen grease, and restoring proper gravity flow to waste systems.',
              },
              {
                icon: Clock,
                title: 'Water Heater Repair & Replacement',
                description:
                  'Troubleshooting heating elements and thermostats on conventional tank units, as well as high-efficiency tankless water heater conversions.',
              },
              {
                icon: ShieldCheck,
                title: 'Winterization & Freeze Thawing',
                description:
                  'Safe electronic pipe thawing, pipe insulation along exterior foundation sills, and comprehensive fall winterization for seasonal cottages and camps.',
              },
              {
                icon: Award,
                title: 'Fixture & Valve Installations',
                description:
                  'Code-compliant installations of high-efficiency toilets, sinks, tub valves, showerheads, backflow prevention devices, and pressure regulators.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verified Google Reputation */}
      <section className="bg-slate-100 py-14 border-y border-slate-200">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span>5.0 Star Rated on Google Business Profile</span>
          </div>
          <blockquote className="mt-6 text-xl font-medium text-slate-800 italic leading-relaxed">
            "Riordan and his guys are the best. I was impressed with their professionalism, expertise, and attention to detail.
            Riordan is a perfectionist, so you can be confident the job will be done correctly the first time. Highly recommend!!"
          </blockquote>
          <p className="mt-3 text-sm font-bold text-navy-900">— Ashley Kilmartin, Verified Google Review</p>
          <div className="mt-6">
            <a
              href={businessInfo.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline"
            >
              <span>Read all 8 verified customer reviews on Google Maps</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Approach to Communication */}
      <section className="bg-navy-950 py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
            Direct & Transparent
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Our Approach to Customer Communication
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              When you call {businessInfo.name}, you talk directly with experienced trade professionals.
              We listen to the symptoms you are noticing—whether it is water stains on a ceiling,
              a banging radiator, or a sudden loss of hot water.
            </p>
            <p>
              We explain what could be causing the issue, discuss potential repair versus replacement
              options, and provide clear scheduling expectations. We respect your property and leave
              our workspace clean after every call.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <CallCTA size="lg" />
          </div>
        </div>
      </section>

      <CTASection
        headline="Have Questions About an Upcoming Project?"
        subtext={`Call Dugan Mechanical at ${businessInfo.phone} to discuss your plumbing or heating needs.`}
      />
    </>
  );
}


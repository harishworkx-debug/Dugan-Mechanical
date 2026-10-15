import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Wrench,
  Droplets,
  Flame,
  ShowerHead,
  Search,
  Pipette,
  Droplet,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { CallCTA, CTASection } from '@/components/CTA';
import { ServiceCard } from '@/components/ServiceCard';
import { LocationCard } from '@/components/LocationCard';
import { services, primaryLocationSlug } from '@/data/services';
import { locations } from '@/data/locations';
import { businessInfo } from '@/data/business';

const heroImage =
  'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const featuredServices = [
  { slug: 'plumbing-repair', icon: Wrench },
  { slug: 'drain-cleaning', icon: Droplets },
  { slug: 'leak-detection', icon: Search },
  { slug: 'pipe-repair', icon: Pipette },
  { slug: 'water-heater-repair', icon: Flame },
  { slug: 'fixture-installation', icon: ShowerHead },
];

const commonConcerns = [
  {
    icon: Droplet,
    title: 'Leaking Pipes',
    description:
      'Leaks can develop slowly or appear suddenly. A small drip behind a wall can cause damage over time, while a burst pipe needs immediate attention.',
  },
  {
    icon: Droplets,
    title: 'Slow Drains',
    description:
      'A drain that takes longer than usual to empty may indicate a buildup or blockage somewhere in the line. Multiple slow drains can point to a deeper issue.',
  },
  {
    icon: ShowerHead,
    title: 'Faucet & Toilet Problems',
    description:
      'Dripping faucets, running toilets, and weak flushes are common and often repairable by replacing internal components like washers, flappers, or cartridges.',
  },
  {
    icon: Flame,
    title: 'Water Heater Concerns',
    description:
      'No hot water, inconsistent temperatures, or strange sounds from the tank can signal a problem with a heating element, thermostat, or other component.',
  },
  {
    icon: Wrench,
    title: 'Fixture Repairs',
    description:
      'Sinks, showerheads, and other fixtures wear out over time. Leaks from the base, stiff handles, and low pressure are signs that a fixture may need attention.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: businessInfo.name,
  telephone: businessInfo.phone,
  url: businessInfo.website,
  areaServed: {
    '@type': 'State',
    name: 'Maine',
  },
  hasMap: businessInfo.mapsLink,
};

export function HomePage() {
  return (
    <>
      <SEO
        title={`${businessInfo.name} | Plumbing Services in Maine`}
        description={`Call ${businessInfo.phone}. ${businessInfo.name} provides plumbing repair, drain cleaning, water heater services, and fixture installation for homes and businesses in Maine.`}
        canonicalPath="/"
        ogImage={heroImage}
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Professional plumber repairing pipes" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-semibold text-blue-300 ring-1 ring-blue-500/30">
              Plumbing Services in Maine
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Plumbing Services You Can Call Dugan Mechanical For
            </h1>
            <p className="mt-6 text-lg text-slate-200 sm:text-xl">
              Have a plumbing issue or a project to discuss? Contact Dugan Mechanical to learn about
              the plumbing services available for your property.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallCTA size="lg" />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Explore Plumbing Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Introduction */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                About Dugan Mechanical
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
                A Maine Plumbing Business Ready to Take Your Call
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {businessInfo.name} is a plumbing business serving communities in Maine. Whether you
                are dealing with a leaking pipe, a slow drain, a water heater that has stopped
                working, or a fixture that needs replacing, the first step is a phone call to
                describe what you are experiencing.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                The services listed on this website cover the most common plumbing needs for
                residential and commercial properties. Some details should be verified with the
                business directly, so calling is always the best way to confirm what is available
                for your specific situation.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
                >
                  Learn More About Dugan Mechanical
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Plumber fixing pipes with professional tools"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              What We Can Help With
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              Featured Plumbing Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Click any service to learn more about it and see if it is available in your area.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map(({ slug }) => {
              const service = services.find((s) => s.slug === slug)!;
              return <ServiceCard key={slug} service={service} />;
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-800"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Common Plumbing Concerns */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Common Issues
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              Common Plumbing Concerns
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Many plumbing problems share similar symptoms but can have different underlying causes.
              A plumber can help identify the real source of the issue.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commonConcerns.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
                Why Call Dugan Mechanical
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Clear Communication and Practical Help
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                When you call {businessInfo.name}, you can describe your plumbing problem and
                discuss what is happening at your property. The goal is to understand your situation,
                explain the available options, and arrange service based on the company's confirmed
                process and availability.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Describe your problem and get guidance on next steps',
                  'Discuss service options appropriate for your situation',
                  'Arrange a visit based on confirmed availability',
                  'Ask questions about the work before it begins',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
              <div className="flex items-center gap-3 text-white">
                <Phone className="h-8 w-8 text-blue-400" />
                <div>
                  <p className="text-sm text-slate-400">Call to discuss your plumbing needs</p>
                  <a
                    href={businessInfo.phoneLink}
                    className="text-2xl font-bold transition-colors hover:text-blue-400"
                  >
                    {businessInfo.phone}
                  </a>
                </div>
              </div>
              <p className="mt-6 text-slate-300">
                The most direct way to get help is to pick up the phone. Calling lets you describe
                what you are experiencing in your own words and ask any questions you have before
                deciding on next steps.
              </p>
              <div className="mt-6">
                <CallCTA size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              How It Works
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              A Simple Three-Step Process
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                num: '1',
                title: 'Call and Describe the Issue',
                description:
                  'Pick up the phone and explain what you are experiencing. The more detail you can share, the better the plumber can understand the situation.',
              },
              {
                num: '2',
                title: 'Discuss the Problem and Next Steps',
                description:
                  'Talk through what may be causing the issue and what service options are available. Ask questions so you feel confident about the approach.',
              },
              {
                num: '3',
                title: 'Arrange Service',
                description:
                  'Schedule a visit based on the company\u2019s confirmed process and availability. Get your plumbing problem addressed.',
              },
            ].map((step) => (
              <div key={step.num} className="relative rounded-xl bg-slate-50 p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-lg shadow-blue-600/20">
                  {step.num}
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy-900">{step.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Service Coverage
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              Communities Dugan Mechanical Serves
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              The following communities are within the proposed service territory. Confirm coverage
              for your specific location by calling.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.slice(0, 9).map((loc) => (
              <LocationCard key={loc.slug} location={loc} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-800"
            >
              View All Service Areas
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

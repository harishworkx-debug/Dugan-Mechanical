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
  ShieldCheck,
  Clock,
  Award,
  CheckCircle2,
  Star,
  AlertTriangle,
  Snowflake,
  Home,
  Building2,
  MapPin,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { CallCTA, CTASection } from '@/components/CTA';
import { ServiceCard } from '@/components/ServiceCard';
import { LocationCard } from '@/components/LocationCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { services, primaryLocationSlug } from '@/data/services';
import { locations } from '@/data/locations';
import { businessInfo } from '@/data/business';
import { googleReviews, googleReviewsSummary } from '@/data/reviews';

const heroImage =
  'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const trustHighlights = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    desc: 'Fully compliant with Maine state plumbing codes and safety standards.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    desc: 'Prompt scheduling and rapid dispatch for urgent plumbing issues.',
  },
  {
    icon: Award,
    title: 'Upfront Pricing',
    desc: 'Clear, honest estimates before work begins—no surprise fees.',
  },
  {
    icon: Star,
    title: 'Local Maine Experts',
    desc: 'Proudly serving homeowners & businesses in Southern and Central Maine.',
  },
];

const featuredServices = [
  { slug: 'plumbing-repair', icon: Wrench },
  { slug: 'heating-boiler-services', icon: Flame },
  { slug: 'drain-cleaning', icon: Droplets },
  { slug: 'water-heater-repair', icon: Flame },
  { slug: 'pipe-repair', icon: Pipette },
  { slug: 'leak-detection', icon: Search },
];

const commonConcerns = [
  {
    icon: Droplet,
    title: 'Hidden Leaks & Moisture',
    description:
      'Water spots on ceilings, damp baseboards, or a spinning water meter when all taps are off indicate concealed pipe leaks that need swift attention.',
  },
  {
    icon: Droplets,
    title: 'Persistent Clogs & Slow Drains',
    description:
      'Gurgling sinks, standing shower water, and foul drain odors are signs of deep line grease, hair, or root buildup that over-the-counter chemicals cannot clear.',
  },
  {
    icon: Flame,
    title: 'Water Heater Failures',
    description:
      'Lukewarm water, sudden temperature drops, popping sounds in the tank, or rusty water indicate failing heating elements, sediment buildup, or tank wear.',
  },
  {
    icon: Snowflake,
    title: 'Frozen or Burst Pipes',
    description:
      'Sub-zero Maine temperatures can freeze exposed lines in basements and crawlspaces. Safe professional thawing prevents pipe rupture and major water damage.',
  },
  {
    icon: ShowerHead,
    title: 'Running Toilets & Dripping Fixtures',
    description:
      'A continuously running toilet can waste hundreds of gallons a day. We replace worn flappers, fill valves, cartridge seals, and leaky faucet spouts.',
  },
  {
    icon: Pipette,
    title: 'Low Water Pressure',
    description:
      'Drop in household pressure can point to mineral scale in older galvanized lines, a faulty pressure regulator, or an undetected municipal main leak.',
  },
];

const seasonalTips = [
  {
    title: 'Outdoor Spigot Winterization',
    desc: 'Disconnect and drain garden hoses and shut off interior shutoff valves before the first freeze to prevent burst frost-free sillcocks.',
  },
  {
    title: 'Basement & Crawlspace Insulation',
    desc: 'Wrap uninsulated hot and cold water pipes located along exterior foundation walls with high-grade thermal foam pipe sleeves.',
  },
  {
    title: 'Water Heater Annual Flush',
    desc: 'Maine water contains minerals that precipitate into tank sediment, reducing heating efficiency and shortening equipment lifespan.',
  },
  {
    title: 'Sump Pump & Backflow Inspection',
    desc: 'Ensure your sump pump and check valve are tested before the spring thaw to prevent basement flooding from heavy snowmelt and rain.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: `${googleReviewsSummary.rating.toFixed(1)}`,
    reviewCount: `${googleReviewsSummary.totalReviews}`,
    bestRating: '5',
    worstRating: '1',
  },
  review: googleReviews.slice(0, 5).map((r) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: r.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: 5,
    },
    reviewBody: r.text,
  })),
  areaServed: [
    { '@type': 'City', name: 'Saco' },
    { '@type': 'City', name: 'Biddeford' },
    { '@type': 'City', name: 'Scarborough' },
    { '@type': 'City', name: 'Portland' },
    { '@type': 'AdministrativeArea', name: 'Southern Maine' },
  ],
  hasMap: businessInfo.mapsLink,
};

export function HomePage() {
  return (
    <>
      <SEO
        title="Plumbing, Heating & HVAC in Saco, ME | Dugan Mechanical"
        description="Looking for plumbing or heating service in Saco and Southern Maine? Contact Dugan Mechanical for plumbing repairs, water heaters, and heating solutions. Call 207-468-0807 to discuss your service needs."
        canonicalPath="/"
        ogImage={heroImage}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional plumber and heating technician repairing mechanical piping in Saco, Maine"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/80 to-navy-950/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-semibold text-blue-300 ring-1 ring-blue-400/30 backdrop-blur">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span>Plumbing & Heating in Saco & Southern Maine</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Plumbing and Heating Services in Saco, Maine
            </h1>
            <p className="mt-6 text-lg text-slate-200 sm:text-xl leading-relaxed">
              Looking for dependable plumbing or heating service in Saco and Southern Maine? From
              active pipe leaks and water heater replacements to boiler diagnostics and stubborn drain
              clogs, {businessInfo.name} delivers honest, code-compliant craftsmanship you can trust.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CallCTA size="lg" />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
              >
                Explore All Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                <span>Upfront Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                <span>Prompt Local Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="border-y border-slate-200 bg-white py-10 shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-snug">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Plumbing Banner */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-navy-950 py-8 text-white shadow-md">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="hidden rounded-full bg-white/20 p-3 backdrop-blur sm:flex">
                <AlertTriangle className="h-8 w-8 text-amber-300" />
              </div>
              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  Dealing with an Urgent Plumbing Emergency in Maine?
                </h2>
                <p className="mt-1 text-sm text-red-100 sm:text-base">
                  Burst pipes, major water heater leaks, or severe sewer backups cannot wait. Call
                  our emergency line now.
                </p>
              </div>
            </div>
            <a
              href={businessInfo.phoneLink}
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-3.5 text-lg font-bold text-red-700 shadow-lg transition-transform hover:scale-105 hover:bg-slate-50"
            >
              <Phone className="h-5 w-5 fill-red-700" />
              <span>Call Now: {businessInfo.phone}</span>
            </a>
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
                Your Local Plumbing & Heating Contractor in Saco, Maine
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Based right in Saco, {businessInfo.name} is dedicated to keeping your home comfortable
                and your plumbing systems operating reliably. Whether you are dealing with a hidden pipe leak,
                an aging water heater failing to produce hot water, or a hydronic heating boiler that needs
                troubleshooting, our team provides practical solutions tailored to Southern Maine properties.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                We combine hands-on mechanical trade expertise with modern diagnostic tools to pinpoint
                issues accurately. We believe in open communication, clean worksites, and transparent quotes
                before any work starts.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                <div>
                  <p className="text-3xl font-extrabold text-blue-600">100%</p>
                  <p className="mt-1 text-sm font-medium text-slate-600">Commitment to Quality</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-blue-600">10+</p>
                  <p className="mt-1 text-sm font-medium text-slate-600">Maine Service Areas</p>
                </div>
              </div>
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
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Plumber fixing pipes with professional tools"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-navy-950/85 p-4 text-white backdrop-blur">
                <p className="text-sm font-semibold">Local Maine Knowledge</p>
                <p className="text-xs text-slate-300">
                  Familiar with historic coastal homes, modern suburban builds, and cold-weather plumbing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential vs Commercial Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Versatile Capabilities
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              Complete Residential & Commercial Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              No matter the scale of the plumbing requirement, {businessInfo.name} delivers precision
              workmanship tailored to your property.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-lg">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Home className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-navy-900">Residential Plumbing</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Homeowners trust us for everything from routine repairs to major system upgrades.
                  We protect your home and ensure clean, reliable water flow throughout your fixtures.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {[
                    'Kitchen & bathroom faucet and sink repairs',
                    'High-efficiency tankless and conventional water heaters',
                    'Toilet rebuilds, replacements, and leak prevention',
                    'Clog removals, kitchen grease traps & root clearing',
                    'Freeze protection, pipe insulation & burst pipe repair',
                  ].map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 border-t border-slate-100 pt-6">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
                >
                  Explore Residential Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-lg">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-100 text-navy-800">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-navy-900">Commercial Plumbing</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Plumbing breakdowns at a business cost money and disruption. We provide fast response
                  times and code-compliant installations for commercial properties.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {[
                    'Multi-family apartment buildings and rental properties',
                    'Restaurant grease line clearing and heavy-duty sink lines',
                    'Backflow prevention testing and certification',
                    'Commercial water heater sizing, maintenance and install',
                    'Main sewer line scoping and rehabilitation',
                  ].map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-navy-700" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 border-t border-slate-100 pt-6">
                <a
                  href={businessInfo.phoneLink}
                  className="inline-flex items-center gap-2 font-semibold text-navy-800 hover:text-navy-900"
                >
                  Discuss Commercial Needs: {businessInfo.phone}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              What We Can Help With
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              Featured Plumbing Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Explore our core plumbing specialties across Maine. Select any service to learn about our
              methods and request service.
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
              View All 10 Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Maine Winter Care & Freeze Protection */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3.5 py-1 text-sm font-semibold text-blue-300 ring-1 ring-blue-400/30">
                <Snowflake className="h-4 w-4" />
                <span>Maine Seasonal Care</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Winter Plumbing & Freeze Protection in Maine
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Maine winters place extreme stress on plumbing systems. When freezing weather hits,
                ice expanding inside water lines can rupture copper, PEX, or PVC pipes in minutes.
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Dugan Mechanical provides proactive winterization for seasonal properties, camps, and
                year-round residences, as well as safe emergency thawing when frozen lines strike.
              </p>
              <div className="mt-8">
                <CallCTA size="md" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {seasonalTips.map((tip) => (
                <div
                  key={tip.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:bg-white/10"
                >
                  <h3 className="text-lg font-bold text-blue-300">{tip.title}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Plumbing Concerns */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Diagnostic Guide
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              Common Plumbing Problems We Diagnose & Fix
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Small plumbing symptoms often indicate deeper line problems. Knowing what to watch for helps
              prevent costly structural water damage.
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

      {/* Why Choose Dugan Mechanical */}
      <section className="bg-navy-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
                Why Homeowners Choose Us
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Honest Diagnostics, Transparent Estimates & Lasting Results
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                When you call {businessInfo.name}, you talk to experienced professionals who care about
                solving your issue right the first time. We don't push unnecessary replacements when a simple
                repair will do, and we provide realistic timelines you can rely on.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Direct consultation and clear guidance on next steps',
                  'Honest upfront pricing with no hidden trip fees',
                  'Licensed professionals using industry-leading tools and parts',
                  'Respect for your home with thorough post-work cleanup',
                  'Knowledgeable guidance on energy-saving fixtures & tankless conversions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
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
              <p className="mt-6 text-slate-300 leading-relaxed">
                Calling allows you to explain the symptoms you are seeing—whether it is water pooling,
                a sudden pressure loss, or strange water heater noises—and get direct guidance on the best
                course of action.
              </p>
              <div className="mt-6">
                <CallCTA size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews / Testimonials */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span>Verified Google Business Profile Reviews</span>
              </div>
              <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
                What Our Customers Say
              </h2>
              <p className="mt-2 text-base text-slate-600 max-w-2xl">
                Real feedback from homeowners and local businesses in Saco, Portland, and Southern Maine.
                Owner Riordan and the Dugan Mechanical team are dedicated to doing the job right the first time.
              </p>
            </div>

            {/* Google Rating Badge */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                <span className="text-2xl font-black text-navy-900">G</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold text-navy-900">5.0</span>
                  <div className="flex items-center text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                  <span>8 Verified Google Reviews</span>
                  <span>•</span>
                  <a
                    href={businessInfo.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {googleReviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-navy-900 text-sm">{review.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                        {review.roleOrBadge && (
                          <span className="rounded bg-blue-100 px-1.5 py-0.5 font-semibold text-blue-800 text-[10px]">
                            {review.roleOrBadge}
                          </span>
                        )}
                        <span>{review.timeAgo}</span>
                      </div>
                    </div>
                    <div className="flex text-amber-400 shrink-0">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-700 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-200/80 pt-3 space-y-2">
                  {review.services && review.services.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {review.services.map((svc, idx) => (
                        <span
                          key={idx}
                          className="rounded bg-slate-200/70 px-2 py-0.5 text-[10px] font-medium text-slate-700"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  )}

                  {review.positiveAttributes && review.positiveAttributes.length > 0 && (
                    <div className="flex flex-wrap gap-1 text-[10px] text-slate-500">
                      <span className="font-semibold text-slate-600">Positive:</span>
                      <span>{review.positiveAttributes.slice(0, 3).join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-blue-50/60 p-6 text-center ring-1 ring-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="text-sm font-bold text-navy-900">
                Worked with Riordan and the Dugan Mechanical team recently?
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Your feedback helps our local Saco business and allows other Southern Maine homeowners to find quality trade service.
              </p>
            </div>
            <a
              href={businessInfo.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              <Star className="h-3.5 w-3.5 fill-white text-white" />
              <span>Leave a Review on Google</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3-Step Service Process */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              How It Works
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              Our Simple Three-Step Process
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Getting quality plumbing service should be straightforward and stress-free.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                num: '1',
                title: 'Call and Describe the Issue',
                description:
                  'Contact us at 207-468-0807 and describe what you are experiencing. We will help you troubleshoot immediately and assess urgency.',
              },
              {
                num: '2',
                title: 'On-Site Diagnostic & Quote',
                description:
                  'We inspect your plumbing lines or fixtures, diagnose the root cause, and provide a transparent, upfront quote before starting.',
              },
              {
                num: '3',
                title: 'Expert Repair & Cleanup',
                description:
                  'Our certified technician completes the repair to code, tests all connections, and leaves your property tidy and fully operational.',
              },
            ].map((step) => (
              <div key={step.num} className="relative rounded-xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
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

      {/* Frequently Asked Questions */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Got Questions?
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Find quick answers to common plumbing questions from Maine property owners.
            </p>
          </div>
          <div className="mt-12">
            <FAQAccordion items={homeFaqs} />
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
            >
              View More FAQs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Coverage & Map */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Service Coverage
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              Communities Dugan Mechanical Serves in Southern Maine
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Based in Saco, Maine, we proudly provide prompt plumbing and heating services throughout
              York and Cumberland counties, including Biddeford, Scarborough, Portland, and nearby towns.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <LocationCard key={loc.slug} location={loc} />
            ))}
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200">
            <iframe
              title="Dugan Mechanical Service Area Map"
              src={businessInfo.mapsEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-800"
            >
              View Detailed Service Area Guides
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <CTASection
        headline="Ready to Get Your Plumbing Problem Solved?"
        subtext="Call Dugan Mechanical today for honest guidance, rapid dispatch, and dependable plumbing craftsmanship in Maine."
      />
    </>
  );
}

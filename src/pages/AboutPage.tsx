import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallCTA, CTASection } from '@/components/CTA';
import { businessInfo } from '@/data/business';

export function AboutPage() {
  return (
    <>
      <SEO
        title={`About ${businessInfo.name}`}
        description={`Learn about ${businessInfo.name}, a plumbing business serving communities in Maine. Call ${businessInfo.phone} to discuss your plumbing needs.`}
        canonicalPath="/about"
      />
      <Breadcrumbs items={[{ label: 'About' }]} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                About Us
              </span>
              <h1 className="mt-3 text-4xl font-bold text-navy-900 sm:text-5xl">
                About Dugan Mechanical
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {businessInfo.name} is a plumbing business serving communities in Maine. The company
                handles a range of plumbing needs for residential and commercial properties, from
                routine repairs to fixture installations and water heater service.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Every plumbing situation is different. Whether you are dealing with a leaking pipe, a
                drain that will not clear, a water heater that has stopped producing hot water, or a
                new fixture that needs to be installed, the first step is to call and describe what
                you are experiencing.
              </p>
              <div className="mt-8">
                <CallCTA size="lg" />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/8486927/pexels-photo-8486927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Plumbing technician with professional tools"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy-900">Plumbing Specialties</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              The services listed below cover the most common types of plumbing work. Some details
              should be verified with the business directly.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Plumbing Repair',
                description:
                  'Fixes for leaking pipes, dripping faucets, running toilets, and other common plumbing problems.',
              },
              {
                title: 'Drain Cleaning',
                description:
                  'Clearing slow-moving or fully clogged drains in sinks, tubs, showers, and floor drains.',
              },
              {
                title: 'Water Heater Services',
                description:
                  'Repair and installation of tank-style and tankless water heaters for homes and businesses.',
              },
              {
                title: 'Leak Detection',
                description:
                  'Locating hidden water leaks in walls, slabs, and underground pipes before they cause further damage.',
              },
              {
                title: 'Fixture Installation',
                description:
                  'Installing sinks, faucets, toilets, showerheads, and other plumbing fixtures in kitchens and bathrooms.',
              },
              {
                title: 'Pipe Repair',
                description:
                  'Addressing cracked, corroded, frozen, or damaged water and drain pipes throughout your property.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy-900">Our Approach to Communication</h2>
          </div>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              Good plumbing service starts with good communication. When you call{' '}
              {businessInfo.name}, you can describe your problem in your own words and ask any
              questions you have. The plumber will listen, discuss what may be happening, and
              explain the options available to you.
            </p>
            <p>
              You should feel comfortable asking about the scope of the work, what to expect, and
              what steps come next. The goal is to make the process as clear and straightforward as
              possible so you can make informed decisions about your property.
            </p>
            <p>
              If a detail needs to be confirmed — such as whether a specific service is available in
              your area or what the scheduling process looks like — calling is always the best way to
              get an accurate answer.
            </p>
          </div>
          <div className="mt-8 text-center">
            <CallCTA size="lg" />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

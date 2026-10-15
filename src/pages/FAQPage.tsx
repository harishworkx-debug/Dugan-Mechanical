import { Phone } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CTASection } from '@/components/CTA';
import { businessInfo } from '@/data/business';

const faqItems = [
  {
    question: 'What plumbing services does Dugan Mechanical provide?',
    answer: `${businessInfo.name} provides a range of plumbing services including plumbing repair, drain cleaning, leak detection, pipe repair, water heater repair and installation, fixture installation, toilet repair, faucet repair and installation, and sewer line services. Call ${businessInfo.phone} to confirm which services are available for your specific situation.`,
  },
  {
    question: 'Can I call to discuss a plumbing repair?',
    answer: `Yes. Calling is the best way to describe what you are experiencing and ask questions. When you call, share as much detail as you can about the problem, including which fixture is affected, when it started, and whether it is getting worse.`,
  },
  {
    question: 'What information should I provide when describing a leak?',
    answer: `Describe where you first noticed water or dampness, when the problem started, whether it is continuous or intermittent, and whether you have noticed any changes in water pressure or your water bill. If there is active leaking, try to contain the water while you call.`,
  },
  {
    question: 'When should I contact a plumber about a slow drain?',
    answer: `If a drain has been slow for more than a few days, or if multiple drains in your home are slow at the same time, it is worth calling. A single slow drain may be a local clog, while multiple slow drains can indicate a deeper issue in the main line.`,
  },
  {
    question: 'Which Maine communities does Dugan Mechanical serve?',
    answer: `The proposed service territory includes Portland, Freeport, Brunswick, Lewiston, Auburn, Falmouth, Scarborough, Yarmouth, Bath, and Augusta. Please call ${businessInfo.phone} to confirm that your specific community is covered before scheduling.`,
  },
  {
    question: 'How can I contact Dugan Mechanical?',
    answer: `You can reach ${businessInfo.name} by phone at ${businessInfo.phone}. You can also visit the official website at ${businessInfo.website} or find the business on Google Maps.`,
  },
];

export function FAQPage() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description={`Common questions about ${businessInfo.name}'s plumbing services in Maine. Call ${businessInfo.phone} for answers specific to your situation.`}
        canonicalPath="/faq"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }}
      />
      <Breadcrumbs items={[{ label: 'FAQ' }]} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              FAQ
            </span>
            <h1 className="mt-3 text-4xl font-bold text-navy-900 sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Here are answers to some common questions about {businessInfo.name}. If you need more
              specific information, calling is always the best option.
            </p>
          </div>

          <div className="mt-12">
            <FAQAccordion items={faqItems} />
          </div>

          <div className="mt-12 rounded-2xl bg-slate-50 p-8 text-center ring-1 ring-slate-200">
            <p className="text-lg text-slate-700">
              Have a question that is not answered here? Call{' '}
              <a href={businessInfo.phoneLink} className="font-bold text-blue-600 hover:text-blue-700">
                {businessInfo.phone}
              </a>{' '}
              and ask directly.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href={businessInfo.phoneLink}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] hover:bg-blue-700"
              >
                <Phone className="h-5 w-5" />
                Call {businessInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

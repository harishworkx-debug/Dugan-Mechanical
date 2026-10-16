import { Link } from 'react-router-dom';
import {
  Phone,
  HelpCircle,
  BookOpen,
  AlertTriangle,
  Wrench,
  Droplets,
  Flame,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CTASection } from '@/components/CTA';
import { businessInfo } from '@/data/business';

const guides = [
  {
    id: 'pipe-leak-response',
    title: 'What to Do When a Pipe Starts Leaking in Your Home',
    icon: AlertTriangle,
    category: 'Emergency Protocol',
    summary:
      'A step-by-step emergency action plan to prevent structural water damage, locate your main shutoff valve, and safely relieve system pressure.',
    steps: [
      {
        num: '1',
        title: 'Shut Off the Main Water Supply Immediately',
        text: 'Locate your main shutoff valve—typically located in the basement where the municipal water line enters the foundation wall, or near your well pressure tank. For quarter-turn ball valves, turn the lever perpendicular to the pipe. For older gate valves, turn clockwise until hand-tight.',
      },
      {
        num: '2',
        title: 'Cut Off Power to Wet Areas',
        text: 'If water is spraying or dripping near wall outlets, ceiling light fixtures, or your electrical service panel, turn off the corresponding breaker immediately. Never step into standing water to reach an electrical switch.',
      },
      {
        num: '3',
        title: 'Drain Residual Pressure from the System',
        text: 'Open the lowest faucet in your home (such as a basement laundry sink or outdoor frost-free sillcock) and the highest faucet in an upstairs bathroom. This allows air in and drains standing water out safely through a fixture rather than through the leaking pipe fracture.',
      },
      {
        num: '4',
        title: 'Call for Professional Pipe Repair',
        text: 'Take photos for insurance records, place buckets or towels beneath the joint, and contact a licensed plumbing technician to execute code-compliant copper solder, press, or PEX splicing.',
      },
    ],
    primaryLink: '/pipe-repair-saco-me',
    linkText: 'Learn About Pipe Repair Services',
    secondaryLink: '/leak-detection-saco-me',
    secondaryLinkText: 'Concealed Leak Detection',
  },
  {
    id: 'water-heater-repair-vs-replace',
    title: 'When Should You Repair or Replace a Water Heater?',
    icon: Flame,
    category: 'Equipment Longevity',
    summary:
      'Evaluate your water heater using the 50% repair rule, equipment age benchmarks, and clear warning signs of internal tank failure.',
    steps: [
      {
        num: '1',
        title: 'Check the Age of Your Unit (Serial Number Rating)',
        text: 'Conventional residential tank water heaters have an expected lifespan of 8 to 12 years. If your unit is under 8 years old, component repair is usually sensible. If it is beyond 10 years, replacement is typically the safer financial investment.',
      },
      {
        num: '2',
        title: 'Apply the 50% Repair Rule',
        text: 'If the estimated cost of the repair exceeds 50% of the cost of a brand new, high-efficiency water heater—and the unit is already past mid-life—investing that money toward a modern replacement with a fresh manufacturer warranty is recommended.',
      },
      {
        num: '3',
        title: 'Component Fault vs. Internal Tank Corrosion',
        text: 'Replaceable parts include upper/lower heating elements, gas control valves, thermocouples, thermostats, and T&P relief valves. However, if water is pooling beneath the tank from a rusted-through steel jacket, the unit cannot be repaired under plumbing safety codes.',
      },
      {
        num: '4',
        title: 'Energy Efficiency & Rebate Opportunities',
        text: 'Upgrading from an older atmospheric gas tank to a modern hybrid heat pump water heater or high-efficiency tankless system can significantly reduce monthly utility bills while delivering continuous hot water.',
      },
    ],
    primaryLink: '/water-heater-repair-saco-me',
    linkText: 'Water Heater Repair Diagnostic',
    secondaryLink: '/water-heater-installation-saco-me',
    secondaryLinkText: 'High-Efficiency Installation Options',
  },
  {
    id: 'drain-cleaning-vs-sewer-line-repair',
    title: "Drain Cleaning vs. Sewer Line Repair: What's the Difference?",
    icon: Droplets,
    category: 'Drainage Diagnostics',
    summary:
      'Understand whether your plumbing issue is an isolated fixture trap blockage or a serious underground municipal sewer lateral breakdown.',
    steps: [
      {
        num: '1',
        title: 'Determine the Clog Scope (Single vs. Multi-Fixture)',
        text: 'If only your bathroom sink or shower is draining slowly, the restriction is localized to that specific fixture P-trap. If flushing a toilet causes water to bubble up in your shower, or running your washing machine backs up the basement floor drain, the main sewer line is obstructed.',
      },
      {
        num: '2',
        title: 'When Mechanical Drain Snaking Works',
        text: 'Electric drain augers with specialized blades cut through soft clogs (grease, soap scum, food debris) and scour intrusive tree root mats out of the line, completely restoring full gravity flow.',
      },
      {
        num: '3',
        title: 'When Structural Sewer Repair is Required',
        text: 'If an underground sewer pipe is crushed, back-pitched (belly), collapsed, or broken by shifting granite/clay soil, snaking will only open a temporary passage. Permanent resolution requires spot excavation, pipe replacement, or trenchless sleeving.',
      },
      {
        num: '4',
        title: 'Camera Inspection Verification',
        text: 'Running a specialized sewer camera through your main cleanout confirms pipe material (cast iron, clay tile, PVC) and pinpoints the exact physical depth and nature of the obstruction.',
      },
    ],
    primaryLink: '/drain-cleaning-saco-me',
    linkText: 'Professional Drain Cleaning',
    secondaryLink: '/sewer-line-services-saco-me',
    secondaryLinkText: 'Main Sewer Line Services',
  },
  {
    id: 'signs-of-hidden-plumbing-leak',
    title: 'Common Signs of a Hidden Plumbing Leak',
    icon: Search,
    category: 'Leak Prevention',
    summary:
      'Spotting the subtle indicators of concealed pipe leaks inside walls, subfloors, and concrete slabs before major drywall rot or mold occurs.',
    steps: [
      {
        num: '1',
        title: 'Spinning Water Meter Indicator',
        text: 'Turn off every faucet, appliance, and outdoor hose in your house. Go to your water meter and observe the low-flow dial or digital consumption readout. If the indicator moves while no water is running, a pressurized supply leak exists.',
      },
      {
        num: '2',
        title: 'Unexplained Spike in Municipal Utility Bills',
        text: 'A sudden, steady increase in quarterly water charges without any change in household usage often indicates an undetected pinhole line leak running 24/7 inside a wall cavity or underground.',
      },
      {
        num: '3',
        title: 'Warm Spots on Floors & Foundation Slabs',
        text: 'If you feel an unusual localized warm area on your kitchen tile, hardwood flooring, or concrete basement floor, a hot water line beneath the slab may have developed a rupture.',
      },
      {
        num: '4',
        title: 'Audible Hissing or Trickling Sounds',
        text: 'Hearing continuous water flow when all rooms are silent points to an active leak. Professional non-destructive acoustic sensors and thermal imaging can pinpoint the pipe defect without unnecessary wall demolition.',
      },
    ],
    primaryLink: '/leak-detection-saco-me',
    linkText: 'Acoustic & Thermal Leak Detection',
    secondaryLink: '/plumbing-repair-saco-me',
    secondaryLinkText: 'Whole-Home Plumbing Repair',
  },
  {
    id: 'toilet-keeps-running',
    title: 'What Causes a Toilet to Keep Running?',
    icon: Wrench,
    category: 'Fixture Troubleshooting',
    summary:
      'Why phantom flushing wastes up to 200 gallons of water daily, how to run a silent dye test, and what mechanical parts need rebuild.',
    steps: [
      {
        num: '1',
        title: 'Deteriorated Rubber Flapper or Seal',
        text: 'Over time, mineral deposits and chlorine in municipal water harden or warp the rubber/silicone flapper. Water continuously seeps from the tank down into the bowl, causing the fill valve to periodically hiss and refill.',
      },
      {
        num: '2',
        title: 'Improper Water Fill Level',
        text: 'If the float is calibrated too high, water will continuously overflow down the central plastic overflow tube. Adjusting the float screw so the water line rests 1/2 to 1 inch below the top of the overflow tube corrects this issue.',
      },
      {
        num: '3',
        title: 'Kinked or Tangled Lift Chain',
        text: 'If the chain connecting the flush handle to the flapper is too short, it prevents the flapper from seating completely. If it is too long, it can snag beneath the flapper gasket during flushing.',
      },
      {
        num: '4',
        title: 'Perform the 15-Minute Food Coloring Test',
        text: 'Place 5–6 drops of dark food coloring in your toilet tank. Do not flush. Wait 15 minutes. If color appears in the bowl, water is bypassing your flapper seal and a commercial-grade flapper or flush valve rebuild is needed.',
      },
    ],
    primaryLink: '/toilet-repair-saco-me',
    linkText: 'Toilet Repair & Rebuild Services',
    secondaryLink: '/fixture-installation-saco-me',
    secondaryLinkText: 'Modern WaterSense Toilet Installation',
  },
];

const faqItems = [
  {
    question: 'What should I do immediately if a pipe starts leaking?',
    answer:
      'First, locate and turn off your main water shutoff valve immediately (typically located where the water main enters your basement or utility room) to stop water flow and limit damage. If water is leaking near electrical outlets, light fixtures, or your breaker panel, turn off electricity to that section if it is safe to do so. Open the lowest faucet in your home to drain remaining water from the lines, place towels or a bucket beneath the leak, and call Dugan Mechanical at 207-468-0807 for prompt dispatch.',
  },
  {
    question: 'When should a water heater be repaired versus replaced?',
    answer:
      'If your water heater is under 8 to 10 years old and the problem is an isolated component—such as a faulty heating element, thermostat, thermocouple, or pressure relief valve—repair is usually the most cost-effective solution. However, if the tank itself is actively leaking from internal corrosion, if the unit is over a decade old, or if rust-colored water persists, replacement is strongly recommended. Modern high-efficiency tank and tankless models significantly lower energy costs and prevent tank rupture.',
  },
  {
    question: 'What causes recurring drain clogs in Southern Maine homes?',
    answer:
      'While a single slow sink is usually caused by localized hair, soap residue, or kitchen grease, clogs that keep returning often point to deeper issues in the main waste line. In older Southern Maine properties, tree roots frequently penetrate underground pipe joints, older cast iron lines develop internal scale and rust that catches debris, or pipes may have settled and formed standing bellies. A professional snaking or camera diagnostic can identify the exact root cause so it can be cleared properly.',
  },
  {
    question: 'Which areas does Dugan Mechanical serve?',
    answer:
      'Dugan Mechanical is based in Saco, Maine. Our primary daily service territory covers York and Cumberland counties, including Saco, Biddeford, Scarborough, Old Orchard Beach, Portland, South Portland, Kennebunk, Buxton, Westbrook, and Falmouth. For scheduled heating projects, boiler replacements, or major remodels, we also accommodate neighboring Southern Maine communities. Call 207-468-0807 to confirm coverage for your address.',
  },
  {
    question: 'How can a customer request an estimate or schedule service?',
    answer:
      'You can schedule service or request an estimate by calling our office directly at 207-468-0807 to speak with our team. You can also submit an online request through our Contact page. We assess the scope of work, explain the recommended repair or installation options, and provide transparent upfront pricing before any work begins.',
  },
  {
    question: 'Do you service home heating systems and boilers as well as plumbing?',
    answer:
      'Yes. As a mechanical contractor, Dugan Mechanical handles hydronic heating systems, baseboard hot water loops, radiators, circulator pumps, and zone valves. We help Southern Maine property owners troubleshoot uneven heating, clanking pipes, boiler pressure drops, and winter freeze risks alongside our comprehensive plumbing services.',
  },
  {
    question: 'How can I prevent frozen pipes during severe Maine cold snaps?',
    answer:
      'Disconnect and drain all outdoor garden hoses before freezing weather arrives. Ensure uninsulated water pipes along exterior basement walls or crawlspaces are wrapped with high-grade pipe insulation. During sub-zero weather, keep cabinet doors under sinks open to circulate warm indoor air, and let cold water trickle slightly from faucets served by exposed pipes.',
  },
];

export function FAQPage() {
  return (
    <>
      <SEO
        title={`Helpful Plumbing Guides & FAQs | ${businessInfo.name} (Saco, ME)`}
        description={`Authoritative troubleshooting guides and practical answers to common plumbing, boiler, and water heater problems from licensed technicians at Dugan Mechanical.`}
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
      <Breadcrumbs items={[{ label: 'Guides & FAQ' }]} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200">
              <BookOpen className="h-3.5 w-3.5" />
              Technical Advice & Knowledge Hub
            </span>
            <h1 className="mt-4 text-4xl font-bold text-navy-900 sm:text-5xl">
              Plumbing Guides & Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Clear, practical advice from licensed trade technicians. Learn how to respond to
              active leaks, diagnose water heater problems, and understand your plumbing system.
            </p>
          </div>

          {/* Jump Links Navigation */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#guides"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-blue-600 hover:text-white"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>5 Homeowner Troubleshooting Guides</span>
            </a>
            <a
              href="#faqs"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-blue-600 hover:text-white"
            >
              <HelpCircle className="h-3.5 w-3.5" />
              <span>General Service FAQs</span>
            </a>
          </div>

          {/* 5 In-Depth Practical Guides */}
          <div id="guides" className="mt-16 space-y-12">
            <div className="border-b border-slate-200 pb-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                In-Depth Technical Insights
              </span>
              <h2 className="mt-1 text-2xl font-bold text-navy-900 sm:text-3xl">
                Practical Homeowner Troubleshooting Guides
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Detailed, step-by-step guidance designed to help property owners understand symptoms,
                mitigate immediate damage, and make informed repair decisions.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-1">
              {guides.map((guide) => {
                const IconComponent = guide.icon;
                return (
                  <article
                    key={guide.id}
                    id={guide.id}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-slate-300"
                  >
                    <div className="border-b border-slate-100 bg-slate-50/70 p-6 sm:p-8">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <span className="inline-block rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
                              {guide.category}
                            </span>
                            <h3 className="mt-1 text-xl font-bold text-navy-900 sm:text-2xl">
                              {guide.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-3xl">
                        {guide.summary}
                      </p>
                    </div>

                    <div className="p-6 sm:p-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Recommended Action Workflow:
                      </h4>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {guide.steps.map((step) => (
                          <div
                            key={step.num}
                            className="rounded-xl border border-slate-100 bg-slate-50/50 p-4"
                          >
                            <div className="flex items-center gap-2">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                                {step.num}
                              </span>
                              <h5 className="text-sm font-bold text-navy-900">{step.title}</h5>
                            </div>
                            <p className="mt-2 text-xs leading-relaxed text-slate-600">
                              {step.text}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5 text-xs">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-semibold text-slate-700">Related Services:</span>
                          <Link
                            to={guide.primaryLink}
                            className="inline-flex items-center gap-1 font-bold text-blue-600 hover:underline"
                          >
                            <span>{guide.linkText}</span>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                          <span className="text-slate-300">•</span>
                          <Link
                            to={guide.secondaryLink}
                            className="inline-flex items-center gap-1 font-medium text-slate-600 hover:text-blue-600 hover:underline"
                          >
                            <span>{guide.secondaryLinkText}</span>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                        <a
                          href={businessInfo.phoneLink}
                          className="inline-flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-800"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          <span>Call 207-468-0807 for Assistance</span>
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* General FAQs Section */}
          <div id="faqs" className="mt-20 border-t border-slate-200 pt-16">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                General Knowledge Base
              </span>
              <h2 className="mt-2 text-3xl font-bold text-navy-900">
                General Service & Policy FAQs
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
                Quick answers regarding our dispatch radius, estimates, heating coverage, and response times.
              </p>
            </div>

            <div className="mt-8 max-w-4xl mx-auto">
              <FAQAccordion items={faqItems} />
            </div>
          </div>

          {/* Expert Contact Banner */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-navy-900 to-blue-900 p-8 text-center text-white shadow-lg max-w-3xl mx-auto">
            <ShieldCheck className="mx-auto h-10 w-10 text-blue-400" />
            <h3 className="mt-3 text-2xl font-bold">Have a Complex or Urgent Plumbing Situation?</h3>
            <p className="mt-2 text-sm text-slate-200 leading-relaxed">
              Every home and plumbing system is unique. If you're dealing with an unfamiliar noise,
              a pressure drop, or an active water leak, calling directly connects you with an experienced technician.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={businessInfo.phoneLink}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg transition-all hover:bg-blue-700"
              >
                <Phone className="h-5 w-5" />
                <span>Call Dugan Mechanical: {businessInfo.phone}</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                <span>Request Online Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}



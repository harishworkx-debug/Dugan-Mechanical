import { Link } from 'react-router-dom';
import { Home, Phone, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { CallCTA } from '@/components/CTA';
import { businessInfo } from '@/data/business';

export function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for could not be found. Call Dugan Mechanical to discuss your plumbing needs."
        canonicalPath="/404"
      />
      <section className="flex min-h-[60vh] items-center bg-white py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
            <span className="text-3xl font-bold text-blue-600">404</span>
          </div>
          <h1 className="mt-8 text-4xl font-bold text-navy-900">Page Not Found</h1>
          <p className="mt-4 text-lg text-slate-600">
            The page you are looking for may have been moved or no longer exists. Try one of the
            links below or call {businessInfo.name} to get the help you need.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-800"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
            <CallCTA size="md" />
          </div>
          <div className="mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              Browse All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

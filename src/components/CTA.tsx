import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { businessInfo } from '@/data/business';

export function CallCTA({
  variant = 'primary',
  size = 'md',
  className = '',
}: {
  variant?: 'primary' | 'secondary' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20',
    secondary: 'bg-white hover:bg-slate-50 text-navy-900 border border-slate-200 shadow-sm',
    light: 'bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  return (
    <a
      href={businessInfo.phoneLink}
      className={`inline-flex items-center gap-2 rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <Phone className="h-5 w-5" />
      Call {businessInfo.phone}
    </a>
  );
}

export function CTASection({
  headline = 'Need Help With a Plumbing Problem?',
  subtext = 'Call Dugan Mechanical to discuss your plumbing needs.',
}: {
  headline?: string;
  subtext?: string;
}) {
  return (
    <section className="bg-navy-900 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{headline}</h2>
        <p className="mt-4 text-lg text-slate-300">{subtext}</p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <CallCTA size="lg" />
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
          >
            Contact Page
          </Link>
        </div>
      </div>
    </section>
  );
}

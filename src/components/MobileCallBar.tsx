import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { businessInfo } from '@/data/business';

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 p-2.5 shadow-2xl backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        <a
          href={businessInfo.phoneLink}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-md shadow-blue-600/25 active:bg-blue-700"
        >
          <Phone className="h-4 w-4" />
          <span>Call {businessInfo.phone}</span>
        </a>
        <Link
          to="/contact"
          className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-semibold text-navy-900 active:bg-slate-100"
        >
          <Calendar className="h-4 w-4 text-blue-600" />
          <span>Schedule</span>
        </Link>
      </div>
    </div>
  );
}

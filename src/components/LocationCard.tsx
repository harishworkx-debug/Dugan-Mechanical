import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import type { Location } from '@/data/locations';

export function LocationCard({
  location,
  serviceSlug,
}: {
  location: Location;
  serviceSlug?: string;
}) {
  const href = serviceSlug
    ? `/${serviceSlug}-${location.slug}`
    : `/plumbing-repair-${location.slug}`;
  return (
    <Link
      to={href}
      className="group flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:shadow-lg hover:ring-blue-200"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
        <MapPin className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-navy-900">
          {location.name}, {location.stateAbbrev}
        </h3>
        <p className="text-sm text-slate-500">{location.county}</p>
      </div>
      <ArrowRight className="h-5 w-5 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-blue-600" />
    </Link>
  );
}

import { Link } from 'react-router-dom';
import { Phone, Wrench, MapPin, Globe, Navigation } from 'lucide-react';
import { businessInfo } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { primaryLocationSlug } from '@/data/services';

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <Wrench className="h-6 w-6" />
              </div>
              <span className="text-lg font-bold">Dugan Mechanical</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Plumbing services for homes and businesses in Maine. Call to discuss your plumbing
              needs with a local professional.
            </p>
            <a
              href={businessInfo.phoneLink}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <Phone className="h-4 w-4" />
              {businessInfo.phone}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}-${primaryLocationSlug}`}
                    className="text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="font-semibold text-blue-400 transition-colors hover:text-blue-300"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Service Areas</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {locations.slice(0, 6).map((l) => (
                <li key={l.slug}>
                  <Link
                    to={`/plumbing-repair-${l.slug}`}
                    className="text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {l.name}, {l.stateAbbrev}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/service-areas"
                  className="font-semibold text-blue-400 transition-colors hover:text-blue-300"
                >
                  View All Areas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                <a href={businessInfo.phoneLink} className="text-slate-400 hover:text-blue-400">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 shrink-0 text-blue-400" />
                <a
                  href={businessInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400"
                >
                  duganmechanical.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Navigation className="h-4 w-4 shrink-0 text-blue-400" />
                <a
                  href={businessInfo.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400"
                >
                  Google Maps Listing
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-blue-400" />
                <span className="text-slate-400">{businessInfo.state}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved. Serving
            communities in {businessInfo.state}.
          </p>
          <p className="mt-2 text-xs text-slate-600">
            Some service and location details should be verified with the business before relying on
            them for decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}

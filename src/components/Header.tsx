import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Wrench, ChevronDown, MapPin } from 'lucide-react';
import { businessInfo } from '@/data/business';
import { services, primaryLocationSlug } from '@/data/services';
import { locations } from '@/data/locations';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

function Dropdown({
  label,
  items,
  basePath,
  column = false,
  viewAllPath,
  viewAllLabel,
}: {
  label: string;
  items: { name: string; slug: string; suffix?: string }[];
  basePath: string;
  column?: boolean;
  viewAllPath?: string;
  viewAllLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:text-white hover:bg-white/5"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className={`absolute left-0 top-full z-50 mt-1 rounded-xl border border-slate-200 bg-white p-2 shadow-2xl ${
            column ? 'grid w-[440px] grid-cols-2 gap-1' : 'w-56'
          }`}
        >
          {viewAllPath && (
            <Link
              to={viewAllPath}
              onClick={() => setOpen(false)}
              className={`${column ? 'col-span-2' : ''} block rounded-lg border-b border-slate-100 px-3 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50`}
            >
              {viewAllLabel || 'View All'}
            </Link>
          )}
          {items.map((item) => (
            <Link
              key={item.slug}
              to={`${basePath}${item.slug}${item.suffix || ''}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMobileTab(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const serviceItems = services.map((s) => ({ name: s.name, slug: s.slug, suffix: `-${primaryLocationSlug}` }));
  const locationItems = locations.map((l) => ({ name: `${l.name}, ${l.stateAbbrev}`, slug: `plumbing-repair-${l.slug}`, suffix: '' }));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/95 shadow-lg backdrop-blur-md' : 'bg-navy-900'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2.5 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
            <Wrench className="h-6 w-6" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight">Dugan Mechanical</span>
            <span className="text-xs text-slate-400">Plumbing & Heating • Saco, ME</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive ? 'text-blue-400' : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`
            }
          >
            Home
          </NavLink>
          <Dropdown label="Services" items={serviceItems} basePath="/" column viewAllPath="/services" viewAllLabel="View All Services" />
          <Dropdown label="Service Areas" items={locationItems} basePath="/" viewAllPath="/service-areas" viewAllLabel="View All Service Areas" />
          {navLinks.slice(1).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-blue-400' : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={businessInfo.phoneLink}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.03] hover:bg-blue-700"
          >
            <Phone className="h-4 w-4" />
            {businessInfo.phone}
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy-900 lg:hidden">
          <nav className="mx-auto max-h-[80vh] max-w-7xl overflow-y-auto px-4 py-3">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block rounded-md px-4 py-3 text-base font-medium transition-colors ${
                  isActive ? 'text-blue-400' : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`
              }
            >
              Home
            </NavLink>

            {/* Services dropdown - mobile */}
            <button
              onClick={() => setMobileTab(mobileTab === 'services' ? null : 'services')}
              className="flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:text-white hover:bg-white/5"
            >
              Services
              <ChevronDown className={`h-5 w-5 transition-transform ${mobileTab === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {mobileTab === 'services' && (
              <div className="ml-4 mb-2 space-y-0.5">
                <Link to="/services" className="block rounded-md px-4 py-2.5 text-sm text-blue-400 hover:bg-white/5">
                  View All Services
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}-${primaryLocationSlug}`}
                    className="block rounded-md px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Service Areas dropdown - mobile */}
            <button
              onClick={() => setMobileTab(mobileTab === 'areas' ? null : 'areas')}
              className="flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:text-white hover:bg-white/5"
            >
              Service Areas
              <ChevronDown className={`h-5 w-5 transition-transform ${mobileTab === 'areas' ? 'rotate-180' : ''}`} />
            </button>
            {mobileTab === 'areas' && (
              <div className="ml-4 mb-2 space-y-0.5">
                <Link to="/service-areas" className="block rounded-md px-4 py-2.5 text-sm text-blue-400 hover:bg-white/5">
                  View All Service Areas
                </Link>
                {locations.map((l) => (
                  <Link
                    key={l.slug}
                    to={`/plumbing-repair-${l.slug}`}
                    className="block rounded-md px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                  >
                    {l.name}, {l.stateAbbrev}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(1).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block rounded-md px-4 py-3 text-base font-medium transition-colors ${
                    isActive ? 'text-blue-400' : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={businessInfo.phoneLink}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-base font-semibold text-white"
            >
              <Phone className="h-5 w-5" />
              Call {businessInfo.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

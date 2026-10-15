import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/data/services';
import { primaryLocationSlug } from '@/data/services';

export function ServiceCard({ service }: { service: Service }) {
  const href = `/${service.slug}-${primaryLocationSlug}`;
  return (
    <Link
      to={href}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:shadow-xl hover:ring-blue-200"
    >
      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-navy-900">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {service.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700">
          {service.name}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

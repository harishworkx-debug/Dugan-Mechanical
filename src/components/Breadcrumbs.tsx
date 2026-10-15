import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-slate-50">
      <div className="mx-auto flex max-w-7xl items-center gap-1 px-4 py-3 text-sm text-slate-600">
        <Link to="/" className="flex items-center gap-1 transition-colors hover:text-blue-600">
          <Home className="h-4 w-4" />
          <span className="sr-only">Home</span>
        </Link>
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4 text-slate-400" />
            {item.path ? (
              <Link to={item.path} className="transition-colors hover:text-blue-600">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-navy-900">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}

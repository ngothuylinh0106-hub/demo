import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
      <Link to="/" className="hover:text-primary">Trang chủ</Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1">
          <ChevronRight className="size-3.5" />
          {item.to ? (
            <Link to={item.to} className="hover:text-primary">{item.label}</Link>
          ) : (
            <span className="text-foreground/70">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
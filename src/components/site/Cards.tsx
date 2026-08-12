import { Link } from "@tanstack/react-router";
import {
  AirVent,
  ArrowRight,
  Check,
  MapPin,
  Refrigerator,
  ShowerHead,
  Sparkles,
  Wrench,
  WashingMachine,
} from "lucide-react";
import type { ServiceDetail } from "@/data/services";
import type { Area } from "@/data/areas";
import { formatDate, type BlogPost } from "@/data/blog";

const icons = {
  air: AirVent,
  fridge: Refrigerator,
  washer: WashingMachine,
  heater: ShowerHead,
  clean: Sparkles,
  maintain: Wrench,
};

export function ServiceCard({ service }: { service: ServiceDetail }) {
  const Icon = icons[service.icon];
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
      <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-navy">{service.title}</h3>
      <ul className="mt-4 flex-1 space-y-2">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Link
        to={service.path}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary"
      >
        XEM CHI TIẾT <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}

export function AreaCard({ area }: { area: Area }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card transition-colors hover:border-primary/40">
      <div className="flex items-center gap-2 text-navy">
        <MapPin className="size-4 shrink-0 text-primary" />
        <p className="truncate font-bold">{area.name}</p>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{area.note}</p>
    </div>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">{post.category}</p>
      <h3 className="mt-2 text-lg font-bold leading-snug text-navy">
        <Link to="/blog/$slug" params={{ slug: post.slug }}>{post.title}</Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      <p className="mt-5 text-xs text-muted-foreground">{formatDate(post.date)}</p>
    </article>
  );
}
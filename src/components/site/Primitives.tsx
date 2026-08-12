import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  muted,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  muted?: boolean;
}) {
  return (
    <section id={id} className={cn("py-14 sm:py-20", muted && "bg-surface", className)}>
      <div className="mx-auto max-w-7xl px-4 lg:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      )}
      <As className="mt-2 text-2xl font-extrabold uppercase leading-tight tracking-tight text-navy sm:text-3xl lg:text-4xl">
        {title}
      </As>
      {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
}

export function CallButton({ className, label = "GỌI THỢ NGAY" }: { className?: string; label?: string }) {
  return (
    <a
      href={site.phoneHref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-card transition-transform hover:scale-[1.02]",
        className,
      )}
    >
      <Phone className="size-4" /> {label} · {site.phone}
    </a>
  );
}

export function BookButton({ className, label = "ĐẶT LỊCH SỬA CHỮA" }: { className?: string; label?: string }) {
  return (
    <Link
      to="/lien-he"
      hash="dat-lich"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-bold text-navy transition-colors hover:bg-secondary",
        className,
      )}
    >
      {label}
    </Link>
  );
}

export function CTABanner({
  title = "Cần thợ điện lạnh có mặt sớm?",
  description = "Gọi trực tiếp để được tư vấn nhanh, hoặc đặt lịch để kỹ thuật viên liên hệ xác nhận thời gian.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section>
      <div className="rounded-3xl bg-[image:var(--gradient-hero)] px-6 py-12 text-center text-navy-foreground sm:px-12">
        <h2 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy-foreground/80">{description}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <CallButton />
          <BookButton className="border-navy-foreground/25 bg-navy-foreground/10 text-navy-foreground hover:bg-navy-foreground/20" />
        </div>
      </div>
    </Section>
  );
}
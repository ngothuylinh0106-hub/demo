import { Link } from "@tanstack/react-router";
import { CalendarClock, Phone } from "lucide-react";
import { site } from "@/config/site";

export function FloatingCTA() {
  return (
    <>
      {/* Mobile bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur md:hidden">
        <a href={site.phoneHref} className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-accent-foreground bg-accent">
          <Phone className="size-4" /> GỌI NGAY
        </a>
        <Link to="/lien-he" hash="dat-lich" className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-navy">
          <CalendarClock className="size-4" /> ĐẶT LỊCH
        </Link>
      </div>

      {/* Desktop floating button */}
      <a
        href={site.phoneHref}
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-bold text-accent-foreground shadow-lift transition-transform hover:scale-105 md:inline-flex"
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-foreground/50" />
          <span className="relative inline-flex size-2.5 rounded-full bg-accent-foreground" />
        </span>
        <Phone className="size-4" /> Gọi thợ
      </a>
    </>
  );
}
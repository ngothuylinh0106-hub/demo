import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { site, mainNav } from "@/config/site";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur transition-shadow",
        scrolled && "shadow-card",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-6 py-3 lg:flex lg:justify-between lg:px-6">
        
        <Link
                  to="/"
                  className="flex min-w-0 items-center"
                  onClick={() => setOpen(false)}
                >
                  <img
                    src="/logo3.png"
                    alt="Sửa chữa điện lạnh Bình Tân"
                    className=" h-30 w-full shrink-0 object-contain"
                  />
        </Link>





        <nav className="hidden items-center gap-1 lg:flex">
          <NavLink to="/">Trang chủ</NavLink>
          <div className="group relative">
            <Link
              to="/dich-vu"
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-navy"
            >
              Dịch vụ <ChevronDown className="size-4" />
            </Link>
            <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-xl border border-border bg-popover p-2 opacity-0 shadow-lift transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={s.path}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-navy"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/bang-gia">Bảng giá</NavLink>
          <NavLink to="/khu-vuc">Khu vực phục vụ</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/lien-he">Liên hệ</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-3 py-2.5 text-sm font-bold text-accent-foreground shadow-card transition-transform hover:scale-[1.02] sm:px-4"
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">GỌI THỢ NGAY</span>
            <span className="sm:hidden">Gọi</span>
          </a>
          <button
            type="button"
            aria-label="Mở menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-border text-navy lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-3">
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/85 hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase text-muted-foreground">Dịch vụ</p>
            {services.map((s) => (
              <Link
                key={s.slug}
                to={s.path}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-foreground/75 hover:bg-secondary"
              >
                {s.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "bg-secondary text-navy" }}
      className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-navy"
    >
      {children}
    </Link>
  );
}
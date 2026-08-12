import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { site } from "@/config/site";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="mt-20 bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>


          <img
                    src="/logo3.png"
                    alt="Sửa chữa điện lạnh Bình Tân"
                    className=" h-auto w-full shrink-0 object-cover"
                  />

          <p className=" text-sm leading-relaxed text-navy-foreground/70">
            Nhận sửa chữa, vệ sinh và bảo trì máy lạnh, tủ lạnh, máy giặt, máy nước nóng tận nơi.
            Kiểm tra rõ nguyên nhân và báo giá trước khi tiến hành.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-navy-foreground/80">
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" />
              <a href={site.phoneHref} className="hover:underline">{site.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
            </li>
            <li className="flex items-center gap-2"><MapPin className="size-4 shrink-0" />{site.address}</li>
            <li className="flex items-center gap-2"><Clock className="size-4 shrink-0" />{site.workingHours}</li>
          </ul>
        </div>

        <FooterCol title="Dịch vụ">
          {services.map((s) => (
            <FooterLink key={s.slug} to={s.path}>{s.title}</FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Hỗ trợ">
          <FooterLink to="/gioi-thieu">Giới thiệu</FooterLink>
          <FooterLink to="/lien-he">Liên hệ</FooterLink>
          <FooterLink to="/bang-gia">Bảng giá</FooterLink>
          <FooterLink to="/khu-vuc">Khu vực phục vụ</FooterLink>
          <FooterLink to="/cau-hoi-thuong-gap">Câu hỏi thường gặp</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
        </FooterCol>

        <FooterCol title="Chính sách">
          <FooterLink to="/chinh-sach-bao-mat">Chính sách bảo mật</FooterLink>
          <FooterLink to="/dieu-khoan-su-dung">Điều khoản sử dụng</FooterLink>
          <FooterLink to="/chinh-sach-bao-hanh">Chính sách bảo hành</FooterLink>
          <FooterLink to="/chinh-sach-dich-vu">Chính sách dịch vụ</FooterLink>
        </FooterCol>
      </div>
      <div className="border-t border-navy-foreground/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-navy-foreground/60 lg:px-6">
          © 2026 Sửa Chữa Điện Lạnh Việt Nam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-wide">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-navy-foreground/70 transition-colors hover:text-navy-foreground">
        {children}
      </Link>
    </li>
  );
}
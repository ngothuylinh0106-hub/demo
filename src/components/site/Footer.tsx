import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { site } from "@/config/site";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="mt-20 bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">

        {/* Thông tin doanh nghiệp */}
        <div>

          <img
            src="/logo3.png"
            alt="Sửa chữa điện lạnh Bình Tân"
            className="h-auto w-full shrink-0 object-cover"
          />

          <p className="text-sm leading-relaxed text-navy-foreground/70">
            Nhận sửa chữa, vệ sinh và bảo trì máy lạnh, tủ lạnh, máy giặt,
            máy nước nóng tận nơi. Kiểm tra rõ nguyên nhân và báo giá trước
            khi tiến hành.
          </p>

          <ul className="mt-5 space-y-2 text-sm text-navy-foreground/80">

            {/* Điện thoại */}
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" />
              <a
                href={site.phoneHref}
                className="hover:underline"
              >
                {site.phone}
              </a>
            </li>

            {/* Email */}
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" />
              <a
                href={`mailto:${site.email}`}
                className="hover:underline"
              >
                {site.email}
              </a>
            </li>

            {/* Địa chỉ */}
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" />
              {site.address}
            </li>

            {/* Thời gian */}
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0" />
              {site.workingHours}
            </li>

          </ul>

         
{/* Mạng xã hội */}
<div className="mt-6">
  <p className="mb-3 text-sm font-semibold">
    Theo dõi chúng tôi
  </p>

  <div className="flex flex-wrap gap-3">

    {/* Facebook */}
    {site.facebook && (
      <a
        href={site.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        title="Facebook"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:scale-110"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.008 10.125 11.951v-8.45H7.078v-3.5h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.973h-1.514c-1.491 0-1.956.93-1.956 1.885v2.263h3.328l-.532 3.5h-2.796v8.45C19.612 23.081 24 18.092 24 12.073z" />
        </svg>
      </a>
    )}

    {/* Zalo */}
    {site.zalo && (
      <a
        href={`https://zalo.me/${site.zalo}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Zalo"
        title="Zalo"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0068FF] text-white transition hover:scale-110"
      >
        <span className="text-sm font-bold">
          Zalo
        </span>
      </a>
    )}

    {/* YouTube */}
    {site.youtube && (
      <a
        href={site.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        title="YouTube"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-white transition hover:scale-110"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z" />
        </svg>
      </a>
    )}

    {/* TikTok */}
    {site.tiktok && (
      <a
        href={site.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        title="TikTok"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:scale-110"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M19.6 7.1a5.5 5.5 0 0 1-3.4-1.1v7.3a5.7 5.7 0 1 1-4.9-5.6v3a2.8 2.8 0 1 0 1.9 2.6V2h3a5.5 5.5 0 0 0 3.4 3.4v1.7Z" />
        </svg>
      </a>
    )}

    {/* Viber */}
    {site.viber && (
      <a
        href={site.viber}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Viber"
        title="Viber"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7360F2] text-white transition hover:scale-110"
      >
        <span className="text-sm font-bold">
          V
        </span>
      </a>
    )}

  </div>
</div>



          
        </div>

        {/* Dịch vụ */}
        <FooterCol title="Dịch vụ">
          {services.map((s) => (
            <FooterLink key={s.slug} to={s.path}>
              {s.title}
            </FooterLink>
          ))}
        </FooterCol>

        {/* Hỗ trợ */}
        <FooterCol title="Hỗ trợ">
          <FooterLink to="/gioi-thieu">Giới thiệu</FooterLink>
          <FooterLink to="/lien-he">Liên hệ</FooterLink>
          <FooterLink to="/bang-gia">Bảng giá</FooterLink>
          <FooterLink to="/khu-vuc">Khu vực phục vụ</FooterLink>
          <FooterLink to="/cau-hoi-thuong-gap">
            Câu hỏi thường gặp
          </FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
        </FooterCol>

        {/* Chính sách */}
        <FooterCol title="Chính sách">
          <FooterLink to="/chinh-sach-bao-mat">
            Chính sách bảo mật
          </FooterLink>
          <FooterLink to="/dieu-khoan-su-dung">
            Điều khoản sử dụng
          </FooterLink>
          <FooterLink to="/chinh-sach-bao-hanh">
            Chính sách bảo hành
          </FooterLink>
          <FooterLink to="/chinh-sach-dich-vu">
            Chính sách dịch vụ
          </FooterLink>
        </FooterCol>

      </div>

      {/* Copyright */}
      <div className="border-t border-navy-foreground/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-navy-foreground/60 lg:px-6">
          © 2026 Sửa Chữa Điện Lạnh Bình Tân. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-wide">
        {title}
      </p>

      <ul className="mt-4 space-y-2.5 text-sm">
        {children}
      </ul>
    </div>
  );
}

function FooterLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        to={to}
        className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
      >
        {children}
      </Link>
    </li>
  );
}


import { Link } from "@tanstack/react-router";
import { Check, Wrench } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumb";
import { CTABanner, CallButton, Section, SectionHeading, BookButton } from "./Primitives";
import { FAQList } from "./FAQ";
import { ProcessSteps } from "./ProcessSteps";
import { areas } from "@/data/areas";
import type { ServiceDetail } from "@/data/services";
import { site } from "@/config/site";

export function ServicePage({ service }: { service: ServiceDetail }) {
  return (
    <>
      <div className="bg-[image:var(--gradient-hero)] py-12 text-navy-foreground sm:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="[&_a]:text-navy-foreground/70 [&_span]:text-navy-foreground/60">
            <Breadcrumbs items={[{ label: "Dịch vụ", to: "/dich-vu" }, { label: service.title }]} />
          </div>
          <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {service.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-foreground/80 sm:text-base">
            {service.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton />
            <BookButton className="border-navy-foreground/25 bg-navy-foreground/10 text-navy-foreground hover:bg-navy-foreground/20" />
          </div>
        </div>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-navy">Các lỗi thường gặp và nguyên nhân</h2>
            <div className="mt-6 space-y-4">
              {service.issues.map((item) => (
                <div key={item.problem} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                  <p className="font-bold text-navy">{item.problem}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground/70">Nguyên nhân thường gặp: </span>
                    {item.cause}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl border border-border bg-surface p-6 shadow-card">
            <p className="flex items-center gap-2 font-bold text-navy">
              <Wrench className="size-5 text-primary" /> Hạng mục nhận sửa
            </p>
            <ul className="mt-4 space-y-2.5">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {b}
                </li>
              ))}
            </ul>
            <a
              href={site.phoneHref}
              className="mt-6 block rounded-xl bg-accent px-4 py-3 text-center text-sm font-bold text-accent-foreground"
            >
              Gọi thợ: {site.phone}
            </a>
          </aside>
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Quy trình" title="Quy trình sửa chữa" />
        <ProcessSteps />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Chi phí"
          title="Bảng giá tham khảo"
          description="Chi phí thực tế phụ thuộc vào tình trạng thiết bị và khu vực. Kỹ thuật viên báo giá cụ thể sau khi kiểm tra."
        />
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface text-navy">
              <tr>
                <th className="px-4 py-3 font-bold">Dịch vụ</th>
                <th className="px-4 py-3 font-bold">Giá tham khảo</th>
                <th className="px-4 py-3 font-bold">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              {service.pricing.map((row) => (
                <tr key={row.service} className="border-t border-border bg-card">
                  <td className="px-4 py-3 text-foreground/85">{row.service}</td>
                  <td className="px-4 py-3 font-semibold text-primary">{row.price}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center">
          <CallButton label="GỌI ĐỂ NHẬN BÁO GIÁ" />
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Thiết bị" title="Các thương hiệu hỗ trợ" description="Chúng tôi nhận kiểm tra và sửa chữa thiết bị của nhiều hãng phổ biến. Website không phải trung tâm bảo hành ủy quyền của hãng." />
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
          {service.brands.map((b) => (
            <span key={b} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold text-navy shadow-card">
              {b}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Khu vực" title="Khu vực phục vụ" />
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {areas.map((a) => (
            <span key={a.slug} className="rounded-full bg-surface px-4 py-2 text-sm text-foreground/80">
              {a.name}
            </span>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Chưa thấy khu vực của bạn?{" "}
          <Link to="/khu-vuc" className="font-semibold text-primary hover:underline">Xem tất cả khu vực</Link>
        </p>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="FAQ" title="Câu hỏi thường gặp" />
        <FAQList items={service.faqs} />
      </Section>

      <CTABanner />
    </>
  );
}
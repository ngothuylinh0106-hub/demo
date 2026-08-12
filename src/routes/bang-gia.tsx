import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { Section, SectionHeading, CallButton, CTABanner } from "@/components/site/Primitives";
import { Breadcrumbs } from "@/components/site/Breadcrumb";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/bang-gia")({
  head: () =>
    pageHead({
      title: "Bảng giá dịch vụ sửa chữa điện lạnh | Điện Lạnh Việt Nam",
      description:
        "Bảng giá tham khảo dịch vụ kiểm tra, vệ sinh, sửa máy lạnh, tủ lạnh, máy giặt, máy nước nóng. Giá cụ thể được báo sau khi kiểm tra thực tế.",
      path: "/bang-gia",
    }),
  component: PricingPage,
});

const rows = [
  { service: "Kiểm tra máy lạnh", note: "Tùy khu vực" },
  { service: "Vệ sinh máy lạnh", note: "Tùy loại máy" },
  { service: "Sửa máy lạnh", note: "Tùy lỗi" },
  { service: "Sửa tủ lạnh", note: "Tùy tình trạng" },
  { service: "Sửa máy giặt", note: "Tùy lỗi" },
  { service: "Sửa máy nước nóng", note: "Tùy thiết bị" },
];

function PricingPage() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Bảng giá" }]} />
        <div className="mt-6">
          <SectionHeading
            as="h1"
            eyebrow="Chi phí"
            title="Bảng giá dịch vụ"
            description="Chi phí phụ thuộc vào loại thiết bị, tình trạng lỗi và khu vực. Kỹ thuật viên kiểm tra rồi báo giá cụ thể trước khi sửa, không phát sinh ngoài thỏa thuận."
          />
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface text-navy">
              <tr>
                <th className="px-4 py-3.5 font-bold">Dịch vụ</th>
                <th className="px-4 py-3.5 font-bold">Giá tham khảo</th>
                <th className="px-4 py-3.5 font-bold">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.service} className="border-t border-border bg-card">
                  <td className="px-4 py-3.5 text-foreground/85">{r.service}</td>
                  <td className="px-4 py-3.5 font-semibold text-primary">Liên hệ</td>
                  <td className="px-4 py-3.5 text-muted-foreground">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <CallButton label="GỌI ĐỂ NHẬN BÁO GIÁ" />
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Chi tiết" title="Giá tham khảo theo từng dịch vụ" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.slug} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <p className="font-bold text-navy">{s.title}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.pricing.map((p) => (
                  <li key={p.service} className="flex justify-between gap-3 border-b border-border pb-2 last:border-0">
                    <span className="text-muted-foreground">{p.service}</span>
                    <span className="shrink-0 font-semibold text-primary">{p.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
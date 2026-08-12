import { createFileRoute } from "@tanstack/react-router";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { Section, SectionHeading, CTABanner } from "@/components/site/Primitives";
import { AreaCard } from "@/components/site/Cards";
import { Breadcrumbs } from "@/components/site/Breadcrumb";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/khu-vuc")({
  head: () =>
    pageHead({
      title: "Khu vực sửa chữa điện lạnh | Điện Lạnh Việt Nam",
      description:
        "Danh sách tỉnh/thành đang được hỗ trợ sửa điện lạnh tận nơi: TP. Hồ Chí Minh, Hà Nội, Đà Nẵng, Bình Dương, Đồng Nai và nhiều khu vực khác.",
      path: "/khu-vuc",
    }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Khu vực phục vụ" }]} />
        <div className="mt-6">
          <SectionHeading
            as="h1"
            eyebrow="Phạm vi"
            title="Khu vực sửa chữa điện lạnh"
            description="Danh sách khu vực đang được hỗ trợ. Nếu chưa thấy khu vực của bạn, hãy gọi để chúng tôi kiểm tra khả năng phục vụ."
          />
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <AreaCard key={a.slug} area={a} />
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Dịch vụ" title="Dịch vụ hỗ trợ tại các khu vực" />
        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5">
          {services.map((s) => (
            <span key={s.slug} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-navy shadow-card">
              {s.title}
            </span>
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
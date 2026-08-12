import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { Section, SectionHeading, CTABanner } from "@/components/site/Primitives";
import { ServiceCard } from "@/components/site/Cards";
import { Breadcrumbs } from "@/components/site/Breadcrumb";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { pageHead, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/dich-vu")({
  head: () => ({
    ...pageHead({
      title: "Dịch vụ sửa chữa điện lạnh tận nơi | Điện Lạnh Việt Nam",
      description:
        "Danh sách dịch vụ: sửa máy lạnh, sửa tủ lạnh, sửa máy giặt, sửa máy nước nóng, vệ sinh máy lạnh và bảo trì điện lạnh định kỳ.",
      path: "/dich-vu",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Trang chủ", item: "/" }, { name: "Dịch vụ", item: "/dich-vu" }])),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Dịch vụ" }]} />
        <div className="mt-6">
          <SectionHeading
            as="h1"
            eyebrow="Dịch vụ"
            title="Dịch vụ sửa chữa điện lạnh"
            description="Chúng tôi nhận kiểm tra và sửa chữa tận nơi các thiết bị điện lạnh gia đình, văn phòng và cửa hàng."
          />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>
      <Section muted>
        <SectionHeading eyebrow="Quy trình" title="Cách chúng tôi làm việc" />
        <ProcessSteps />
      </Section>
      <CTABanner />
    </>
  );
}
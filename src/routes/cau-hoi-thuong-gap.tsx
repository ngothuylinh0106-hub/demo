import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, CTABanner } from "@/components/site/Primitives";
import { Breadcrumbs } from "@/components/site/Breadcrumb";
import { FAQList, faqSchema } from "@/components/site/FAQ";
import { generalFaqs } from "@/data/faq";
import { services } from "@/data/services";
import { pageHead } from "@/lib/seo";

const allFaqs = [...generalFaqs, ...services.flatMap((s) => s.faqs)];

export const Route = createFileRoute("/cau-hoi-thuong-gap")({
  head: () => ({
    ...pageHead({
      title: "Câu hỏi thường gặp về sửa chữa điện lạnh | Điện Lạnh Việt Nam",
      description:
        "Giải đáp các thắc mắc thường gặp về sửa máy lạnh, tủ lạnh, máy giặt, máy nước nóng, báo giá, đặt lịch và bảo hành dịch vụ.",
      path: "/cau-hoi-thuong-gap",
    }),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(allFaqs)) }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Câu hỏi thường gặp" }]} />
        <div className="mt-6">
          <SectionHeading
            as="h1"
            eyebrow="FAQ"
            title="Câu hỏi thường gặp"
            description="Những thắc mắc phổ biến của khách hàng trước khi đặt lịch sửa chữa điện lạnh."
          />
        </div>
        <FAQList items={allFaqs} />
      </Section>
      <CTABanner />
    </>
  );
}
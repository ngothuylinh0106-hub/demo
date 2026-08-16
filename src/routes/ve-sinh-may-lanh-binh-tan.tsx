import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/services";
import { pageHead, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { faqSchema } from "@/components/site/FAQ";

const service = getService("ve-sinh-may-lanh-binh-tan")!;

export const Route = createFileRoute("/ve-sinh-may-lanh-binh-tan")({
  head: () => ({
    ...pageHead({
      title: "Vệ sinh máy lạnh treo tường, âm trần | Điện Lạnh Việt Nam",
      description: "Dịch vụ vệ sinh máy lạnh tận nơi cho máy treo tường, âm trần và máy công nghiệp. Bảo dưỡng định kỳ giúp máy lạnh sâu, tiết kiệm điện.",
      path: "/ve-sinh-may-lanh-binh-tan",
    }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceSchema(service.title, "Dịch vụ vệ sinh máy lạnh tận nơi cho máy treo tường, âm trần và máy công nghiệp. Bảo dưỡng định kỳ giúp máy lạnh sâu, tiết kiệm điện.")) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Trang chủ", item: "/" },
            { name: "Dịch vụ", item: "/dich-vu" },
            { name: service.title, item: "/ve-sinh-may-lanh-binh-tan" },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(service.faqs)) },
    ],
  }),
  component: () => <ServicePage service={service} />,
});

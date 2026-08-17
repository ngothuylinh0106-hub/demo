import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/services";
import { pageHead, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { faqSchema } from "@/components/site/FAQ";

const service = getService("sua-tu-lanh-binh-tan")!;

export const Route = createFileRoute("/sua-tu-lanh-binh-tan")({
  head: () => ({
    ...pageHead({
      title: "Sửa tủ lạnh tại Bình Tân – Không lạnh, không đông đá | Điện Lạnh Bình Tân",
      description: "Sửa tủ lạnh tại Bình tân: tủ không lạnh, không đông đá, chảy nước, kêu to. Kỹ thuật viên kiểm tra trực tiếp và báo giá minh bạch.",
      path: "/sua-tu-lanh-binh-tan",
    }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceSchema(service.title, "Sửa tủ lạnh tại Bình tân: tủ không lạnh, không đông đá, chảy nước, kêu to. Kỹ thuật viên kiểm tra trực tiếp và báo giá minh bạch.")) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Trang chủ", item: "/" },
            { name: "Dịch vụ", item: "/dich-vu" },
            { name: service.title, item: "/sua-tu-lanh-binh-tan" },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(service.faqs)) },
    ],
  }),
  component: () => <ServicePage service={service} />,
});

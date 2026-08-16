import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/services";
import { pageHead, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { faqSchema } from "@/components/site/FAQ";

const service = getService("sua-may-nuoc-nong-binh-tan")!;

export const Route = createFileRoute("/sua-may-nuoc-nong-binh-tan")({
  head: () => ({
    ...pageHead({
      title: "Sửa máy nước nóng tại Bình Tân – An toàn, nhanh chóng | Điện Lạnh Bình Tân",
      description: "Sửa máy nước nóng: không nóng, rò rỉ nước, không vào điện, báo lỗi. Kiểm tra an toàn điện trước khi xử lý.",
      path: "/sua-may-nuoc-nong-binh-tan",
    }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceSchema(service.title, "Sửa máy nước nóng: không nóng, rò rỉ nước, không vào điện, báo lỗi. Kiểm tra an toàn điện trước khi xử lý.")) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Trang chủ", item: "/" },
            { name: "Dịch vụ", item: "/dich-vu" },
            { name: service.title, item: "/sua-may-nuoc-nong-binh-tan" },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(service.faqs)) },
    ],
  }),
  component: () => <ServicePage service={service} />,
});

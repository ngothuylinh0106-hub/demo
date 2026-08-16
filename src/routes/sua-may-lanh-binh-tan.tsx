import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/services";
import { pageHead, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { faqSchema } from "@/components/site/FAQ";

const service = getService("sua-may-lanh-binh-tan")!;

export const Route = createFileRoute("/sua-may-lanh-binh-tan")({
  head: () => ({
    ...pageHead({
      title: "Sửa máy lạnh tại Bình Tân – Có mặt nhanh, báo giá trước | Điện Lạnh Bình Tân",
      description: "Dịch vụ sửa máy lạnh tại Bình Tân: máy lạnh không lạnh, chảy nước, kêu to, báo lỗi. Kiểm tra rõ nguyên nhân và báo giá trước khi sửa.",
      path: "/sua-may-lanh-binh-tan",
    }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceSchema(service.title, "Dịch vụ sửa máy lạnh tại nhà: máy lạnh không lạnh, chảy nước, kêu to, báo lỗi. Kiểm tra rõ nguyên nhân và báo giá trước khi sửa.")) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Trang chủ", item: "/" },
            { name: "Dịch vụ", item: "/dich-vu" },
            { name: service.title, item: "/sua-may-lanh-binh-tan" },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(service.faqs)) },
    ],
  }),
  component: () => <ServicePage service={service} />,
});

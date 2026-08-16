import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/services";
import { pageHead, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { faqSchema } from "@/components/site/FAQ";

const service = getService("sua-may-giat")!;

export const Route = createFileRoute("/sua-may-giat")({
  head: () => ({
    ...pageHead({
      title: "Sửa máy giặt tại nhà – Không vắt, không cấp nước | Điện Lạnh Bình tân",
      description: "Sửa máy giặt tại nhà: máy không hoạt động, không vắt, không cấp nước, rung lắc, báo lỗi. Báo giá trước khi sửa.",
      path: "/sua-may-giat",
    }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceSchema(service.title, "Sửa máy giặt tại nhà: máy không hoạt động, không vắt, không cấp nước, rung lắc, báo lỗi. Báo giá trước khi sửa.")) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Trang chủ", item: "/" },
            { name: "Dịch vụ", item: "/dich-vu" },
            { name: service.title, item: "/sua-may-giat" },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(service.faqs)) },
    ],
  }),
  component: () => <ServicePage service={service} />,
});

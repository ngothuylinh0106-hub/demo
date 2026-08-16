import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/services";
import { pageHead, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { faqSchema } from "@/components/site/FAQ";

const service = getService("bao-tri-dien-lanh")!;

export const Route = createFileRoute("/bao-tri-dien-lanh")({
  head: () => ({
    ...pageHead({
      title: "Bảo trì điện lạnh định kỳ cho nhà ở tại Bình Tân. | Điện Lạnh Bình Tân",
      description: "Gói bảo trì điện lạnh định kỳ cho nhà ở tại bình tân: kiểm tra thiết bị, vệ sinh, thay thế linh kiện và xử lý sự cố cho hộ gia đình và doanh nghiệp.",
      path: "/bao-tri-dien-lanh",
    }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceSchema(service.title, "Gói bảo trì điện lạnh định kỳ: kiểm tra thiết bị, vệ sinh, thay thế linh kiện và xử lý sự cố cho hộ gia đình và doanh nghiệp.")) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Trang chủ", item: "/" },
            { name: "Dịch vụ", item: "/dich-vu" },
            { name: service.title, item: "/bao-tri-dien-lanh" },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(service.faqs)) },
    ],
  }),
  component: () => <ServicePage service={service} />,
});

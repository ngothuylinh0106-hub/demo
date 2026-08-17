import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { Breadcrumbs } from "@/components/site/Breadcrumb";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/chinh-sach-bao-mat")({
  head: () =>
    pageHead({
      title: "Chính sách bảo mật | Sửa Chữa Điện Lạnh Bình Tân",
      description: "Chính sách bảo mật thông tin khách hàng khi sử dụng website và dịch vụ sửa chữa điện lạnh.",
      path: "/chinh-sach-bao-mat",
    }),
  component: PolicyPage,
});

const sections = [
  {
    "heading": "Thông tin chúng tôi thu thập",
    "paragraphs": [
      "Website chỉ thu thập các thông tin bạn chủ động cung cấp qua form liên hệ và form đặt lịch: họ tên, số điện thoại, khu vực, loại thiết bị và mô tả tình trạng thiết bị."
    ]
  },
  {
    "heading": "Mục đích sử dụng",
    "paragraphs": [
      "Thông tin được dùng để liên hệ xác nhận yêu cầu, sắp xếp kỹ thuật viên và hỗ trợ sau sửa chữa. Chúng tôi không sử dụng thông tin cho mục đích nào khác khi chưa có sự đồng ý của bạn."
    ]
  },
  {
    "heading": "Chia sẻ thông tin",
    "paragraphs": [
      "Chúng tôi không bán hoặc trao đổi thông tin khách hàng với bên thứ ba, ngoại trừ trường hợp bắt buộc theo yêu cầu của cơ quan nhà nước có thẩm quyền."
    ]
  },
  {
    "heading": "Quyền của khách hàng",
    "paragraphs": [
      "Bạn có thể yêu cầu cập nhật hoặc xóa thông tin đã cung cấp bằng cách liên hệ với chúng tôi qua số điện thoại hoặc email trong phần Liên hệ."
    ]
  }
];

function PolicyPage() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: "Chính sách bảo mật" }]} />
      <div className="mt-6">
        <SectionHeading as="h1" eyebrow="Chính sách" title="Chính sách bảo mật" description="Chính sách bảo mật thông tin khách hàng khi sử dụng website và dịch vụ sửa chữa điện lạnh." />
      </div>
      <div className="mx-auto mt-10 max-w-3xl space-y-8">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-lg font-bold text-navy sm:text-xl">{s.heading}</h2>
            {s.paragraphs.map((p) => (
              <p key={p} className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </Section>
  );
}

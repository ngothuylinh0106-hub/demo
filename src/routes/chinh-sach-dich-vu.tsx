import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { Breadcrumbs } from "@/components/site/Breadcrumb";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/chinh-sach-dich-vu")({
  head: () =>
    pageHead({
      title: "Chính sách dịch vụ | Sửa Chữa Điện Lạnh Việt Nam",
      description: "Chính sách dịch vụ: quy trình tiếp nhận, báo giá, thanh toán và hỗ trợ sau sửa chữa.",
      path: "/chinh-sach-dich-vu",
    }),
  component: PolicyPage,
});

const sections = [
  {
    "heading": "Tiếp nhận và kiểm tra",
    "paragraphs": [
      "Yêu cầu được tiếp nhận qua điện thoại hoặc form trên website. Kỹ thuật viên đến kiểm tra trực tiếp trước khi đưa ra kết luận."
    ]
  },
  {
    "heading": "Báo giá và xác nhận",
    "paragraphs": [
      "Chi phí dự kiến luôn được thông báo trước. Chỉ khi khách hàng đồng ý, kỹ thuật viên mới tiến hành sửa chữa. Nếu phát sinh hạng mục mới, chúng tôi trao đổi lại trước khi thực hiện."
    ]
  },
  {
    "heading": "Thanh toán",
    "paragraphs": [
      "Thanh toán sau khi hoàn tất sửa chữa và kiểm tra lại thiết bị cùng khách hàng."
    ]
  },
  {
    "heading": "Hỗ trợ sau sửa chữa",
    "paragraphs": [
      "Nếu thiết bị tái phát lỗi thuộc phạm vi đã sửa, vui lòng liên hệ để được kiểm tra lại theo chính sách bảo hành."
    ]
  }
];

function PolicyPage() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: "Chính sách dịch vụ" }]} />
      <div className="mt-6">
        <SectionHeading as="h1" eyebrow="Chính sách" title="Chính sách dịch vụ" description="Chính sách dịch vụ: quy trình tiếp nhận, báo giá, thanh toán và hỗ trợ sau sửa chữa." />
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

import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { Breadcrumbs } from "@/components/site/Breadcrumb";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/dieu-khoan-su-dung")({
  head: () =>
    pageHead({
      title: "Điều khoản sử dụng | Sửa Chữa Điện Lạnh Việt Nam",
      description: "Điều khoản sử dụng website Sửa Chữa Điện Lạnh Việt Nam.",
      path: "/dieu-khoan-su-dung",
    }),
  component: PolicyPage,
});

const sections = [
  {
    "heading": "Phạm vi áp dụng",
    "paragraphs": [
      "Điều khoản này áp dụng cho toàn bộ nội dung và chức năng trên website. Khi tiếp tục sử dụng website, bạn được xem là đã đồng ý với các điều khoản dưới đây."
    ]
  },
  {
    "heading": "Nội dung website",
    "paragraphs": [
      "Các bài viết mang tính tham khảo, giúp khách hàng hiểu sơ bộ về sự cố thường gặp. Việc kiểm tra và kết luận nguyên nhân cần được thực hiện bởi kỹ thuật viên trực tiếp tại hiện trường."
    ]
  },
  {
    "heading": "Trách nhiệm của khách hàng",
    "paragraphs": [
      "Vui lòng cung cấp thông tin chính xác khi đặt lịch để chúng tôi sắp xếp kỹ thuật viên và chuẩn bị dụng cụ phù hợp."
    ]
  },
  {
    "heading": "Thay đổi điều khoản",
    "paragraphs": [
      "Chúng tôi có thể cập nhật điều khoản khi cần thiết. Phiên bản mới nhất luôn được đăng tải trên trang này."
    ]
  }
];

function PolicyPage() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: "Điều khoản sử dụng" }]} />
      <div className="mt-6">
        <SectionHeading as="h1" eyebrow="Chính sách" title="Điều khoản sử dụng" description="Điều khoản sử dụng website Sửa Chữa Điện Lạnh Việt Nam." />
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

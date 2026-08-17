import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { Breadcrumbs } from "@/components/site/Breadcrumb";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/chinh-sach-bao-hanh")({
  head: () =>
    pageHead({
      title: "Chính sách bảo hành của điện lạnh bình tân| Sửa Chữa Điện Lạnh Bình Tân",
      description: "Chính sách bảo hành dịch vụ sửa chữa điện lạnh bình tân: phạm vi áp dụng, điều kiện và cách yêu cầu bảo hành.",
      path: "/chinh-sach-bao-hanh",
    }),
  component: PolicyPage,
});

const sections = [
  {
    "heading": "Phạm vi bảo hành",
    "paragraphs": [
      "Bảo hành áp dụng cho hạng mục đã được sửa chữa và linh kiện do điện lạnh bình tân cung cấp. Thời hạn cụ thể được thông báo khi báo giá và ghi nhận trong phiếu dịch vụ."
    ]
  },
  {
    "heading": "Trường hợp không áp dụng",
    "paragraphs": [
      "Thiết bị bị tác động bởi bên thứ ba sau khi bàn giao, hư hỏng do sử dụng sai hướng dẫn, do nguồn điện không ổn định, ngập nước hoặc các nguyên nhân khách quan khác."
    ]
  },
  {
    "heading": "Cách yêu cầu bảo hành",
    "paragraphs": [
      "Liên hệ số điện thoại trong phần Liên hệ, cung cấp thông tin phiếu dịch vụ và mô tả hiện tượng để chúng tôi sắp xếp kỹ thuật viên kiểm tra lại."
    ]
  }
];

function PolicyPage() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: "Chính sách bảo hành" }]} />
      <div className="mt-6">
        <SectionHeading as="h1" eyebrow="Chính sách" title="Chính sách bảo hành" description="Chính sách bảo hành dịch vụ sửa chữa điện lạnh: phạm vi áp dụng, điều kiện và cách yêu cầu bảo hành." />
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

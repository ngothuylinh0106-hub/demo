import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Target, Handshake } from "lucide-react";
import { Section, SectionHeading, CTABanner } from "@/components/site/Primitives";
import { Breadcrumbs } from "@/components/site/Breadcrumb";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { services } from "@/data/services";
import { site } from "@/config/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/gioi-thieu")({
  head: () =>
    pageHead({
      title: "Giới thiệu | Sửa Chữa Điện Lạnh Tại Bình Tân",
      description:
        "Giới thiệu về dịch vụ Sửa Chữa Điện Lạnh Bình Tân: dịch vụ cung cấp, định hướng phục vụ, quy trình làm việc và cam kết với khách hàng.",
      path: "/gioi-thieu",
    }),
  component: AboutPage,
});

const commitments = [
  { icon: Target, title: "Định hướng phục vụ", desc: "Ưu tiên xử lý đúng nguyên nhân, hạn chế thay thế linh kiện khi chưa cần thiết." },
  { icon: Handshake, title: "Cam kết minh bạch", desc: "Chi phí được thông báo trước, khách hàng quyết định trước khi kỹ thuật viên tiến hành sửa." },
  { icon: ShieldCheck, title: "Bảo hành dịch vụ", desc: site.warranty },
];

function AboutPage() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Giới thiệu" }]} />
        <div className="mt-6">
          <SectionHeading
            as="h1"
            eyebrow="Về chúng tôi"
            title="Giới thiệu Sửa Chữa Điện Lạnh Việt Nam"
            description="Chúng tôi là đơn vị nhận sửa chữa, vệ sinh và bảo trì thiết bị điện lạnh tận nơi cho hộ gia đình, văn phòng và cửa hàng."
          />
        </div>
        <div className="mx-auto mt-10 max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Sửa Chữa Điện Lạnh Việt Nam hoạt động với mục tiêu giúp khách hàng xử lý nhanh các sự cố về
            máy lạnh, tủ lạnh, máy giặt và máy nước nóng ngay tại nhà, hạn chế thời gian chờ đợi và
            tránh những khoản chi phí không rõ ràng.
          </p>
          <p>
            Mọi yêu cầu đều được tiếp nhận qua điện thoại hoặc form đặt lịch trên website. Kỹ thuật viên
            kiểm tra trực tiếp, giải thích nguyên nhân bằng ngôn ngữ dễ hiểu và chỉ tiến hành sửa khi
            khách hàng đồng ý mức chi phí.
          </p>
          <p className="rounded-2xl border border-border bg-surface p-5 text-sm">
            Thông tin pháp lý, địa chỉ văn phòng và các chứng nhận sẽ được cập nhật khi có đầy đủ dữ liệu
            chính thức. Chúng tôi không công bố số liệu hay giấy tờ chưa được xác thực.
          </p>
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Dịch vụ" title="Dịch vụ cung cấp" />
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.slug} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <p className="font-bold text-navy">{s.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Quy trình" title="Quy trình làm việc" />
        <ProcessSteps />
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Cam kết" title="Cam kết với khách hàng" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {commitments.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="size-5" />
              </span>
              <p className="mt-4 font-bold text-navy">{c.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
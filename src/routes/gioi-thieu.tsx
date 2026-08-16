import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Target,
  Handshake,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import {
  Section,
  SectionHeading,
  CTABanner,
} from "@/components/site/Primitives";

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
        "Giới thiệu Sửa Chữa Điện Lạnh Bình Tân: nhận sửa chữa, vệ sinh và bảo trì máy lạnh, tủ lạnh, máy giặt, máy nước nóng tận nơi tại Bình Tân.",
      path: "/gioi-thieu",
    }),

  component: AboutPage,
});

const commitments = [
  {
    icon: Target,
    title: "Định hướng phục vụ",
    desc: "Ưu tiên kiểm tra đúng nguyên nhân, đưa ra phương án phù hợp và hạn chế thay thế linh kiện khi chưa cần thiết.",
  },
  {
    icon: Handshake,
    title: "Minh bạch chi phí",
    desc: "Khách hàng được thông báo tình trạng thiết bị và chi phí dự kiến trước khi quyết định sửa chữa.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo hành dịch vụ",
    desc: site.warranty,
  },
];

function AboutPage() {
  return (
    <>
      {/* ================= GIỚI THIỆU ================= */}
      <Section>
        <Breadcrumbs items={[{ label: "Giới thiệu" }]} />

        <div className="mt-6">
          <SectionHeading
            as="h1"
            eyebrow="Về chúng tôi"
            title="Giới thiệu Sửa Chữa Điện Lạnh Tại Bình Tân"
            description="Chúng tôi nhận sửa chữa, vệ sinh và bảo trì thiết bị điện lạnh tận nơi cho hộ gia đình, văn phòng và cửa hàng."
          />
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-5 text-sm leading-8 text-muted-foreground sm:text-base">
          <p>
            Sửa Chữa Điện Lạnh Bình Tân là đơn vị cung cấp dịch vụ sửa
            chữa, vệ sinh và bảo trì thiết bị điện lạnh tận nơi. Chúng
            tôi hỗ trợ khách hàng xử lý các sự cố thường gặp trên máy
            lạnh, tủ lạnh, máy giặt và máy nước nóng tại gia đình, văn
            phòng, cửa hàng và các địa điểm kinh doanh.
          </p>

          <p>
            Mục tiêu của chúng tôi là giúp khách hàng xử lý sự cố nhanh
            chóng, thuận tiện và rõ ràng về chi phí. Thay vì phải mang
            thiết bị đi xa hoặc mất nhiều thời gian chờ đợi, khách hàng
            có thể liên hệ để được tiếp nhận thông tin và sắp xếp kỹ
            thuật viên kiểm tra tại nơi sử dụng.
          </p>

          <p>
            Khi tiếp nhận yêu cầu, kỹ thuật viên sẽ kiểm tra tình trạng
            thực tế của thiết bị, xác định nguyên nhân và giải thích
            bằng ngôn ngữ dễ hiểu. Sau khi có phương án xử lý, khách
            hàng được thông báo chi phí dự kiến trước khi quyết định có
            tiến hành sửa chữa hay không.
          </p>

          <p>
            Chúng tôi ưu tiên việc sửa chữa đúng nguyên nhân, hạn chế
            thay thế linh kiện khi chưa cần thiết và cố gắng đưa ra
            phương án phù hợp với tình trạng thực tế của từng thiết bị.
          </p>

          <p>
            Mọi yêu cầu đều có thể được tiếp nhận thông qua điện thoại
            hoặc form đặt lịch trên website. Thông tin khách hàng cung
            cấp sẽ được sử dụng để tư vấn và sắp xếp việc kiểm tra,
            sửa chữa theo nhu cầu.
          </p>

          
        </div>
      </Section>

      {/* ================= THÔNG TIN LIÊN HỆ ================= */}
      <Section muted>
        <SectionHeading
          eyebrow="Liên hệ"
          title="Thông tin Sửa Chữa Điện Lạnh Bình Tân"
          description="Khách hàng có thể liên hệ trực tiếp để được tiếp nhận yêu cầu và tư vấn dịch vụ."
        />

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Địa chỉ */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="size-5" />
            </span>

            <p className="mt-4 font-bold text-navy">
              Địa chỉ
            </p>

            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              24 Đường Bến Lội, P. Bình Trị Đông A, Quận Bình Tân,
              TP. Hồ Chí Minh
            </p>
          </div>

          {/* Điện thoại */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <Phone className="size-5" />
            </span>

            <p className="mt-4 font-bold text-navy">
              Điện thoại
            </p>

            <a
              href="tel:0358832858"
              className="mt-2 block text-sm font-semibold text-primary hover:underline"
            >
              0358 832 858
            </a>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <Mail className="size-5" />
            </span>

            <p className="mt-4 font-bold text-navy">
              Email
            </p>

            <a
              href="mailto:ngothuylinh0106@gmail.com"
              className="mt-2 block break-all text-sm font-semibold text-primary hover:underline"
            >
              ngothuylinh0106@gmail.com
            </a>
          </div>

          {/* Tiếp nhận */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <Clock className="size-5" />
            </span>

            <p className="mt-4 font-bold text-navy">
              Tiếp nhận yêu cầu
            </p>

            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Tiếp nhận thông tin qua điện thoại hoặc form đặt lịch trên
              website.
            </p>
          </div>
        </div>
      </Section>

      {/* ================= DỊCH VỤ ================= */}
      <Section>
        <SectionHeading
          eyebrow="Dịch vụ"
          title="Các dịch vụ điện lạnh cung cấp"
          description="Hỗ trợ sửa chữa, vệ sinh và bảo trì các thiết bị điện lạnh phổ biến."
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.slug}
              className="rounded-2xl border border-border bg-card p-5 shadow-card"
            >
              <p className="font-bold text-navy">
                {s.title}
              </p>

              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {s.short}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ================= QUY TRÌNH ================= */}
      <Section muted>
        <SectionHeading
          eyebrow="Quy trình"
          title="Quy trình tiếp nhận và sửa chữa"
          description="Các bước được thực hiện rõ ràng để khách hàng nắm được tình trạng thiết bị và chi phí."
        />

        <ProcessSteps />
      </Section>

      {/* ================= CAM KẾT ================= */}
      <Section>
        <SectionHeading
          eyebrow="Cam kết"
          title="Cam kết với khách hàng"
          description="Đặt sự rõ ràng, minh bạch và thuận tiện của khách hàng làm ưu tiên trong quá trình phục vụ."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {commitments.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="size-5" />
              </span>

              <p className="mt-4 font-bold text-navy">
                {c.title}
              </p>

              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ================= LIÊN HỆ ================= */}
      <Section muted>
        <SectionHeading
          eyebrow="Liên hệ ngay"
          title="Cần hỗ trợ sửa chữa điện lạnh?"
          description="Liên hệ với Sửa Chữa Điện Lạnh Bình Tân để cung cấp tình trạng thiết bị và đặt lịch kiểm tra."
        />

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href="tel:0358832858"
              className="flex items-center gap-4 rounded-xl border border-border p-5 transition hover:bg-surface"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Phone className="size-5" />
              </span>

              <div>
                <p className="font-semibold text-navy">
                  Gọi điện
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  0358 832 858
                </p>
              </div>
            </a>

            <a
              href="mailto:ngothuylinh0106@gmail.com"
              className="flex items-center gap-4 rounded-xl border border-border p-5 transition hover:bg-surface"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Mail className="size-5" />
              </span>

              <div className="min-w-0">
                <p className="font-semibold text-navy">
                  Gửi email
                </p>
                <p className="mt-1 break-all text-sm text-muted-foreground">
                  ngothuylinh0106@gmail.com
                </p>
              </div>
            </a>
          </div>

          <div className="mt-6 flex gap-4 rounded-xl bg-surface p-5">
            <MapPin className="mt-1 size-5 shrink-0 text-primary" />

            <div>
              <p className="font-semibold text-navy">
                Địa chỉ
              </p>

              <p className="mt-1 text-sm leading-7 text-muted-foreground">
                24 Đường Bến Lội, P. Bình Trị Đông A, Quận Bình Tân,
                TP. Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
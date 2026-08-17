import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ShieldCheck, Clock, Users, FileText, Layers, Wrench, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-technician.jpg";
import { site } from "@/config/site";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { posts } from "@/data/blog";
import { generalFaqs } from "@/data/faq";
import { Section, SectionHeading, CallButton, BookButton, CTABanner } from "@/components/site/Primitives";
import { ServiceCard, AreaCard, BlogCard } from "@/components/site/Cards";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { FAQList, faqSchema } from "@/components/site/FAQ";
import { CallbackForm } from "@/components/site/CallbackForm";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({
      title: "Sửa Chữa Điện Lạnh Tại Bình Tân | Sửa máy lạnh, tủ lạnh, máy giặt tại nhà",
      description:
        "Dịch vụ sửa điện lạnh tại Bình Tân: sửa máy lạnh, tủ lạnh, máy giặt, máy nước nóng, vệ sinh và bảo trì. Kiểm tra rõ nguyên nhân, báo giá trước khi sửa.",
      path: "/",
    }),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(generalFaqs)) }],
  }),
  component: HomePage,
});

const highlights = [
  "Kỹ thuật viên chuyên nghiệp",
  "Có mặt tận nơi",
  "Báo giá trước khi sửa",
  "Hỗ trợ nhiều khu vực",
  "Bảo hành dịch vụ",
];

const reasons = [
  { icon: Clock, title: "Có mặt tận nơi", desc: "Tiếp nhận yêu cầu và sắp xếp kỹ thuật viên đến kiểm tra tại nhà khách hàng." },
  { icon: Users, title: "Kỹ thuật viên giàu kinh nghiệm", desc: "Thợ được đào tạo, quen xử lý các dòng thiết bị điện lạnh phổ biến." },
  { icon: FileText, title: "Kiểm tra trước – báo giá rõ ràng", desc: "Giải thích nguyên nhân và chi phí dự kiến trước khi bắt tay vào sửa." },
  { icon: Layers, title: "Hỗ trợ nhiều loại thiết bị", desc: "Máy lạnh, tủ lạnh, máy giặt, máy nước nóng và thiết bị điện lạnh khác." },
  { icon: Wrench, title: "Quy trình sửa chữa minh bạch", desc: "Từ tiếp nhận, kiểm tra, báo giá đến bàn giao đều được thông báo rõ." },
  { icon: ShieldCheck, title: "Chính sách bảo hành dịch vụ", desc: site.warranty },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[image:var(--gradient-hero)] text-navy-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:px-6 lg:py-20">
          <div>
            <p className="inline-flex rounded-full bg-navy-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
              {site.slogan}
            </p>
            <h1 className="mt-5 text-2xl font-extrabold uppercase leading-relaxed tracking-tight sm:text-3xl lg:text-4xl">
              Sửa chữa điện lạnh tại Bình Tân – Có mặt nhanh - Bảo hành trọn gói
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-navy-foreground/80 sm:text-base">
              Nhận sửa chữa máy lạnh, tủ lạnh, máy giặt, máy nước nóng và các thiết bị điện lạnh tại Bình Tân hỗ trợ sửa tại nhà.
              Kỹ thuật viên hỗ trợ nhanh, kiểm tra rõ nguyên nhân và báo giá trước khi sửa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton />
              <BookButton className="border-navy-foreground/25 bg-navy-foreground/10 text-navy-foreground hover:bg-navy-foreground/20" />
            </div>
            <ul className="mt-9 grid gap-2.5 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-navy-foreground/85">
                  <Check className="size-4 shrink-0 text-accent" /> {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Kỹ thuật viên điện lạnh kiểm tra máy lạnh treo tường tại nhà khách hàng"
              width={1200}
              height={1200}
              fetchPriority="high"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <Section id="yeu-cau-goi-lai" muted>
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-navy sm:text-3xl">
              Bạn đang gặp sự cố về thiết bị điện lạnh trong nhà?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Để lại số điện thoại, chúng tôi sẽ liên hệ hỗ trợ.
            </p>
            <a href={site.phoneHref} className="mt-6 inline-block text-lg font-extrabold text-primary">
              {site.phone}
            </a>
            <p className="mt-1 text-xs text-muted-foreground">{site.workingHours}</p>
          </div>
          <CallbackForm />
        </div>
      </Section>

      {/* Services */}
      <Section id="dich-vu">
        <SectionHeading
          eyebrow="Dịch vụ"
          title="Dịch vụ sửa chữa điện lạnh"
          description="Nhận kiểm tra, sửa chữa, vệ sinh và bảo trì các thiết bị điện lạnh gia đình và kinh doanh."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      {/* Why us */}
      <Section muted>
        <SectionHeading eyebrow="Cam kết" title="Vì sao khách hàng lựa chọn chúng tôi?" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <r.icon className="size-5" />
              </span>
              <p className="mt-4 font-bold text-navy">{r.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeading eyebrow="Quy trình" title="Quy trình sửa chữa 5 bước" />
        <ProcessSteps />
      </Section>

      {/* Areas */}
      <Section muted>
        <SectionHeading eyebrow="Phạm vi" title="Khu vực sửa chữa điện lạnh" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <AreaCard key={a.slug} area={a} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/khu-vuc"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-bold text-navy hover:bg-secondary"
          >
            XEM TẤT CẢ KHU VỰC <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* Blog */}
      <Section>
        <SectionHeading eyebrow="Blog" title="Kiến thức điện lạnh" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section muted>
        <SectionHeading eyebrow="FAQ" title="Câu hỏi thường gặp" />
        <FAQList items={generalFaqs} />
      </Section>

      <CTABanner />
    </>
  );
}
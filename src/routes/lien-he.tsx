import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { Breadcrumbs } from "@/components/site/Breadcrumb";
import { BookingForm } from "@/components/site/BookingForm";
import { Field, TextareaField } from "@/components/site/FormFields";
import { contactSchema } from "@/components/site/forms";
import { areas } from "@/data/areas";
import { site } from "@/config/site";
import { pageHead } from "@/lib/seo";
import { sendContactEmail } from "@/lib/contact";

export const Route = createFileRoute("/lien-he")({
  head: () =>
    pageHead({
      title: "Liên hệ & đặt lịch sửa chữa điện lạnh | Điện Lạnh Bình Tân",
      description:
        "Liên hệ đặt lịch sửa chữa điện lạnh tận nơi. Gọi trực tiếp hoặc gửi form, nhân viên sẽ liên hệ lại xác nhận thời gian và thông tin thiết bị.",
      path: "/lien-he",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Liên hệ" }]} />
        <div className="mt-6">
          <SectionHeading
            as="h1"
            eyebrow="Liên hệ"
            title="Liên hệ và đặt lịch sửa chữa"
            description="Bạn có thể gọi trực tiếp để được hỗ trợ nhanh nhất, hoặc để lại thông tin để nhân viên liên hệ xác nhận lịch hẹn."
          />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            <InfoCard icon={Phone} label="Số điện thoại">
              <a href={site.phoneHref} className="font-bold text-primary">{site.phone}</a>
            </InfoCard>
            <InfoCard icon={Mail} label="Email">
              <a href={`mailto:${site.email}`} className="text-foreground/80">{site.email}</a>
            </InfoCard>
            <InfoCard icon={MapPin} label="Khu vực hoạt động">
              <p className="text-sm text-muted-foreground">{areas.map((a) => a.name).join(", ")}</p>
            </InfoCard>
            <InfoCard icon={Clock} label="Giờ tiếp nhận yêu cầu">
              <p className="text-sm text-muted-foreground">{site.workingHours}</p>
            </InfoCard>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="grid h-56 place-items-center px-6 text-center">
                <div>
                  <MapPin className="mx-auto size-8 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-navy">Bản đồ (Google Maps)</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Placeholder – gắn mã nhúng Google Maps khi có địa chỉ chính thức.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-extrabold uppercase tracking-tight text-navy">Gửi liên hệ</h2>
            <p className="mt-2 text-sm text-muted-foreground">Chúng tôi phản hồi trong giờ tiếp nhận yêu cầu.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      <Section id="dat-lich" muted>
        <SectionHeading eyebrow="Đặt lịch" title="Đặt lịch sửa chữa" description="Điền thông tin bên dưới, nhân viên sẽ gọi lại xác nhận thời gian phù hợp." />
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
          <BookingForm />
        </div>
      </Section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-card">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{label}</p>
        <div className="mt-1 break-words">{children}</div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const rawData = Object.fromEntries(new FormData(form));
    const result = contactSchema.safeParse(rawData);
    
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        next[String(issue.path[0])] = issue.message;
      }
      setErrors(next);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);

    try {
      // Gọi hàm kết nối Backend gửi email qua Resend
            const res = await sendContactEmail({
        data: {
          name: result.data.name,
          phone: result.data.phone,
          email: result.data.email || "",
          message: result.data.message,
        }
      });


      if (res) {
        form.reset();
        toast.success("Đã gửi liên hệ", { 
          description: "Nhân viên sẽ phản hồi trong thời gian sớm nhất." 
        });
      } else {
        toast.error("Gửi email thất bại", { description: "Vui lòng kiểm tra cấu hình Resend." });
      }
    } catch (error) {
      console.error("Lỗi hệ thống:", error);
      toast.error("Có lỗi xảy ra", { description: "Không thể kết nối đến máy chủ." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <Field name="name" label="Họ tên" placeholder="Nguyễn Văn A" error={errors["name"]} />
      <Field name="phone" label="Số điện thoại" type="tel" placeholder="0901234567" error={errors["phone"]} />
      <div className="sm:col-span-2">
        <Field name="email" label="Email (không bắt buộc)" type="email" placeholder="email@example.com" error={errors["email"]} />
      </div>
      <div className="sm:col-span-2">
        <TextareaField name="message" label="Nội dung" placeholder="Bạn cần hỗ trợ gì?" error={errors["message"]} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.01] sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "ĐANG GỬI..." : "GỬI LIÊN HỆ"}
        </button>
      </div>
    </form>
  );
}

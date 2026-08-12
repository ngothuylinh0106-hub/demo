import { useState } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { bookingSchema, deviceOptions, provinceOptions } from "./forms";
import { Field, SelectField, TextareaField } from "./FormFields";

export function BookingForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const result = bookingSchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
    form.reset();
    toast.success("Đặt lịch thành công");
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/25 bg-primary/5 p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-primary" />
        <p className="mt-4 text-base font-semibold text-navy">
          Cảm ơn bạn! Yêu cầu đã được tiếp nhận. Nhân viên sẽ liên hệ lại để xác nhận thông tin.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-semibold text-navy hover:bg-secondary"
        >
          Gửi yêu cầu khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <Field name="name" label="Họ và tên" placeholder="Nguyễn Văn A" error={errors["name"]} />
      <Field name="phone" label="Số điện thoại" type="tel" placeholder="0901234567" error={errors["phone"]} />
      <SelectField name="province" label="Tỉnh/thành" options={provinceOptions} error={errors["province"]} />
      <Field name="district" label="Quận/huyện" placeholder="Ví dụ: Quận Gò Vấp" error={errors["district"]} />
      <SelectField name="device" label="Loại thiết bị" options={deviceOptions} error={errors["device"]} />
      <Field name="time" label="Thời gian mong muốn" placeholder="Ví dụ: sáng mai 9h" error={errors["time"]} />
      <div className="sm:col-span-2">
        <TextareaField name="condition" label="Tình trạng thiết bị" placeholder="Mô tả lỗi đang gặp" error={errors["condition"]} rows={3} />
      </div>
      <div className="sm:col-span-2">
        <TextareaField name="note" label="Ghi chú" placeholder="Địa chỉ cụ thể, số tầng, giờ liên hệ..." error={errors["note"]} rows={2} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-card transition-transform hover:scale-[1.01] sm:w-auto"
        >
          <CalendarCheck className="size-4" /> ĐẶT LỊCH NGAY
        </button>
      </div>
    </form>
  );
}
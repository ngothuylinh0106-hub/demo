import { useState } from "react";
import { PhoneCall } from "lucide-react";
import { toast } from "sonner";
import { callbackSchema, deviceOptions, provinceOptions } from "./forms";
import { Field, SelectField, TextareaField } from "./FormFields";

export function CallbackForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = callbackSchema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setDone(true);
    e.currentTarget.reset();
    toast.success("Đã tiếp nhận yêu cầu gọi lại", {
      description: "Nhân viên sẽ liên hệ với bạn trong thời gian sớm nhất.",
    });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <Field name="name" label="Họ tên" placeholder="Nguyễn Văn A" error={errors["name"]} />
      <Field name="phone" label="Số điện thoại" type="tel" placeholder="0901234567" error={errors["phone"]} />
      <SelectField name="area" label="Khu vực" options={provinceOptions} error={errors["area"]} />
      <SelectField name="device" label="Thiết bị cần sửa" options={deviceOptions} error={errors["device"]} />
      <div className="sm:col-span-2">
        <TextareaField name="issue" label="Mô tả lỗi" placeholder="Ví dụ: máy lạnh chạy nhưng không mát" error={errors["issue"]} rows={3} />
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-card transition-transform hover:scale-[1.02]"
        >
          <PhoneCall className="size-4" /> YÊU CẦU GỌI LẠI
        </button>
        {done && (
          <p className="text-sm font-medium text-primary">
            Cảm ơn bạn! Yêu cầu đã được tiếp nhận.
          </p>
        )}
      </div>
    </form>
  );
}
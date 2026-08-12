import { z } from "zod";
import { areas } from "@/data/areas";
import { services } from "@/data/services";

/** Số điện thoại Việt Nam: 03/05/07/08/09 + 8 số, hoặc dạng +84 */
export const vnPhone = z
  .string()
  .trim()
  .min(1, { message: "Vui lòng nhập số điện thoại" })
  .transform((v) => v.replace(/[\s.-]/g, ""))
  .refine((v) => /^(0|\+84)(3|5|7|8|9)\d{8}$/.test(v), {
    message: "Số điện thoại không hợp lệ (ví dụ: 0901234567)",
  });

export const callbackSchema = z.object({
  name: z.string().trim().min(2, { message: "Vui lòng nhập họ tên" }).max(80),
  phone: vnPhone,
  area: z.string().trim().min(1, { message: "Vui lòng chọn khu vực" }),
  device: z.string().trim().min(1, { message: "Vui lòng chọn thiết bị" }),
  issue: z.string().trim().max(500).optional(),
});

export const bookingSchema = z.object({
  name: z.string().trim().min(2, { message: "Vui lòng nhập họ và tên" }).max(80),
  phone: vnPhone,
  province: z.string().trim().min(1, { message: "Vui lòng chọn tỉnh/thành" }),
  district: z.string().trim().min(1, { message: "Vui lòng nhập quận/huyện" }).max(80),
  device: z.string().trim().min(1, { message: "Vui lòng chọn loại thiết bị" }),
  condition: z.string().trim().min(5, { message: "Mô tả ngắn tình trạng thiết bị" }).max(500),
  time: z.string().trim().max(80).optional(),
  note: z.string().trim().max(500).optional(),
});

export const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Vui lòng nhập họ tên" }).max(80),
  phone: vnPhone,
  email: z.string().trim().email({ message: "Email không hợp lệ" }).max(160).optional().or(z.literal("")),
  message: z.string().trim().min(5, { message: "Vui lòng nhập nội dung" }).max(1000),
});

export const deviceOptions = [
  ...services.filter((s) => s.icon !== "maintain").map((s) => s.title.replace("Sửa ", "").replace(" tại nhà", "")),
  "Thiết bị điện lạnh khác",
];

export const provinceOptions = [...areas.map((a) => a.name), "Tỉnh/thành khác"];
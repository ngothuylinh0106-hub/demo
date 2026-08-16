import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

const contactServerSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional().or(z.literal("")),
  message: z.string().min(5),
});

export const sendContactEmail = createServerFn({
  method: "POST",
})
  .validator(contactServerSchema)
  .handler(async ({ data }) => {
    const apiKey = 
  (globalThis as any).RESEND_API_KEY || 
  process.env['RESEND_API_KEY'] || 
  (globalThis as any).process?.env?.RESEND_API_KEY;



    const resend = new Resend(apiKey);

    const { data: emailData, error } = await resend.emails.send({
      from: "Website Điện Lạnh Bình Tân <contact@send.dienlanhbinhtan.com>",
      to: ["ngothuylinh0106@gmail.com"],

      subject: `Liên hệ mới từ ${data.name}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Khách hàng gửi liên hệ mới</h2>

          <p>
            <strong>Họ tên:</strong>
            ${data.name}
          </p>

          <p>
            <strong>Số điện thoại:</strong>
            ${data.phone}
          </p>

          <p>
            <strong>Email:</strong>
            ${data.email || "Không cung cấp"}
          </p>

          <p>
            <strong>Nội dung:</strong>
          </p>

          <p>
            ${data.message}
          </p>

          <hr />

          <p>
            Email được gửi từ website dienlanhbihntan.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      throw new Error("Không thể gửi email");
    }

    return {
      success: true,
      id: emailData?.id,
    };
  });
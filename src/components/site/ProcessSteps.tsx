const steps = [
  { title: "Tiếp nhận yêu cầu", desc: "Khách hàng gọi điện hoặc gửi yêu cầu online." },
  { title: "Tư vấn sơ bộ", desc: "Nhân viên tiếp nhận thông tin thiết bị và tình trạng lỗi." },
  { title: "Kỹ thuật viên đến tận nơi", desc: "Kiểm tra trực tiếp thiết bị tại nhà khách hàng." },
  { title: "Báo giá", desc: "Giải thích nguyên nhân và chi phí dự kiến trước khi sửa." },
  { title: "Sửa chữa & bàn giao", desc: "Tiến hành sửa chữa, kiểm tra lại thiết bị và bàn giao cho khách." },
];

export function ProcessSteps() {
  return (
    <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => (
        <li key={step.title} className="relative rounded-2xl border border-border bg-card p-6 shadow-card">
          <span className="absolute -top-4 left-6 grid size-9 place-items-center rounded-xl bg-primary text-sm font-extrabold text-primary-foreground">
            {i + 1}
          </span>
          <p className="mt-4 text-xs font-bold uppercase tracking-wide text-primary">Bước {i + 1}</p>
          <p className="mt-1.5 font-bold text-navy">{step.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
        </li>
      ))}
    </ol>
  );
}
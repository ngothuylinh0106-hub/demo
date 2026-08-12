/**
 * Toàn bộ thông tin doanh nghiệp nằm ở đây.
 * Thay các giá trị PLACEHOLDER bằng thông tin thật trước khi triển khai.
 */
export const site = {
  name: "Sửa Chữa Điện Lạnh Việt Nam",
  shortName: "Điện Lạnh Việt Nam",
  slogan: "Có mặt nhanh – Sửa chữa tận nơi – Báo giá minh bạch",
  description:
    "Dịch vụ sửa chữa điện lạnh tận nơi: máy lạnh, tủ lạnh, máy giặt, máy nước nóng. Kiểm tra rõ nguyên nhân và báo giá trước khi sửa.",
  // PLACEHOLDER – thay bằng số điện thoại thật
  phone: "0900 000 000",
  phoneHref: "tel:0900000000",
  // PLACEHOLDER – thay bằng email thật
  email: "lienhe@example.com",
  // PLACEHOLDER – thay bằng địa chỉ thật (nếu có)
  address: "Đang cập nhật",
  workingHours: "Tiếp nhận yêu cầu: 7:30 – 20:00 hàng ngày",
  // PLACEHOLDER – chính sách bảo hành do quản trị viên cấu hình
  warranty: "Chính sách bảo hành dịch vụ được thông báo cụ thể khi báo giá.",
  zalo: "",
  facebook: "",
} as const;

export const mainNav = [
  { label: "Trang chủ", to: "/" },
  { label: "Giới thiệu", to: "/gioi-thieu" },
  { label: "Dịch vụ", to: "/dich-vu" },
  { label: "Bảng giá", to: "/bang-gia" },
  { label: "Khu vực phục vụ", to: "/khu-vuc" },
  { label: "Blog", to: "/blog" },
  { label: "Liên hệ", to: "/lien-he" },
] as const;
export interface Area {
  slug: string;
  name: string;
  note: string;
}

export const areas: Area[] = [
  { slug: "tphcm", name: "TP. Hồ Chí Minh", note: "Hỗ trợ các quận nội thành và khu vực lân cận" },
  { slug: "ha-noi", name: "Hà Nội", note: "Hỗ trợ nội thành và các quận ven" },
  { slug: "da-nang", name: "Đà Nẵng", note: "Hỗ trợ trung tâm thành phố" },
  { slug: "binh-duong", name: "Bình Dương", note: "Thuận An, Dĩ An, Thủ Dầu Một" },
  { slug: "dong-nai", name: "Đồng Nai", note: "Biên Hòa và khu vực lân cận" },
  { slug: "hai-phong", name: "Hải Phòng", note: "Khu vực nội thành" },
  { slug: "can-tho", name: "Cần Thơ", note: "Ninh Kiều và vùng phụ cận" },
  { slug: "ba-ria-vung-tau", name: "Bà Rịa – Vũng Tàu", note: "Vũng Tàu, Bà Rịa" },
  { slug: "long-an", name: "Long An", note: "Bến Lức, Tân An, Đức Hòa" },
  { slug: "bac-ninh", name: "Bắc Ninh", note: "TP. Bắc Ninh và khu công nghiệp" },
];
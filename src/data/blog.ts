export interface BlogSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  related: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "may-lanh-khong-lanh-nguyen-nhan-cach-xu-ly",
    title: "Máy lạnh không lạnh: Nguyên nhân và cách xử lý",
    excerpt:
      "Tổng hợp các nguyên nhân phổ biến khiến máy lạnh chạy nhưng không lạnh và những gì bạn có thể tự kiểm tra trước khi gọi thợ.",
    date: "2026-01-12",
    category: "Máy lạnh",
    sections: [
      {
        id: "dau-hieu",
        heading: "Dấu hiệu nhận biết",
        paragraphs: [
          "Máy vẫn chạy, quạt gió vẫn thổi nhưng hơi ra không mát hoặc chỉ mát nhẹ. Phòng lâu đạt nhiệt độ cài đặt, dàn nóng chạy liên tục và hóa đơn điện tăng dần.",
        ],
      },
      {
        id: "nguyen-nhan",
        heading: "Nguyên nhân thường gặp",
        paragraphs: [
          "Thiếu gas hoặc xì gas là nguyên nhân phổ biến nhất, thường đi kèm hiện tượng bám tuyết ở ống đồng.",
          "Lưới lọc và dàn trao đổi nhiệt bám bụi dày làm cản luồng gió, khiến hiệu suất làm lạnh giảm mạnh.",
          "Dàn nóng đặt ở nơi bí gió, bị che chắn hoặc quạt dàn nóng yếu cũng làm máy không thải được nhiệt.",
          "Block (máy nén) xuống cấp sau nhiều năm sử dụng khiến áp suất gas không đủ.",
        ],
      },
      {
        id: "tu-kiem-tra",
        heading: "Bạn có thể tự kiểm tra gì?",
        paragraphs: [
          "Kiểm tra remote đang ở chế độ Cool, nhiệt độ cài đặt khoảng 25–26°C và tốc độ quạt không ở mức thấp nhất.",
          "Tháo lưới lọc, rửa sạch bằng nước và để khô trước khi lắp lại.",
          "Đảm bảo cục nóng thông thoáng, không bị vật cản che chắn.",
        ],
      },
      {
        id: "khi-nao-goi-tho",
        heading: "Khi nào nên gọi kỹ thuật viên?",
        paragraphs: [
          "Khi đã vệ sinh lưới lọc và kiểm tra cài đặt mà máy vẫn không lạnh, hoặc thấy hiện tượng bám tuyết, chảy nước, máy kêu to. Các thao tác liên quan đến gas và board mạch cần dụng cụ chuyên dụng, không nên tự xử lý.",
        ],
      },
    ],
    faqs: [
      { q: "Máy lạnh thiếu gas có tự hết không?", a: "Không. Gas trong hệ thống kín, nếu hao hụt nghĩa là có điểm xì và cần kiểm tra, xử lý rồi mới nạp lại." },
      { q: "Vệ sinh máy lạnh có giúp máy lạnh hơn không?", a: "Có, nếu nguyên nhân là do bụi bẩn bám dàn. Đây cũng là bước kiểm tra đầu tiên trước khi kết luận lỗi khác." },
    ],
    related: ["may-lanh-chay-nuoc-phai-lam-sao", "bao-lau-nen-ve-sinh-may-lanh-binh-tan"],
  },
  {
    slug: "may-lanh-chay-nuoc-phai-lam-sao",
    title: "Máy lạnh chảy nước phải làm sao?",
    excerpt: "Nước nhỏ giọt từ dàn lạnh gây ẩm tường và hư đồ đạc. Dưới đây là nguyên nhân và hướng xử lý.",
    date: "2026-01-20",
    category: "Máy lạnh",
    sections: [
      {
        id: "nguyen-nhan",
        heading: "Vì sao máy lạnh chảy nước?",
        paragraphs: [
          "Đường ống thoát nước bị nghẹt do bụi bẩn và rong rêu tích tụ lâu ngày.",
          "Máng hứng nước bị lệch, nứt hoặc lắp đặt không đúng độ dốc.",
          "Dàn lạnh đóng tuyết do bẩn hoặc thiếu gas, khi tuyết tan sẽ tràn ra ngoài máng.",
        ],
      },
      {
        id: "xu-ly",
        heading: "Hướng xử lý",
        paragraphs: [
          "Tắt máy và ngắt nguồn điện để tránh chập cháy, dùng khăn hứng nước tạm thời.",
          "Kỹ thuật viên sẽ thông đường thoát nước, vệ sinh dàn lạnh, cân chỉnh lại máng nước và kiểm tra áp suất gas.",
        ],
      },
      {
        id: "phong-tranh",
        heading: "Cách phòng tránh",
        paragraphs: [
          "Vệ sinh máy định kỳ và kiểm tra đường thoát nước mỗi lần bảo dưỡng là cách đơn giản nhất để hạn chế tình trạng này.",
        ],
      },
    ],
    faqs: [{ q: "Máy lạnh chảy nước có nguy hiểm không?", a: "Nước có thể chảy vào ổ điện hoặc thiết bị bên dưới nên cần tắt máy và xử lý sớm." }],
    related: ["may-lanh-khong-lanh-nguyen-nhan-cach-xu-ly", "bao-lau-nen-ve-sinh-may-lanh-binh-tan"],
  },
  {
    slug: "bao-lau-nen-ve-sinh-may-lanh-binh-tan",
    title: "Bao lâu nên vệ sinh máy lạnh?",
    excerpt: "Tần suất vệ sinh hợp lý theo môi trường sử dụng để máy chạy bền và tiết kiệm điện.",
    date: "2026-02-02",
    category: "Bảo dưỡng",
    sections: [
      {
        id: "tan-suat",
        heading: "Tần suất khuyến nghị",
        paragraphs: [
          "Hộ gia đình dùng vài giờ mỗi ngày: khoảng 4–6 tháng một lần.",
          "Văn phòng, cửa hàng, quán ăn dùng liên tục: khoảng 2–3 tháng một lần.",
          "Khu vực nhiều bụi, gần công trình hoặc mặt đường lớn nên rút ngắn chu kỳ.",
        ],
      },
      {
        id: "loi-ich",
        heading: "Lợi ích khi vệ sinh đúng hạn",
        paragraphs: [
          "Máy làm lạnh nhanh hơn, tiêu thụ điện ít hơn, hạn chế mùi ẩm mốc và kéo dài tuổi thọ block.",
        ],
      },
    ],
    faqs: [{ q: "Tự vệ sinh máy lạnh tại nhà được không?", a: "Bạn có thể tự rửa lưới lọc. Vệ sinh dàn lạnh, dàn nóng cần máy bơm áp lực và kỹ thuật tháo lắp đúng cách." }],
    related: ["may-lanh-khong-lanh-nguyen-nhan-cach-xu-ly", "cach-su-dung-may-lanh-tiet-kiem-dien"],
  },
  {
    slug: "tu-lanh-khong-dong-da-nguyen-nhan",
    title: "Tủ lạnh không đông đá nguyên nhân do đâu?",
    excerpt: "Ngăn đá không đông thường bắt nguồn từ hệ thống xả tuyết, quạt gió hoặc lượng gas.",
    date: "2026-02-14",
    category: "Tủ lạnh",
    sections: [
      {
        id: "nguyen-nhan",
        heading: "Các nguyên nhân chính",
        paragraphs: [
          "Tuyết bám dày sau dàn lạnh làm nghẽn đường gió, khiến hơi lạnh không lưu thông.",
          "Quạt gió ngăn đá hỏng hoặc kẹt.",
          "Thiếu gas, nghẹt ống mao dẫn hoặc block hoạt động yếu.",
          "Cảm biến nhiệt và bo mạch điều khiển gặp lỗi.",
        ],
      },
      {
        id: "kiem-tra",
        heading: "Kiểm tra ban đầu",
        paragraphs: [
          "Xem lại mức nhiệt cài đặt, kiểm tra cửa tủ có đóng kín không và tủ có bị nhồi quá nhiều thực phẩm chặn đường gió hay không.",
        ],
      },
    ],
    faqs: [{ q: "Xả tuyết thủ công có khắc phục được không?", a: "Có thể giúp tạm thời, nhưng nếu tuyết bám lại nhanh thì hệ thống xả đá đang có lỗi cần kiểm tra." }],
    related: ["may-giat-khong-vat-nguyen-nhan", "may-lanh-khong-lanh-nguyen-nhan-cach-xu-ly"],
  },
  {
    slug: "may-giat-khong-vat-nguyen-nhan",
    title: "Máy giặt không vắt: Nguyên nhân thường gặp",
    excerpt: "Quần áo còn ướt sũng sau chu trình giặt có thể do lệch tải, dây curoa hoặc bo mạch.",
    date: "2026-02-25",
    category: "Máy giặt",
    sections: [
      {
        id: "nguyen-nhan",
        heading: "Nguyên nhân thường gặp",
        paragraphs: [
          "Quần áo dồn về một phía gây lệch tải, máy tự dừng vắt để bảo vệ lồng giặt.",
          "Nước chưa xả hết do nghẹt bộ lọc hoặc ống xả bị gấp.",
          "Dây curoa giãn, mô tơ yếu hoặc công tắc cửa không nhận tín hiệu.",
        ],
      },
      {
        id: "xu-ly",
        heading: "Cách xử lý",
        paragraphs: [
          "Dàn đều quần áo, kiểm tra ống xả và bộ lọc xơ vải rồi chạy lại chu trình vắt. Nếu vẫn không vắt, cần kiểm tra phần cơ và bo mạch.",
        ],
      },
    ],
    faqs: [{ q: "Máy giặt cửa ngang và cửa trên lỗi có khác nhau không?", a: "Nguyên lý tương tự, nhưng cửa ngang thường liên quan tới khóa cửa và giảm chấn nhiều hơn." }],
    related: ["tu-lanh-khong-dong-da-nguyen-nhan", "may-nuoc-nong-khong-nong-xu-ly"],
  },
  {
    slug: "may-nuoc-nong-khong-nong-xu-ly",
    title: "Máy nước nóng không nóng phải xử lý thế nào?",
    excerpt: "Hướng dẫn kiểm tra an toàn khi máy nước nóng ngừng làm nóng.",
    date: "2026-03-05",
    category: "Máy nước nóng",
    sections: [
      {
        id: "kiem-tra-an-toan",
        heading: "Ưu tiên an toàn",
        paragraphs: [
          "Ngắt aptomat trước khi kiểm tra bất kỳ bộ phận nào. Không chạm vào máy khi tay ướt hoặc khi nghi ngờ rò điện.",
        ],
      },
      {
        id: "nguyen-nhan",
        heading: "Nguyên nhân phổ biến",
        paragraphs: [
          "Thanh nhiệt đóng cặn canxi dày hoặc đã đứt.",
          "Rơ le nhiệt ngắt do quá nhiệt hoặc hỏng.",
          "Bo mạch điều khiển lỗi, dây nguồn tiếp xúc kém.",
        ],
      },
    ],
    faqs: [{ q: "Có nên tự thay thanh nhiệt không?", a: "Không nên. Thao tác liên quan đến điện và áp lực nước, cần kỹ thuật viên có dụng cụ phù hợp." }],
    related: ["may-giat-khong-vat-nguyen-nhan", "cach-su-dung-may-lanh-tiet-kiem-dien"],
  },
  {
    slug: "cach-su-dung-may-lanh-tiet-kiem-dien",
    title: "Cách sử dụng máy lạnh tiết kiệm điện",
    excerpt: "Những thói quen đơn giản giúp giảm điện năng tiêu thụ mà vẫn đủ mát.",
    date: "2026-03-18",
    category: "Mẹo sử dụng",
    sections: [
      {
        id: "cai-dat",
        heading: "Cài đặt hợp lý",
        paragraphs: [
          "Đặt nhiệt độ khoảng 26°C kết hợp quạt trần thay vì hạ xuống 18–20°C.",
          "Dùng chế độ hẹn giờ khi ngủ và tránh bật tắt liên tục trong thời gian ngắn.",
        ],
      },
      {
        id: "bao-duong",
        heading: "Bảo dưỡng và không gian phòng",
        paragraphs: [
          "Vệ sinh lưới lọc thường xuyên, che rèm cửa nắng và hạn chế khe hở thoát khí lạnh sẽ giúp máy không phải chạy quá tải.",
        ],
      },
    ],
    faqs: [{ q: "Chế độ Dry có tiết kiệm điện hơn không?", a: "Trong ngày ẩm, chế độ Dry có thể giảm điện tiêu thụ, nhưng ngày nắng nóng khô thì Cool vẫn hiệu quả hơn." }],
    related: ["bao-lau-nen-ve-sinh-may-lanh-binh-tan", "may-lanh-khong-lanh-nguyen-nhan-cach-xu-ly"],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
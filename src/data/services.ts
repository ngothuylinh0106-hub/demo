export interface ServiceDetail {
  slug: string;
  path: string;
  title: string;
  h1: string;
  short: string;
  icon: "air" | "fridge" | "washer" | "heater" | "clean" | "maintain";
  bullets: string[];
  intro: string;
  issues: { problem: string; cause: string }[];
  brands: string[];
  pricing: { service: string; price: string; note: string }[];
  faqs: { q: string; a: string }[];
}

const commonBrands = [
  "Daikin",
  "Panasonic",
  "LG",
  "Samsung",
  "Toshiba",
  "Sharp",
  "Mitsubishi",
  "Casper",
  "Aqua",
  "Electrolux",
];

export const services: ServiceDetail[] = [
  {
    slug: "sua-may-lanh-binh-tan",
    path: "/sua-may-lanh-binh-tan",
    title: "Sửa máy lạnh tại Bình Tân",
    h1: "Sửa máy lạnh tại Bình Tân – Kiểm tra và báo giá trước khi sửa",
    short: "Xử lý máy lạnh không lạnh, chảy nước, kêu to, báo lỗi, không lên nguồn.",
    icon: "air",
    bullets: [
      "Máy lạnh không lạnh",
      "Máy lạnh chảy nước",
      "Máy lạnh không chạy",
      "Máy lạnh báo lỗi",
      "Máy lạnh kêu to",
      "Vệ sinh và bảo dưỡng máy lạnh",
    ],
    intro:
      "Máy lạnh là thiết bị hoạt động liên tục trong điều kiện thời tiết nóng ẩm nên rất dễ phát sinh lỗi sau một thời gian sử dụng. Kỹ thuật viên sẽ kiểm tra trực tiếp tại nhà, xác định nguyên nhân, giải thích cho khách hàng và chỉ tiến hành sửa sau khi bạn đồng ý mức chi phí.",
    issues: [
      { problem: "Máy lạnh không lạnh hoặc lạnh yếu", cause: "Thiếu gas, dàn lạnh bám bẩn, block yếu hoặc quạt dàn nóng hoạt động kém." },
      { problem: "Máy lạnh chảy nước trong nhà", cause: "Nghẹt đường thoát nước, máng nước lệch, dàn lạnh đóng tuyết do bẩn hoặc thiếu gas." },
      { problem: "Máy lạnh không lên nguồn", cause: "Hỏng board mạch, lỗi nguồn cấp, hư remote hoặc mắt nhận tín hiệu." },
      { problem: "Máy lạnh báo lỗi trên dàn lạnh", cause: "Lỗi cảm biến, lỗi giao tiếp giữa dàn nóng và dàn lạnh, lỗi inverter." },
      { problem: "Máy lạnh kêu to, rung lắc", cause: "Quạt lệch bạc, dị vật trong lồng sóc, khung treo lỏng, block xuống cấp." },
    ],
    brands: commonBrands,
    pricing: [
      { service: "Kiểm tra máy lạnh tại nhà", price: "Liên hệ", note: "Tùy khu vực" },
      { service: "Vệ sinh máy lạnh", price: "Liên hệ", note: "Tùy loại máy" },
      { service: "Nạp gas máy lạnh", price: "Liên hệ", note: "Tùy loại gas" },
      { service: "Sửa board, thay linh kiện", price: "Liên hệ", note: "Tùy lỗi thực tế" },
    ],
    faqs: [
      { q: "Máy lạnh không lạnh có cần thay máy mới không?", a: "Phần lớn trường hợp chỉ cần vệ sinh, nạp gas hoặc thay linh kiện. Kỹ thuật viên sẽ kiểm tra rồi tư vấn phương án phù hợp nhất." },
      { q: "Có sửa máy lạnh tại nhà không?", a: "Có. Kỹ thuật viên đến tận nơi kiểm tra và xử lý. Trường hợp cần mang về xưởng sẽ trao đổi trước với khách hàng." },
      { q: "Có báo giá trước khi sửa không?", a: "Có. Chi phí dự kiến luôn được thông báo và giải thích rõ trước khi tiến hành." },
    ],
  },
  {
    slug: "sua-tu-lanh-binh-tan",
    path: "/sua-tu-lanh-binh-tan",
    title: "Sửa tủ lạnh tại Bình Tân",
    h1: "Sửa tủ lạnh tại Bình Tân – Kiểm tra nhanh, xử lý đúng nguyên nhân",
    short: "Tủ lạnh không lạnh, không đông đá, chảy nước, kêu to, không hoạt động.",
    icon: "fridge",
    bullets: [
      "Tủ lạnh không lạnh",
      "Tủ lạnh không đông đá",
      "Tủ lạnh chảy nước",
      "Tủ lạnh kêu to",
      "Tủ lạnh không hoạt động",
      "Kiểm tra và thay linh kiện",
    ],
    intro:
      "Tủ lạnh chạy 24/24 nên các lỗi về làm lạnh, xả đá hay rò rỉ nước thường xuất hiện dần theo thời gian. Việc kiểm tra sớm giúp hạn chế hư hỏng lan sang block và tiết kiệm chi phí sửa chữa.",
    issues: [
      { problem: "Tủ lạnh không lạnh", cause: "Thiếu gas, nghẹt ống mao dẫn, block yếu hoặc hỏng quạt gió." },
      { problem: "Ngăn đá không đông", cause: "Hỏng cảm biến, lỗi bo mạch, tuyết bám dày cản luồng khí lạnh." },
      { problem: "Tủ lạnh chảy nước ra sàn", cause: "Nghẹt lỗ thoát nước xả đá, khay hứng nước nứt vỡ, gioăng cửa hở." },
      { problem: "Tủ lạnh kêu to bất thường", cause: "Quạt vướng vật cản, block rung, chân tủ kê không cân." },
    ],
    brands: commonBrands,
    pricing: [
      { service: "Kiểm tra tủ lạnh tại nhà", price: "Liên hệ", note: "Tùy khu vực" },
      { service: "Nạp gas tủ lạnh", price: "Liên hệ", note: "Tùy dung tích" },
      { service: "Thay linh kiện", price: "Liên hệ", note: "Tùy tình trạng" },
    ],
    faqs: [
      { q: "Tủ lạnh không đông đá sửa mất bao lâu?", a: "Nhiều lỗi xử lý trong ngày. Trường hợp cần thay linh kiện đặc thù, kỹ thuật viên sẽ hẹn thời gian cụ thể." },
      { q: "Có cần mang tủ lạnh đi sửa không?", a: "Đa số trường hợp xử lý được tại nhà. Nếu bắt buộc mang về xưởng sẽ thống nhất với khách trước." },
    ],
  },
  {
    slug: "sua-may-giat-binh-tan",
    path: "/sua-may-giat-binh-tan",
    title: "Sửa máy giặt tại Bình Tân",
    h1: "Sửa máy giặt tại Bình Tân – Xử lý đúng lỗi, minh bạch chi phí",
    short: "Máy giặt không hoạt động, không vắt, không cấp nước, rung lắc, báo lỗi.",
    icon: "washer",
    bullets: [
      "Máy giặt không hoạt động",
      "Máy giặt không vắt",
      "Máy giặt không cấp nước",
      "Máy giặt rung lắc",
      "Máy giặt báo lỗi",
      "Thay linh kiện máy giặt",
    ],
    intro:
      "Máy giặt cửa trên và cửa ngang đều có thể gặp lỗi về cấp nước, xả nước, mô tơ hoặc bo mạch. Kỹ thuật viên kiểm tra theo trình tự để xác định đúng bộ phận hư hỏng, tránh thay thế không cần thiết.",
    issues: [
      { problem: "Máy giặt không vắt", cause: "Lệch tải, hỏng công tắc cửa, dây curoa giãn, lỗi mô tơ hoặc bo điều khiển." },
      { problem: "Máy giặt không cấp nước", cause: "Van cấp nước hỏng, lọc van bám cặn, áp lực nước yếu." },
      { problem: "Máy giặt rung lắc mạnh", cause: "Chưa tháo ốc vận chuyển, lò xo/giảm chấn yếu, mặt sàn không phẳng." },
      { problem: "Máy giặt báo lỗi trên màn hình", cause: "Lỗi cảm biến mực nước, cảm biến cửa hoặc bo mạch." },
    ],
    brands: commonBrands,
    pricing: [
      { service: "Kiểm tra máy giặt tại nhà", price: "Liên hệ", note: "Tùy khu vực" },
      { service: "Vệ sinh lồng giặt", price: "Liên hệ", note: "Tùy loại máy" },
      { service: "Thay linh kiện", price: "Liên hệ", note: "Tùy lỗi" },
    ],
    faqs: [
      { q: "Máy giặt báo lỗi có tự xử lý được không?", a: "Bạn có thể thử tắt nguồn 5–10 phút rồi khởi động lại. Nếu lỗi lặp lại, nên để kỹ thuật viên kiểm tra." },
      { q: "Có thay linh kiện tại nhà không?", a: "Có, với các linh kiện phổ biến. Trường hợp đặc thù sẽ được hẹn lịch bổ sung." },
    ],
  },
  {
    slug: "sua-may-nuoc-nong-binh-tan",
    path: "/sua-may-nuoc-nong-binh-tan",
    title: "Sửa máy nước nóng tại Bình Tân",
    h1: "Sửa máy nước nóng tại Bình Tân – An toàn điện, kiểm tra kỹ trước khi sửa",
    short: "Máy nước nóng không nóng, báo lỗi, rò rỉ nước, không vào điện.",
    icon: "heater",
    bullets: [
      "Máy nước nóng không nóng",
      "Máy báo lỗi",
      "Rò rỉ nước",
      "Không vào điện",
      "Kiểm tra thanh nhiệt",
      "Bảo trì máy nước nóng",
    ],
    intro:
      "Máy nước nóng liên quan trực tiếp đến an toàn điện và nước nên cần được kiểm tra đúng quy trình. Kỹ thuật viên kiểm tra nguồn điện, thanh nhiệt, rơ le nhiệt và các điểm rò rỉ trước khi đưa ra phương án xử lý.",
    issues: [
      { problem: "Nước không nóng", cause: "Thanh nhiệt đóng cặn hoặc đứt, rơ le nhiệt hỏng, cài đặt nhiệt độ sai." },
      { problem: "Máy nhảy CB liên tục", cause: "Rò điện thanh nhiệt, ẩm bo mạch, dây dẫn xuống cấp." },
      { problem: "Rò rỉ nước", cause: "Gioăng lão hóa, van an toàn hỏng, mối nối ống bị hở." },
      { problem: "Máy không vào điện", cause: "Hỏng nguồn, đứt dây, lỗi bo điều khiển." },
    ],
    brands: commonBrands,
    pricing: [
      { service: "Kiểm tra máy nước nóng", price: "Liên hệ", note: "Tùy khu vực" },
      { service: "Thay thanh nhiệt / rơ le", price: "Liên hệ", note: "Tùy thiết bị" },
      { service: "Bảo trì, súc rửa bình", price: "Liên hệ", note: "Tùy dung tích" },
    ],
    faqs: [
      { q: "Máy nước nóng dùng bao lâu nên bảo trì?", a: "Nên kiểm tra định kỳ mỗi 12 tháng, hoặc sớm hơn nếu nguồn nước nhiều cặn." },
      { q: "Máy nhảy CB có nguy hiểm không?", a: "Có thể là dấu hiệu rò điện. Bạn nên ngắt nguồn và gọi kỹ thuật viên kiểm tra ngay." },
    ],
  },
  {
    slug: "ve-sinh-may-lanh-binh-tan",
    path: "/ve-sinh-may-lanh-binh-tan",
    title: "Vệ sinh máy lạnh tại Bình Tân",
    h1: "Vệ sinh máy lạnh tại Bình Tân– Làm sạch dàn lạnh, dàn nóng, kiểm tra tổng quát",
    short: "Vệ sinh máy lạnh treo tường, âm trần, máy công nghiệp và bảo dưỡng định kỳ.",
    icon: "clean",
    bullets: [
      "Vệ sinh máy lạnh treo tường",
      "Vệ sinh máy lạnh âm trần",
      "Vệ sinh máy lạnh công nghiệp",
      "Bảo dưỡng định kỳ",
    ],
    intro:
      "Máy lạnh bám bụi làm giảm khả năng làm lạnh, tăng điện năng tiêu thụ và ảnh hưởng chất lượng không khí. Vệ sinh định kỳ giúp máy chạy êm hơn và hạn chế hư hỏng phát sinh.",
    issues: [
      { problem: "Máy lạnh lạnh yếu dần", cause: "Lưới lọc và dàn trao đổi nhiệt bám bụi dày." },
      { problem: "Có mùi khó chịu khi bật máy", cause: "Ẩm mốc tích tụ trong dàn lạnh và máng nước." },
      { problem: "Hóa đơn điện tăng bất thường", cause: "Máy phải chạy lâu hơn để đạt nhiệt độ cài đặt." },
    ],
    brands: commonBrands,
    pricing: [
      { service: "Vệ sinh máy lạnh treo tường", price: "Liên hệ", note: "Tùy công suất" },
      { service: "Vệ sinh máy lạnh âm trần", price: "Liên hệ", note: "Tùy vị trí lắp" },
      { service: "Vệ sinh máy lạnh công nghiệp", price: "Liên hệ", note: "Khảo sát thực tế" },
    ],
    faqs: [
      { q: "Bao lâu nên vệ sinh máy lạnh một lần?", a: "Hộ gia đình thường 4–6 tháng/lần. Văn phòng, quán ăn dùng liên tục nên 2–3 tháng/lần." },
      { q: "Vệ sinh máy lạnh mất bao lâu?", a: "Thông thường khoảng 30–60 phút cho mỗi máy treo tường." },
    ],
  },
  {
    slug: "bao-tri-dien-lanh",
    path: "/bao-tri-dien-lanh",
    title: "Bảo trì điện lạnh",
    h1: "Bảo trì điện lạnh định kỳ cho hộ gia đình và doanh nghiệp",
    short: "Bảo trì định kỳ, kiểm tra thiết bị, thay thế linh kiện và xử lý sự cố.",
    icon: "maintain",
    bullets: [
      "Bảo trì định kỳ",
      "Kiểm tra thiết bị",
      "Thay thế linh kiện",
      "Xử lý sự cố",
    ],
    intro:
      "Gói bảo trì phù hợp với văn phòng, cửa hàng, nhà hàng và hộ gia đình có nhiều thiết bị điện lạnh. Lịch kiểm tra được thống nhất theo nhu cầu sử dụng thực tế.",
    issues: [
      { problem: "Thiết bị hư hỏng đột ngột", cause: "Không được kiểm tra định kỳ, linh kiện xuống cấp không được phát hiện sớm." },
      { problem: "Chi phí sửa chữa phát sinh lớn", cause: "Lỗi nhỏ kéo dài dẫn đến hư hỏng bộ phận đắt tiền như block, bo mạch." },
    ],
    brands: commonBrands,
    pricing: [
      { service: "Bảo trì theo thiết bị", price: "Liên hệ", note: "Tùy số lượng" },
      { service: "Hợp đồng bảo trì định kỳ", price: "Liên hệ", note: "Khảo sát thực tế" },
    ],
    faqs: [
      { q: "Có nhận bảo trì cho văn phòng, cửa hàng không?", a: "Có. Chúng tôi khảo sát số lượng thiết bị và đề xuất lịch bảo trì phù hợp." },
      { q: "Bảo trì gồm những hạng mục nào?", a: "Kiểm tra tổng quát, vệ sinh, đo thông số hoạt động và đề xuất thay thế linh kiện khi cần." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
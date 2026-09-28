import { useEffect, useState } from "react";

const sliderData = [
  { id: 1, image: "/dr1.jpg" },
  { id: 2, image: "/dr2.jpg" },
  { id: 3, image: "/dr3.jpg" },
  { id: 4, image: "/dr4.jpg" },
  { id: 5, image: "/dr5.jpg" },
  { id: 6, image: "/dr6.jpg" },
  { id: 7, image: "/dr7.jpg" },
  { id: 8, image: "/dr8.jpg" },
  { id: 9, image: "/dr9.jpg" },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  // Chuyển slide tiếp theo
  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= sliderData.length - 1 ? 0 : prev + 1
    );
  };

  // Chuyển slide trước
  const prevSlide = () => {
    setCurrent((prev) =>
      prev <= 0 ? sliderData.length - 1 : prev - 1
    );
  };

  // Tự động chạy slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev >= sliderData.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-10">

      {/* Khung slider */}
      <div className="mx-auto max-w-7xl overflow-hidden px-4">

        <div
          className="flex gap-5 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 320}px)`,
          }}
        >
          {sliderData.map((slide) => (
            <div
              key={slide.id}
              className="h-[600px] w-[300px] min-w-[300px] overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={slide.image}
                alt={`Dịch vụ điện lạnh Bình Tân ${slide.id}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Nút trái */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Ảnh trước"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white px-4 py-3 text-xl shadow-lg transition hover:bg-gray-100"
      >
        ❮
      </button>

      {/* Nút phải */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Ảnh tiếp theo"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white px-4 py-3 text-xl shadow-lg transition hover:bg-gray-100"
      >
        ❯
      </button>

    </section>
  );
}
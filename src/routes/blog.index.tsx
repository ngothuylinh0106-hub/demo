import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/data/blog";
import { Section, SectionHeading, CTABanner } from "@/components/site/Primitives";
import { BlogCard } from "@/components/site/Cards";
import { Breadcrumbs } from "@/components/site/Breadcrumb";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead({
      title: "Kiến thức điện lạnh | Blog Sửa Chữa Điện Lạnh Việt Nam",
      description:
        "Bài viết hướng dẫn xử lý sự cố máy lạnh, tủ lạnh, máy giặt, máy nước nóng và mẹo sử dụng thiết bị điện lạnh bền, tiết kiệm điện.",
      path: "/blog",
    }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Blog" }]} />
        <div className="mt-6">
          <SectionHeading
            as="h1"
            eyebrow="Blog"
            title="Kiến thức điện lạnh"
            description="Kinh nghiệm nhận biết lỗi, cách kiểm tra ban đầu và mẹo sử dụng thiết bị điện lạnh đúng cách."
          />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
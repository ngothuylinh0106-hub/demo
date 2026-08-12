import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { formatDate, getPost, posts, type BlogPost } from "@/data/blog";
import { Section, CTABanner } from "@/components/site/Primitives";
import { Breadcrumbs } from "@/components/site/Breadcrumb";
import { BlogCard } from "@/components/site/Cards";
import { FAQList, faqSchema } from "@/components/site/FAQ";
import { breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Không tìm thấy bài viết" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    const path = `/blog/${params.slug}`;
    return {
      meta: [
        { title: `${post.title} | Kiến thức điện lạnh` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: path },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            inLanguage: "vi-VN",
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Trang chủ", item: "/" },
              { name: "Blog", item: "/blog" },
              { name: post.title, item: path },
            ]),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(post.faqs)) },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: PostNotFound,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData() as { post: BlogPost };
  const related = post.related.map((s) => posts.find((p) => p.slug === s)).filter(Boolean);

  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: post.title }]} />
        <article className="mx-auto mt-8 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wide text-primary">{post.category}</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-xs text-muted-foreground">Đăng ngày {formatDate(post.date)}</p>
          <div className="mt-6 aspect-[16/7] w-full rounded-2xl bg-[image:var(--gradient-hero)]" aria-hidden />
          <p className="mt-8 text-base leading-relaxed text-foreground/85">{post.excerpt}</p>

          <nav className="mt-8 rounded-2xl border border-border bg-surface p-5">
            <p className="text-sm font-bold text-navy">Nội dung bài viết</p>
            <ol className="mt-3 space-y-2 text-sm">
              {post.sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-primary hover:underline">
                    {i + 1}. {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {post.sections.map((s) => (
            <section key={s.id} id={s.id} className="mt-10 scroll-mt-24">
              <h2 className="text-xl font-bold text-navy sm:text-2xl">{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p} className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <div className="mt-12">
            <h2 className="text-xl font-bold text-navy sm:text-2xl">Câu hỏi thường gặp</h2>
            <FAQList items={post.faqs} />
          </div>
        </article>
      </Section>

      {related.length > 0 && (
        <Section muted>
          <h2 className="text-xl font-extrabold uppercase tracking-tight text-navy">Bài viết liên quan</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => p && <BlogCard key={p.slug} post={p} />)}
          </div>
        </Section>
      )}

      <CTABanner />
    </>
  );
}

function PostNotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-2xl font-extrabold text-navy">Không tìm thấy bài viết</h1>
        <p className="mt-3 text-sm text-muted-foreground">Bài viết có thể đã được đổi đường dẫn hoặc gỡ bỏ.</p>
        <Link to="/blog" className="mt-6 inline-block rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground">
          Về trang Blog
        </Link>
      </div>
    </Section>
  );
}
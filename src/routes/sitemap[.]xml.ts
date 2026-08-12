import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services } from "@/data/services";
import { posts } from "@/data/blog";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/gioi-thieu", changefreq: "monthly", priority: "0.6" },
          { path: "/dich-vu", changefreq: "monthly", priority: "0.9" },
          ...services.map((s) => ({ path: s.path, changefreq: "monthly" as const, priority: "0.9" })),
          { path: "/bang-gia", changefreq: "monthly", priority: "0.8" },
          { path: "/khu-vuc", changefreq: "monthly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          ...posts.map((p) => ({ path: `/blog/${p.slug}`, changefreq: "monthly" as const, priority: "0.6" })),
          { path: "/cau-hoi-thuong-gap", changefreq: "monthly", priority: "0.6" },
          { path: "/lien-he", changefreq: "monthly", priority: "0.8" },
          { path: "/chinh-sach-bao-mat", changefreq: "yearly", priority: "0.3" },
          { path: "/dieu-khoan-su-dung", changefreq: "yearly", priority: "0.3" },
          { path: "/chinh-sach-bao-hanh", changefreq: "yearly", priority: "0.4" },
          { path: "/chinh-sach-dich-vu", changefreq: "yearly", priority: "0.4" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
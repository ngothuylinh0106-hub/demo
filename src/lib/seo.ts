import { site } from "@/config/site";
const BASE_URL = "https://dienlanhbinhtan.com";

export function pageHead({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
}) {
  const canonicalUrl = `${BASE_URL}${path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: canonicalUrl },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],

    links: [
      {
        rel: "canonical",
        href: canonicalUrl,
      },
    ],
  };
}

export const breadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.item,
  })),
});

export const serviceSchema = (
  name: string,
  description: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: name,
  description: description,
  serviceType: name,
  areaServed: "Việt Nam",
  provider: {
    "@type": "LocalBusiness",
    name: site.name,
    telephone: site.phone,
  },
});
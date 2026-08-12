import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl">
      {items.map((item, i) => (
        <AccordionItem
          key={`${i}-${item.q}`}
          value={`item-${i}`}
          className="mb-3 rounded-2xl border border-border bg-card px-5 shadow-card"
        >
          <AccordionTrigger className="text-left text-base font-semibold text-navy hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export const faqSchema = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
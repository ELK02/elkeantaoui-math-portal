export function LessonJsonLd({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: title,
    description,
    url: `https://profdemath.com${url}`,
    inLanguage: "fr",
    learningResourceType: "Leçon",
    isAccessibleForFree: true,
    provider: {
      "@type": "Person",
      name: "Lahbib Elkeantaoui",
      url: "https://profdemath.com/a-propos",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

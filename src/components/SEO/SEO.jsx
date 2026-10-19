
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://balaji-rubber-products.vercel.app";

function SEO({
  title,
  description,
  keywords,
  canonical,
  image,
  schema,
}) {
  const schemaData = Array.isArray(schema)
    ? schema
    : schema
      ? [schema]
      : [];

  const canonicalUrl = canonical
    ? new URL(canonical, SITE_URL).href
    : undefined;

  const imageUrl = image
    ? new URL(image, SITE_URL).href
    : undefined;

  return (
    <Helmet>
      {/* Basic SEO */}
      {title && <title>{title}</title>}

      {description && (
        <meta name="description" content={description} />
      )}

      {keywords && (
        <meta name="keywords" content={keywords} />
      )}

      {canonicalUrl && (
        <link rel="canonical" href={canonicalUrl} />
      )}

      {/* Open Graph */}
      <meta property="og:type" content="website" />

      {title && (
        <meta property="og:title" content={title} />
      )}

      {description && (
        <meta
          property="og:description"
          content={description}
        />
      )}

      {canonicalUrl && (
        <meta property="og:url" content={canonicalUrl} />
      )}

      {imageUrl && (
        <meta property="og:image" content={imageUrl} />
      )}

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      {title && (
        <meta name="twitter:title" content={title} />
      )}

      {description && (
        <meta
          name="twitter:description"
          content={description}
        />
      )}

      {imageUrl && (
        <meta name="twitter:image" content={imageUrl} />
      )}

      {/* Structured Data */}
      {schemaData.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
        >
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}

export default SEO;

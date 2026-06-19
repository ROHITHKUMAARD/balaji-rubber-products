import { Helmet } from "react-helmet-async";

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

  return (
    <Helmet>
      {/* Basic SEO */}

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      {canonical && (
        <link
          rel="canonical"
          href={canonical}
        />
      )}

      {/* Open Graph */}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonical}
      />

      {image && (
        <meta
          property="og:image"
          content={image}
        />
      )}

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      {image && (
        <meta
          name="twitter:image"
          content={image}
        />
      )}

      {/* Structured Data */}

      {schemaData.map(
        (item, index) => (
          <script
            key={index}
            type="application/ld+json"
          >
            {JSON.stringify(item)}
          </script>
        )
      )}
    </Helmet>
  );
}

export default SEO;
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
}

const SEOHead = ({
  title = "Alaskan Boats - Alaska's Premier Boat Marketplace",
  description = "Buy and sell boats across Alaska. Fishing boats, cabin cruisers, skiffs, jet boats, kayaks and more. List your boat for just $20—no commissions, no middleman.",
  canonical = "https://alaskanboats.com",
  type = "website",
  image,
}: SEOHeadProps) => {
  const fullTitle = title.includes('Alaskan Boats') ? title : `${title} | Alaskan Boats`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Alaskan Boats",
    "url": "https://alaskanboats.com",
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://alaskanboats.com/browse?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Alaskan Boats",
      "url": "https://alaskanboats.com",
      "areaServed": {
        "@type": "State",
        "name": "Alaska"
      }
    }
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {image && <meta property="og:image" content={image} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;

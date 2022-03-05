import Head from "next/head";

const SEO = ({
    title = "Alisher Ortiqov - Personal Dev Blog",
    description = "A weblog by Alisher Ortiqov, a backend developer living in Uzbekistan, about the latest technologies & news.",
    image = "https://blog.mcpeblocker.uz/assets/social-preview.jpg",
    url = "https://blog.mcpeblocker.uz/",
    type = "website",
    author = "Alisher Ortiqov",
    keywords = ["blog","Alisher Ortiqov","mcpeblocker","dev","web","backend","personal blog","news"]
}) => {
  return (
    <Head>
      <title>{ title }</title>
      <meta name="title" content={ title } />
      <meta
        name="description"
        content={ description}
      />
      <meta name="author" content={ author } />
      <meta name="keywords" content={ keywords.join(",") } />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ type } />
      <meta property="og:url" content={ url } />
      <meta property="og:title" content={ title } />
      <meta
        property="og:description"
        content={ description}
      />
      <meta
        property="og:image"
        content={ image }
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ url } />
      <meta
        property="twitter:title"
        content={ title }
      />
      <meta
        property="twitter:description"
        content={ description}
      />
      <meta
        property="twitter:image"
        content={ image }
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
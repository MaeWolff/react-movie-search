import React from "react";
import { Helmet } from "react-helmet";

type HeadProps = {
  title?: string;
};

export default function HeadTag({ title }: HeadProps) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>KATANA - {title}</title>
      <link rel="canonical" href="http://katana-searching.netlify.com" />

      <meta name="title" content="Katana - Movie search engine" />
      <meta
        name="description"
        content="Katana is an online film search site and have all the details of it."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://katana-searching.netlify.com" />
      <meta property="og:title" content="Katana - Movie search engine" />
      <meta
        property="og:description"
        content="Katana is an online film search site and have all the details of it."
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="http://katana-searching.netlify.com /"
      />
      <meta property="twitter:title" content="Katana - Movie search engine" />
      <meta
        property="twitter:description"
        content="Katana is an online film search site and have all the details of it."
      />
    </Helmet>
  );
}

import seo from "@/config/seo.config";

export const metadata = {
  title: seo.defaultTitle + " | Contact",
  description: seo.description,
  openGraph: {
    title: seo.defaultTitle,
    description: seo.description,
    url: seo.url,
    siteName: seo.siteName,
    images: [
      {
        url: seo.url + seo.image,
        width: 1200,
        height: 630,
      },
    ],
    locale: seo.locale,
    type: "website",
  },
  twitter: {
    card: seo.twitter.cardType,
    title: seo.defaultTitle,
    description: seo.description,
    creator: seo.twitter.handle,
  },
};

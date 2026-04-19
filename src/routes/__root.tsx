import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Sri Balaji Enterprises",
  description:
    "Property Registration & Legal Documentation Consultancy in Bangalore. Sale Deed, Encumbrance Certificate, Khata Transfer, Trust & Company Registration.",
  telephone: ["+91-9886122903", "+91-9019162841", "+91-8660078017"],
  areaServed: "Bengaluru",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress:
        "#13, 15th Cross, Davis Road, Opposite Citizen School Office, Next to Nusrath Fathima School",
      addressLocality: "Bengaluru",
      postalCode: "560084",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress:
        "#132/798, Below Sub-Register Office Complex, Philomena Hospital, JMJ Hospital Road, Nagawara A.C. Post",
      addressLocality: "Bengaluru",
      postalCode: "560045",
      addressCountry: "IN",
    },
  ],
  openingHours: ["Mo-Sa 08:00-22:30", "Su 10:30-15:00"],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sri Balaji Enterprises – Property Registration & Documentation Consultancy in Bangalore" },
      {
        name: "description",
        content:
          "Trusted consultancy for property registration, sale deed, encumbrance certificate, khata transfer & legal documentation in Bangalore.",
      },
      { name: "author", content: "Sri Balaji Enterprises" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}

import Script from "next/script";
import c from "../content.json";

export const metadata = {
  title: c.site.title,
  description: c.site.description,
  icons: { icon: "data:," },
};

export default function RootLayout({ children }) {
  return (
    <html lang={c.site.lang}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "// Layout mode before first paint: L = pinned screens on a fixed grid, F = flowing page on a scrolling grid.\n  // \"lines\" hides boxes until they scroll into view, then slides them in and draws their frames.\n  // The intro plays once per tab session and never for reduced motion.\n  (function () {\n    var root = document.documentElement;\n    root.classList.add(\"js\", innerWidth > 860 ? \"L\" : \"F\");\n    try {\n      if (!matchMedia(\"(prefers-reduced-motion: reduce)\").matches && !sessionStorage.getItem(\"lattice-intro\")) root.classList.add(\"js-intro\");\n    } catch (e) {}\n    if (!matchMedia(\"(prefers-reduced-motion: reduce)\").matches && \"IntersectionObserver\" in window) root.classList.add(\"lines\");\n  })();" }} />
                <link rel="stylesheet" href="/site.css" />
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: "window.FG_IMG=\"/img/\";" }} />
        <Script src="/site.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

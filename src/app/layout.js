import "./globals.css";
import { FontProvider } from "./components/fontProvider";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: "Flying Legend Vietnam - Khát vọng vươn mình cùng đất nước",
  description: "Flying Legend Vietnam - Khát vọng vươn mình cùng đất nước",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="FLV" />
        <link
          href="https://fonts.cdnfonts.com/css/bank-gothic"
          rel="stylesheet"
        />
        <meta property="og:title" content="Flying Legend Vietnam" />
        <meta
          property="og:description"
          content="Discover the innovative TP150 aircraft, proudly manufactured in Vietnam to meet international standards."
        />
        <meta
          property="og:image"
          content="https://www.flyinglegend.vn/flyinglegend-logo.jpg"
        />
        <meta property="og:url" content="https://www.flyinglegend.vn" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flying Legend Vietnam" />
        <meta
          name="twitter:description"
          content="Khám phá Flying Legend Vietnam và khát vọng vươn mình cùng đất nước với chiếc máy bay TP-150."
        />
        <meta
          name="twitter:image"
          content="https://www.flyinglegend.vn/flyinglegend-logo.jpg"
        />
      </head>
      <body>
        <FontProvider>
          <div className="flex min-h-screen flex-col">
            {/* <Header /> */}
            <main className="flex-grow">{children}</main>
            {/* <Footer /> */}
          </div>
        </FontProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

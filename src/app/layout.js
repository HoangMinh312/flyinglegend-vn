import "./globals.css";
import { FontProvider } from "./components/fontProvider";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: "Flying Legend Vietnam",
  description: "Flying Legend Vietnam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          href="https://fonts.cdnfonts.com/css/bank-gothic"
          rel="stylesheet"
        />
      </head>
      <body>
        <FontProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </FontProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

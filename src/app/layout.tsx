import "./globals.css";
import { Alex_Brush } from "next/font/google";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alex-brush",
});

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Flying Legend Vietnam - Khát vọng vươn mình cùng đất nước",
  description:
    "Khám phá Flying Legend Vietnam và khát vọng vươn mình cùng đất nước với chiếc máy bay TP-150.",
  appleWebApp: {
    title: "FLV",
  },
  openGraph: {
    title: "Flying Legend Vietnam",
    description:
      "Discover the innovative TP150 aircraft, proudly manufactured in Vietnam to meet international standards.",
    url: "https://www.flyinglegend.vn",
    images: [
      {
        url: "https://www.flyinglegend.vn/flyinglegend-logo.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flying Legend Vietnam",
    description:
      "Khám phá Flying Legend Vietnam và khát vọng vươn mình cùng đất nước với chiếc máy bay TP-150.",
    images: ["https://www.flyinglegend.vn/flyinglegend-logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/bank-gothic"
          rel="stylesheet"
        />
      </head>
      <body className={alexBrush.variable}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

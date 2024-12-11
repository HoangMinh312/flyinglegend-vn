import "./globals.css";
import { FontProvider } from "./components/fontProvider";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: "Flying Legend Vietnam - Coming Soon",
  description: "Flying Legend Vietnam - Under Construction",
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
      <body>
        <FontProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </FontProvider>
        <Analytics />
      </body>
    </html>
  );
}

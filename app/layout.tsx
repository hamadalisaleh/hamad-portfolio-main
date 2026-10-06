import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import "./card-polish.css";
import "./visual-tuning.css";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo" });

export const metadata: Metadata = {
  title: "HAMAD ALI SALEH HASSAN | Web Developer & IT Specialist Portfolio",
  description:
    "Portfolio website for HAMAD ALI SALEH HASSAN, Web Developer & IT Specialist specializing in PHP, MySQL, full-stack web deployment, Hostinger web hosting, SEO, IP/CCTV security camera setup, and OnyxPro ERP systems.",
  keywords: [
    "HAMAD ALI SALEH HASSAN",
    "Hamad Ali Saleh",
    "Web Developer",
    "IT Specialist",
    "PHP Developer",
    "MySQL",
    "Hostinger CPanel",
    "SEO Specialist",
    "MawahibSoft",
    "Network & CCTV Installation",
    "OnyxPro ERP",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}

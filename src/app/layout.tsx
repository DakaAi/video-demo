import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dakai Demo",
  description: "Dakai Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased `}
        style={{
          background:
            "linear-gradient(180deg, #0000008f 0%, #0000008f 100%), url(/images/bg.jpg)",
          backgroundSize: "100% 100%, 300% 300%",
        }}
      >
        {children}
      </body>
    </html>
  );
}

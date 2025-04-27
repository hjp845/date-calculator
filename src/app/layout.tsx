// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ 사이트 제목 + 구글/네이버 메타태그 포함
export const metadata: Metadata = {
  title: "날짜 계산기 사이트",
  description: "날짜 차이 계산, 특정한 날과 특정한 날까지의 날짜 차이 계산, 며칠 후 날짜 계산, 며칠 전 날짜 계산이 가능해요.",
  keywords: ["날짜 계산기", "날짜 계산기 사이트", "일수 계산기", "며칠 후 날짜", "며칠 전 날짜", "두 날짜 차이 계산"],
  icons: {
    icon: "/favicon-32x32.png",
  },
  other: {
    "google-site-verification": "EoQ4-Bd1Mx2zZ1IJnhObp7lqwqD6No62hzZUh8Cxtk0",
    "naver-site-verification": "8dc97fcdf04d84559cf0ee1cd50d4611c298301d"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

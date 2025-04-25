// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 폰트 설정
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ 사이트 제목 및 설명 + 구글 소유권 인증 메타태그
export const metadata: Metadata = {
  title: "날짜 계산기 사이트",
  description: "날짜 차이 계산, 특정한 날과 특정한 날까지의 날짜 차이 계산, 며칠 후 날짜 계산, 며칠 전 날짜 계산이 가능해요.",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-site-verification": "EoQ4-Bd1Mx2zZ1IJnhObp7lqwqD6No62hzZUh8Cxtk0",
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

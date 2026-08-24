import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zane-aigc-visual-designer.zane777694.chatgpt.site'),
  title: 'AIGC个人作品集 — ZANE / 武子尧',
  description: 'ZANE / 武子尧的 AIGC 个人作品集，涵盖 AI Visual Design、AI Series、Brand Visual 与 Creative Production。',
  openGraph: {
    title: 'AIGC个人作品集 — ZANE / 武子尧',
    description: 'AIGC PERSONAL PORTFOLIO',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'AIGC个人作品集 — ZANE / 武子尧' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIGC个人作品集 — ZANE / 武子尧',
    description: 'AIGC PERSONAL PORTFOLIO',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN"><body>{children}</body>
    </html>
  );
}

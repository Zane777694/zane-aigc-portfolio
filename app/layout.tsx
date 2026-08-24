import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zane-aigc-visual-designer.zane777694.chatgpt.site'),
  title: 'Benjamin Carter — Biological Age',
  description: 'A cinematic personal health dashboard for biological age, insights, activities, and action plans.',
  openGraph: {
    title: 'Biological Age',
    description: 'Your health, in motion.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Biological Age — Your health, in motion.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biological Age',
    description: 'Your health, in motion.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"><body>{children}</body>
    </html>
  );
}

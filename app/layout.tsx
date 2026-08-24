import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZANE — AIGC Visual Designer',
  description: 'Independent AIGC visual designer and creative artist exploring artificial intelligence, visual storytelling and digital culture.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"><head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
    </head><body>{children}</body>
    </html>
  );
}

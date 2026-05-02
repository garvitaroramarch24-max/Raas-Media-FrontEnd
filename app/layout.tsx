// 'use client';

import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Raas Media & Entertainment - Premium Production Company',
  description: 'Professional video production, content creation, and entertainment services. We support you till the last.',
  keywords: 'production, video, entertainment, content creation, film production',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [{ url: '/images/logo.jpeg', type: 'image/jpeg' }],
    apple: '/images/logo.jpeg',
  },
  openGraph: {
    title: 'Raas Media & Entertainment',
    description: 'Premium Production & Entertainment Services',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo.jpeg" />
      </head>
      <body className="bg-gradient-dark text-lightGray overflow-x-hidden">
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bozioportfolio.vercel.app'),
  title: 'Matheus Henrique Bozio — Senior Product Designer',
  description:
    'Senior Product Designer working across discovery, UX/UI, research and strategy — B2B SaaS, fintech, insurtech and complex digital products.',
  authors: [{ name: 'Matheus Henrique Bozio' }],
  openGraph: {
    title: 'Matheus Henrique Bozio — Senior Product Designer',
    description:
      'Product design, UX and interface craft for B2B, SaaS and complex digital products.',
    type: 'website',
  },
};

/** Applies the saved theme before first paint so there is no flash. */
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}

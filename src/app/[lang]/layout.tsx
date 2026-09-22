import type { Metadata } from 'next';
import type { Lang } from '@/data/site';

export function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    alternates: { languages: { 'pt-BR': '/pt', en: '/en' } },
    openGraph: { locale: lang === 'pt' ? 'pt_BR' : 'en_US' },
  };
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return children;
}

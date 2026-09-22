'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { t, type Lang } from '@/data/site';
import { LangToggle, ThemeToggle } from './Toggles';

export default function Header({ lang, onHome }: { lang: Lang; onHome: boolean }) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = [
    { key: 'work', href: onHome ? '#work' : `/${lang}/#work` },
    { key: 'about', href: onHome ? '#about' : `/${lang}/#about` },
    { key: 'contact', href: onHome ? '#contact' : `/${lang}/#contact` },
  ] as const;

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-5">
        <div
          className={`mx-auto flex h-[60px] max-w-[1840px] items-center justify-between gap-4 rounded-2xl px-4 transition-all duration-500 ease-soft sm:h-[71px] sm:px-8 ${
            stuck
              ? 'border border-line bg-[var(--header)] backdrop-blur-xl backdrop-saturate-150'
              : 'border border-transparent bg-transparent'
          }`}
        >
          <Link
            href={`/${lang}/`}
            className="text-[15px] font-bold tracking-[-0.01em] transition-colors duration-300 hover:text-accent sm:text-base"
          >
            {lang === 'pt' ? 'Matheus Henrique Bozio' : 'Matheus Henrique Bozio'}
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label={lang === 'pt' ? 'Principal' : 'Primary'}>
            {links.map((l) => (
              <a key={l.key} href={l.href} className="ln t-caption text-muted">
                {t.nav[l.key][lang]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LangToggle lang={lang} label={t.langLabel[lang]} />
            </div>
            <ThemeToggle label={t.theme[lang]} />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-8 w-8 place-items-center md:hidden"
            >
              <span className="relative block h-px w-5 bg-fg transition-colors">
                <span
                  className={`absolute left-0 block h-px w-5 bg-fg transition-transform duration-300 ease-soft ${
                    open ? 'translate-y-0 rotate-45' : '-translate-y-[6px]'
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-5 bg-fg transition-transform duration-300 ease-soft ${
                    open ? 'translate-y-0 -rotate-45' : 'translate-y-[6px]'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* mobile sheet */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-bg px-6 transition-opacity duration-300 ease-soft md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="flex flex-col">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-5 text-3xl font-medium tracking-[-0.035em]"
            >
              {t.nav[l.key][lang]}
            </a>
          ))}
        </nav>
        <div className="mt-8">
          <LangToggle lang={lang} label={t.langLabel[lang]} />
        </div>
      </div>
    </>
  );
}

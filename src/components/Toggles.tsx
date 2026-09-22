'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Lang } from '@/data/site';

/* ------------------------------------------------------------------ theme */

function setTheme(next: 'dark' | 'light') {
  document.documentElement.setAttribute('data-theme', next);
  try {
    localStorage.setItem('theme', next);
  } catch {
    /* private mode — the choice simply doesn't persist */
  }
}

export function ThemeToggle({ label }: { label: string }) {
  const [theme, setThemeState] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const current = (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark';
    setThemeState(current);
  }, []);

  const pick = (next: 'dark' | 'light') => {
    setTheme(next);
    setThemeState(next);
  };

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center gap-0 rounded-full border border-line bg-subtle p-[2px]"
    >
      {(['dark', 'light'] as const).map((mode) => {
        const on = theme === mode;
        return (
          <button
            key={mode}
            type="button"
            onClick={() => pick(mode)}
            aria-pressed={on}
            aria-label={mode === 'dark' ? 'Dark' : 'Light'}
            className={`grid h-[25px] w-[34px] place-items-center rounded-full transition-colors duration-300 ease-soft ${
              on ? 'bg-fg text-on-light' : 'text-muted hover:text-fg'
            }`}
          >
            {mode === 'dark' ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 2.4v2.2M12 19.4v2.2M2.4 12h2.2M19.4 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6" />
                </g>
              </svg>
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------- lang */

export function LangToggle({ lang, label }: { lang: Lang; label: string }) {
  const pathname = usePathname() || '/pt';
  const router = useRouter();

  const swap = (next: Lang) => {
    if (next === lang) return;
    const target = pathname.replace(/^\/(pt|en)/, `/${next}`);
    try {
      localStorage.setItem('lang', next);
    } catch {
      /* ignore */
    }
    router.push(target);
  };

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full border border-line bg-subtle p-[2px]"
    >
      {(['en', 'pt'] as const).map((code) => {
        const on = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => swap(code)}
            aria-pressed={on}
            lang={code}
            className={`h-[25px] w-[34px] rounded-full text-[11px] font-medium leading-none transition-colors duration-300 ease-soft ${
              on ? 'bg-fg text-on-light' : 'text-muted hover:text-fg'
            }`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

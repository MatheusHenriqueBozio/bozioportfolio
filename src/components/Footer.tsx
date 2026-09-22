'use client';

import { profile, social, t, type Lang } from '@/data/site';

export default function Footer({ lang }: { lang: Lang }) {
  const year = 2026;
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-caption-sm text-muted">
          © {year} {profile.name} · {profile.location[lang]} · {t.footer.rights[lang]}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={social.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="ln t-caption-sm text-muted"
          >
            Behance
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="ln t-caption-sm text-muted"
          >
            {t.footer.top[lang]}
          </button>
        </div>
      </div>
    </footer>
  );
}

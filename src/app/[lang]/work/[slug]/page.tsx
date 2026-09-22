import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import PillButton from '@/components/PillButton';
import { ContentBlock, InfoRow } from '@/components/Bits';
import { t, type Lang } from '@/data/site';
import { bySlug, nextProject, projects } from '@/data/projects';

export function generateStaticParams() {
  return (['pt', 'en'] as const).flatMap((lang) =>
    projects.map((p) => ({ lang, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const p = bySlug(slug);
  if (!p) return {};
  return {
    title: `${p.title} — Matheus Henrique Bozio`,
    description: p.subtitle[lang],
    openGraph: { title: p.title, description: p.subtitle[lang], images: [p.cover.src] },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ lang: Lang; slug: string }>;
}) {
  const { lang, slug } = await params;
  const p = bySlug(slug);
  if (!p) notFound();
  const next = nextProject(slug);

  const meta: Array<[string, string | undefined]> = [
    [t.case.meta.role[lang], p.meta.role[lang]],
    [t.case.meta.scope[lang], p.meta.scope[lang]],
    [t.case.meta.industry[lang], p.meta.industry[lang]],
    [t.case.meta.platform[lang], p.meta.platform[lang]],
    [t.case.meta.year[lang], p.meta.year?.[lang]],
  ];

  return (
    <>
      <Header lang={lang} onHome={false} />

      <main>
        {/* ----------------------------------------------------- case hero */}
        <section className="shell pt-[150px] sm:pt-[220px]">
          <Reveal className="flex flex-col gap-8">
            <Link href={`/${lang}/`} className="ln t-label-button w-fit text-muted">
              {t.case.back[lang]}
            </Link>
            <h1 className="t-display-hero">{p.title}</h1>
            <p className="t-body-intro max-w-[52ch] text-muted">{p.subtitle[lang]}</p>
          </Reveal>
        </section>

        {/* --------------------------------------------------------- cover */}
        <section className="shell pt-12 sm:pt-16">
          <Reveal>
            <figure className="overflow-hidden rounded-[var(--r-image)] bg-subtle">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.cover.src}
                alt={`${p.title} — cover`}
                width={p.cover.w}
                height={p.cover.h}
                className="w-full"
                style={{ aspectRatio: `${p.cover.w} / ${p.cover.h}` }}
              />
            </figure>
          </Reveal>
        </section>

        {/* ------------------------------------------------------ overview */}
        <section className="shell pt-16 sm:pt-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[424px_1fr] lg:gap-20">
            <Reveal className="flex flex-col justify-between gap-10">
              <div>
                <div className="border-t border-line">
                  {meta
                    .filter(([, v]) => Boolean(v))
                    .map(([label, value]) => (
                      <InfoRow key={label} label={label} value={value as string} />
                    ))}
                </div>
                <ul className="flex flex-wrap gap-[6px] pt-6">
                  {p.card.tags[lang].map((tag) => (
                    <li key={tag} className="t-tag rounded-full border border-line px-2 py-1 text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <PillButton href={p.links.behance[lang]}>{t.case.behance[lang]}</PillButton>
                {p.links.secondary && (
                  <PillButton href={p.links.secondary.url} variant="secondary">
                    {p.links.secondary.kind === 'ds' ? t.case.ds[lang] : t.case.proto[lang]}
                  </PillButton>
                )}
              </div>
            </Reveal>

            <Reveal className="flex flex-col gap-10" delay={80}>
              <ContentBlock label={t.case.story.about[lang]}>{p.story.about[lang]}</ContentBlock>
              <ContentBlock label={t.case.story.problem[lang]}>{p.story.problem[lang]}</ContentBlock>
              <ContentBlock label={t.case.story.solution[lang]}>{p.story.solution[lang]}</ContentBlock>
            </Reveal>
          </div>
        </section>

        {/* --------------------------------------------------------- blocks */}
        <div className="flex flex-col gap-16 pt-16 sm:gap-24 sm:pt-24">
          {p.blocks.map((b, i) => {
            if (b.type === 'text') {
              return (
                <section key={i} className="shell border-t border-line pt-16 sm:pt-24">
                  <Reveal className="mx-auto max-w-[720px]">
                    <ContentBlock label={b.label[lang]} size="intro">
                      {b.body[lang]}
                    </ContentBlock>
                  </Reveal>
                </section>
              );
            }
            if (b.type === 'pair') {
              return (
                <section key={i} className="shell">
                  <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                    {[b.a, b.b].map((src) => (
                      <figure
                        key={src}
                        className="overflow-hidden rounded-[var(--r-image)] bg-subtle"
                        style={{ aspectRatio: String(b.ratio) }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      </figure>
                    ))}
                  </Reveal>
                </section>
              );
            }
            return (
              <section key={i} className="shell">
                <Reveal>
                  <figure className="overflow-hidden rounded-[var(--r-image)] bg-subtle">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={b.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={b.w}
                      height={b.h}
                      className="w-full"
                      style={{ aspectRatio: `${b.w} / ${b.h}` }}
                    />
                  </figure>
                </Reveal>
              </section>
            );
          })}
        </div>

        {/* --------------------------------------------------- next project */}
        <section className="shell pt-24 sm:pt-32">
          <Reveal>
            <Link
              href={`/${lang}/work/${next.slug}/`}
              className="group flex flex-col gap-4 border-t border-line pb-24 pt-16"
            >
              <span className="t-caption text-muted">{t.case.next[lang]}</span>
              <span className="t-display-contact flex items-center gap-6 transition-colors duration-300 ease-soft group-hover:text-accent">
                {next.title}
                <span className="transition-transform duration-300 ease-soft group-hover:translate-x-2">→</span>
              </span>
            </Link>
          </Reveal>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}

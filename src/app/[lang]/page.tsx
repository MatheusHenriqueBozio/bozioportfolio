import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import ProjectCard from '@/components/home/ProjectCard';
import { CareerItem, InfoRow, SectionLabel } from '@/components/Bits';
import { cv, education, experience, profile, social, t, type Lang } from '@/data/site';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }];
}

export default async function Home({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;

  return (
    <>
      <Header lang={lang} onHome />

      <main>
        {/* ---------------------------------------------------------- hero */}
        <section className="shell pt-[140px] sm:pt-[190px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <Reveal className="flex flex-col gap-8">
              <h1 className="t-display-hero max-w-[12ch]">
                Matheus
                <br />
                Henrique
                <br />
                Bozio
              </h1>
              <p className="t-body-lead max-w-[54ch] text-muted">{t.hero.lead[lang]}</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={cv[lang]}
                  download
                  className="inline-flex items-center rounded-[var(--r-sm)] bg-fg px-6 py-[14px] t-label-button text-on-light transition-colors duration-300 ease-soft hover:bg-[var(--accent-btn)] hover:text-on-accent"
                >
                  {t.hero.cv[lang]}
                </a>
              </div>
            </Reveal>

            <Reveal className="order-first lg:order-last" delay={120}>
              <div className="overflow-hidden rounded-[var(--r-image)] bg-subtle lg:w-[420px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.photo}
                  alt={profile.name}
                  width={820}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------------------------- projects */}
        <section id="work" className="shell scroll-mt-28 pt-24 sm:pt-32">
          <Reveal className="mb-10">
            <SectionLabel>{t.sections.work[lang]}</SectionLabel>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <ProjectCard project={p} lang={lang} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------- experience */}
        <section className="shell pt-24 sm:pt-32">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr] lg:gap-16">
            <Reveal className="flex flex-col gap-5">
              <h2 className="t-heading-section">{t.sections.experience[lang]}</h2>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ln t-item-title w-fit font-medium"
              >
                LinkedIn ↗
              </a>
            </Reveal>
            <Reveal>
              <ul className="border-t border-line">
                {experience.map((e) => (
                  <CareerItem
                    key={e.company + e.role[lang]}
                    role={e.role[lang]}
                    company={e.company}
                    period={e.period[lang]}
                  />
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------- about */}
        <section id="about" className="shell scroll-mt-28 pt-24 sm:pt-32">
          <Reveal className="mb-10">
            <SectionLabel>{t.sections.about[lang]}</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_424px] lg:gap-16">
            <Reveal className="flex flex-col gap-6">
              <p className="t-body-large max-w-[58ch]">{t.about.p1[lang]}</p>
              <p className="t-body-large max-w-[58ch] text-muted">{t.about.p2[lang]}</p>
            </Reveal>
            <Reveal delay={80}>
              <div className="border-t border-line">
                {t.about.details.map((d) => (
                  <InfoRow key={d.label.en} label={d.label[lang]} value={d.value[lang]} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------------------------ education */}
        <section className="shell pt-24 sm:pt-32">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr] lg:gap-16">
            <Reveal>
              <h2 className="t-heading-section">{t.sections.education[lang]}</h2>
            </Reveal>
            <Reveal>
              <ul className="border-t border-line">
                {education.map((e) => (
                  <CareerItem
                    key={e.company + e.role[lang]}
                    role={e.role[lang]}
                    company={e.company}
                    period={e.period[lang]}
                  />
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* -------------------------------------------------------- contact */}
        <section id="contact" className="shell scroll-mt-28 py-24 sm:py-36">
          <Reveal className="mb-8">
            <SectionLabel>{t.sections.contact[lang]}</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="t-display-contact mb-10 max-w-[20ch]">
              {t.contact.headline[lang][0]}
              <br />
              {t.contact.headline[lang][1]}
            </h2>
          </Reveal>
          <Reveal className="flex flex-col gap-8">
            <a href={`mailto:${social.email}`} className="ln-static t-heading-link w-fit">
              {t.contact.cta[lang]}
            </a>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              <li>
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="ln t-caption text-muted">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={cv[lang]} download className="ln t-caption text-muted">
                  {t.contact.resume[lang]}
                </a>
              </li>
              <li>
                <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" className="ln t-caption text-muted">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={social.behance} target="_blank" rel="noopener noreferrer" className="ln t-caption text-muted">
                  Behance
                </a>
              </li>
            </ul>
          </Reveal>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}

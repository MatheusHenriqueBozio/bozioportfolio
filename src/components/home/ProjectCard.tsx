import Link from 'next/link';
import type { Lang } from '@/data/site';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  return (
    <Link
      href={`/${lang}/work/${project.slug}/`}
      className="group flex flex-col gap-3"
      aria-label={project.title}
    >
      <div
        className="relative overflow-hidden rounded-[var(--r-thumb)] bg-subtle"
        style={{ aspectRatio: '450 / 337' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.card.thumb}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-soft group-hover:scale-[1.035]"
        />
      </div>

      <ul className="flex flex-wrap gap-[6px] pt-1">
        {project.card.tags[lang].map((tag) => (
          <li
            key={tag}
            className="t-tag rounded-full border border-line px-2 py-1 text-muted transition-colors duration-300 ease-soft group-hover:border-muted"
          >
            {tag}
          </li>
        ))}
      </ul>

      <h3 className="t-heading-project transition-[font-weight,color] duration-300 ease-soft group-hover:font-medium">
        {project.title}
      </h3>

      <p className="t-body-default max-w-[46ch] text-muted transition-colors duration-300 ease-soft group-hover:text-fg">
        {project.card.blurb[lang]}
      </p>
    </Link>
  );
}

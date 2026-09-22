import type { ReactNode } from 'react';

/**
 * Pill Button — mirrors the Figma component.
 * primary   = filled with the foreground colour (Behance link)
 * secondary = outlined (design system / live prototype)
 */
export default function PillButton({
  href,
  children,
  variant = 'primary',
  external = true,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  external?: boolean;
}) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-[10px] t-label-pill whitespace-nowrap ' +
    'transition-[background-color,color,border-color,transform] duration-300 ease-soft active:scale-[0.98]';

  const styles =
    variant === 'primary'
      ? 'bg-fg text-on-light border border-fg hover:bg-[var(--accent-btn)] hover:border-[var(--accent-btn)] hover:text-on-accent'
      : 'border border-line text-fg hover:border-muted hover:bg-subtle';

  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

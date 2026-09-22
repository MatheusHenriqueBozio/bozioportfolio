import type { ReactNode } from 'react';

/** Small caption that labels a section, as in the Figma. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="t-caption text-muted">{children}</p>;
}

/** Label / value row with a bottom hairline — the Figma "Info Row". */
export function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-line py-3">
      <span className="t-caption shrink-0 text-muted">{label}</span>
      <span className="t-caption max-w-[62%] text-right text-fg">{value}</span>
    </div>
  );
}

/** Label + paragraph — the Figma "Content Block". */
export function ContentBlock({
  label,
  children,
  size = 'large',
}: {
  label: string;
  children: ReactNode;
  size?: 'large' | 'intro';
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="t-caption text-muted">{label}</p>
      <p className={`${size === 'intro' ? 't-body-intro' : 't-body-large'} text-fg`}>{children}</p>
    </div>
  );
}

/** Experience / education row. */
export function CareerItem({
  role,
  company,
  period,
}: {
  role: string;
  company: string;
  period: string;
}) {
  return (
    <li className="grid grid-cols-1 gap-1 border-b border-line py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
      <div className="flex flex-col gap-1">
        <span className="t-item-title text-fg">{role}</span>
        <span className="t-body-default text-muted">{company}</span>
      </div>
      <span className="t-body-default tabular-nums text-muted">{period}</span>
    </li>
  );
}

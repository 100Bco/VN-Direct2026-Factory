import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  eyebrow: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-border-subtle" />
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
            {eyebrow}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}

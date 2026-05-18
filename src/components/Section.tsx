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
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-px bg-brand-gold/40" />
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-brand-gold">
            {eyebrow}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}

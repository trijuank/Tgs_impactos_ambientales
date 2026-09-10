import type { ReactNode } from 'react';
import './SectionHeading.css';

interface SectionHeadingProps {
  km: string;
  label: string;
  title: string;
  children?: ReactNode;
}

export function SectionHeading({ km, label, title, children }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-heading-km">
        <span>{km}</span>
        {label}
      </p>
      <h2>{title}</h2>
      {children && <div className="section-heading-lead">{children}</div>}
    </div>
  );
}

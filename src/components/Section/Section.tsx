import type { ReactNode } from "react";
import "./Section.scss";

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

const Section = ({ children, id, className = "" }: SectionProps) => {
  return (
    <section className={`section section--${id} ${className}`} id={`${id}`}>
      <div className="section__container">{children}</div>
    </section>
  );
};

export default Section;

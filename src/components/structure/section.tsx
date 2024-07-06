// Section structure scss
import sections from "../../styles/scss/structure/section.module.scss";
import React from "react";
import { cn } from "../utils/cn";
/**
 * Structural Component
 *
 * Section / Container / Componenents / Blocks / Utils
 * returns Section structure
 */
interface SectionProps {
  classProp?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ classProp, children }) => {
  return <div className={`${cn(sections.default, classProp)}`}>{children}</div>;
};

export default Section;

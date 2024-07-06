import React, { ReactNode } from "react";
import Spacing from "../utils/spacing";
import styles from "../../styles/scss/structure/container.module.scss";
import { cn } from "../utils/cn";

interface ContainerProps {
  classProp?: string;
  spacing: string[];
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  classProp,
  spacing,
  children,
}) => {
  const _class = classProp ? classProp : "";

  return (
    <div className={`${cn(styles.readingWidth, classProp, Spacing(spacing))}`}>
      {children}
    </div>
  );
};

export default Container;

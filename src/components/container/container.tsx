import { cn } from '@/helpers/styles';

import styles from './container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  wide?: boolean;
}

export function Container({ children, wide }: ContainerProps) {
  return (
    <div className={cn(styles.container, wide && styles.wide)}>{children}</div>
  );
}

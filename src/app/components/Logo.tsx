'use client';
import { CalendarHeart } from "lucide-react";
import styles from './Logo.module.css';
import Link from 'next/link';

interface LogoProps {
  showIcon?: boolean;
  className?: string;
}

export function Logo({ showIcon = true, className = '' }: LogoProps) {
  return (
    <Link href="/" className={`${styles.logo} ${className}`}>
      {showIcon && (
        <div className={styles.logoIcon}>
          <CalendarHeart 
            strokeWidth={2.5}
            className={styles.calendarIcon}
          />
          <div className={styles.logoIconRing}></div>
        </div>
      )}
      <div className={styles.logoText}>
        <span className={styles.visaText}>visa</span>
        <span className={styles.slotText}>slot</span>
      </div>
    </Link>
  );
} 
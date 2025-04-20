'use client';

import { signOut, signIn, useSession } from 'next-auth/react';
import styles from './Navbar.module.css';
import Link from 'next/link';

export function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logoText}>
        <span className={styles.visaText}>visa</span>
        <span className={styles.slotText}>slot</span>
      </Link>
      
      <div className={styles.navLinks}>
        {session && (
          <Link href="/dashboard/checklist" className={styles.dashboardLink}>
            Dashboard
          </Link>
        )}
        {session ? (
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className={styles.signOutButton}
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={() => signIn('google', { callbackUrl: '/dashboard/checklist' })}
            className={styles.signOutButton}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
} 
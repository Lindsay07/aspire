'use client';
import Link from "next/link";
import { Fingerprint, Calendar1, MessageCircle, HelpCircle, CheckSquare } from "lucide-react";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Checklist",
      href: "/dashboard/checklist",
      icon: CheckSquare,
    },
    {
      label: "Credentials",
      href: "/dashboard/credentials",
      icon: Fingerprint,
    },
    {
      label: "Scheduling",
      href: "/dashboard/scheduling",
      icon: Calendar1,
    },
    {
      label: "Feedback",
      href: "/dashboard/feedback",
      icon: MessageCircle,
    },
    {
      label: "FAQ",
      href: "/faq",
      icon: HelpCircle,
    },
  ];

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${
                isActive ? styles.navLinkActive : styles.navLinkInactive
              }`}
            >
              <Icon size={20} className={styles.icon} />
              <span className={styles.label}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
} 
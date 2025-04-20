import { auth } from "~/server/auth";
import { redirect } from "next/navigation";
import { Sidebar } from "~/app/components/Sidebar";
import { Navbar } from "~/app/components/Navbar";
import styles from "./layout.module.css";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <div className={styles.navbarWrapper}>
          <Navbar />
        </div>
        <main className={styles.pageContent}>
          {children}
        </main>
      </div>
    </div>
  );
} 
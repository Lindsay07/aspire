"use client";

import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { useSession, signIn } from "next-auth/react";
import styles from "./faq.module.css";
import Link from "next/link";

export default function FAQ() {
  const { data: session } = useSession();

  return (
    <div>
      <Navbar />
      {session && <Sidebar />}
      <main
        className={`${styles.mainContent} ${session ? styles.mainWithSidebar : ""}`}
      >
        <div className={styles.contentWrapper}>
          <div className={styles.faqContainer}>
            <h1 className={styles.title}>Frequently Asked Questions</h1>
            <p className={styles.subtitle}>
              Find answers to common questions about our service and how it
              works.
            </p>

            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <h2>How does the appointment booking system work?</h2>
                <p>
                  Our system will automatically book appointments on your behalf
                  based on your provided credentials and scheduling preferences.
                  When an appointment slot becomes available matching your
                  preferences, we will book it for you automatically.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h2>Why is this service free?</h2>
                <p>
                  We are currently offering this service for free for early
                  users who take a chance on us and trust us. In return, we hope
                  you will find this service useful and spread the word among
                  your friends and family! We will be charging a fee for the
                  service once we formally launch in February 2025, so make hay
                  while the sun shines! ☀️ 😊
                </p>
              </div>

              <div className={styles.faqItem}>
                <h2>Is my credential information secure?</h2>
                <p>
                  Yes, absolutely. We use industry-standard encryption to
                  protect all user credentials. Your information is encrypted
                  before being stored in our database, and we never share your
                  data with third parties. We only use your credentials to
                  automatically book appointments on your behalf. You can update
                  your credentials or delete them at any time through the
                  dashboard. When deleted, your credentials are removed from our
                  system immediately.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h2>How do I set my scheduling preferences?</h2>
                <p>
                  In the dashboard, navigate to the Scheduling section. There,
                  you can select date ranges for when you&apos;d like your
                  appointment. You can add multiple date ranges to indicate all
                  your available periods. These preferences will be used when
                  the automatic booking system launches to ensure we only book
                  appointments during days that work for you.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h2>What happens if my credentials become invalid?</h2>
                <p>
                  If your credentials become invalid (for example, if you change
                  your password on the US visa website), we will be unable to
                  login on your behalf. The checklist and credentials page will
                  also reflect this status. You can then update your credentials
                  through our dashboard to ensure we are able to book
                  appointments on your behalf.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h2>Can I specify preferred appointment times or locations?</h2>
                <p>
                  Currently, you can specify your preferred date ranges for
                  appointments. We will attempt to book any available slot
                  within your specified date ranges. Note that the choice of
                  consulate location is immaterial as you can drop off your
                  documents at any location of your choice on the date and time
                  of your appointment, as per the US visa scheduling website.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h2>How will I know when an appointment is booked for me?</h2>
                <p>
                  We will send you an immediate email notification when we
                  successfully book an appointment for you. The notification
                  will include all the appointment details.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h2>
                  What if I book an appointment by myself on the US visa
                  website? Will you override my booking?
                </h2>
                <p>
                  No, we will not override your existing appointment. We will
                  only book appointments on your behalf when you have not booked
                  an appointment yourself. In fact, we explicitly stop looking
                  for appointments if the system shows that you have already
                  booked an appointment. It is safe to forget about VisaSlot if
                  you have already booked an appointment yourself, but you can
                  always come back to delete your credentials if you are extra
                  paranoid.
                </p>
              </div>

              {session && (
                <div className={styles.faqItem}>
                  <h2>Still have questions?</h2>
                  <p>
                    We&apos;re here to help! If you need any clarification or
                    have additional questions, please don&apos;t hesitate to
                    reach out.
                    <Link
                      href="/dashboard/feedback"
                      className={styles.feedbackButton}
                    >
                      Share Your Question →
                    </Link>
                  </p>
                </div>
              )}

              {!session && (
                <div className={styles.faqItem}>
                  <h2>Still have questions?</h2>
                  <p>
                    We&apos;re here to help! If you need any clarification or
                    have additional questions,
                    {session ? (
                      <Link
                        href="/dashboard/feedback"
                        className={styles.feedbackButton}
                      >
                        Share Your Question →
                      </Link>
                    ) : (
                      <button
                        onClick={() =>
                          signIn("google", {
                            callbackUrl: "/dashboard/feedback",
                          })
                        }
                        className={styles.feedbackButton}
                      >
                        Sign in to Ask a Question →
                      </button>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

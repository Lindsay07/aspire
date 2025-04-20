"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import styles from "./FeedbackPage.module.css";

export default function FeedbackPage() {
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  
  const submitFeedback = api.feedback.submit.useMutation({
    onSuccess: () => {
      setMessage("");
      setShowSuccess(true);
    },
    onError: (error) => {
      console.error("Failed to submit feedback:", error);
    },
  });

  return (
    <main className={styles.mainContent}>
      <div className={styles.contentWrapper}>
        <div className={styles.feedbackContainer}>
          <h1 className={styles.title}>👋 Share Your Feedback / Questions</h1>
          <p className={styles.subtitle}>
            We read each message individually and respond to every submission. Your input helps us improve the service for everyone! 🙇🏻‍♂️
          </p>

          {showSuccess && (
            <div className={styles.successMessage}>
              ✅ Thank you for your feedback! We&apos;ll review your message and get back to you if needed.
            </div>
          )}

          <div className={styles.formWrapper}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.textarea}
              rows={5}
              placeholder="Share your thoughts, suggestions, questions, or report issues..."
            />
            <button
              onClick={() => submitFeedback.mutate({ message })}
              disabled={!message.trim() || submitFeedback.isPending}
              className={styles.submitButton}
            >
              {submitFeedback.isPending ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 
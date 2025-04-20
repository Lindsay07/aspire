'use client';

import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import { ArrowRight, Sparkles, ImageIcon, Wand2, ShoppingCart } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/images/hero-interior.jpg"
            alt="Modern Interior Design"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Design Made Simple</span>
          <h1 className={styles.heroTitle}>
            Transform your space into something <span className={styles.accentText}>extraordinary</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Reimagine your room with personalized design recommendations. Get curated furniture suggestions that match your style and space.
          </p>
          <Link href="/signup" className={styles.ctaButton}>
            Start Your Design Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresContainer}>
          <span className={styles.sectionTag}>The Experience</span>
          <h2 className={styles.sectionTitle}>Design that works for you</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <ImageIcon />
              </div>
              <h3 className={styles.featureTitle}>Visualize Your Space</h3>
              <p className={styles.featureDescription}>
                Upload a photo of your room and see it transformed with different styles and arrangements.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Wand2 />
              </div>
              <h3 className={styles.featureTitle}>Personalized Style</h3>
              <p className={styles.featureDescription}>
                Discover your perfect aesthetic from modern to classic, minimalist to eclectic.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <ShoppingCart />
              </div>
              <h3 className={styles.featureTitle}>Curated Shopping</h3>
              <p className={styles.featureDescription}>
                Find and purchase the perfect pieces that bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className={styles.processContainer}>
          <span className={styles.sectionTag}>How It Works</span>
          <h2 className={styles.sectionTitle}>Your path to the perfect space</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Share Your Space</h3>
              <p className={styles.stepDescription}>Upload a photo of the room you want to transform</p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Choose Your Style</h3>
              <p className={styles.stepDescription}>Browse through curated design styles and find your perfect match</p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>See the Magic</h3>
              <p className={styles.stepDescription}>Watch your space transform with new designs and arrangements</p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Make It Real</h3>
              <p className={styles.stepDescription}>Shop recommended pieces and bring your design to life</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <span className={styles.sectionTag}>Get Started</span>
          <h2 className={styles.ctaTitle}>Ready to transform your space?</h2>
          <p className={styles.ctaDescription}>
            Join thousands of homeowners who've discovered their perfect design style and transformed their spaces.
          </p>
          <Link href="/signup" className={styles.ctaButton}>
            Begin Your Transformation
            <Sparkles className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}

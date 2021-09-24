import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/Header.module.scss';

const Header = () => (
  <header className={`df df-ai-c df-jc-sb container ${styles.header}`}>
    <Link href="/">
      <a href="/" className="df df-ai-c">
        <img src="/logoSmall.svg" alt="Vibe Check" />
        <h1 className="df df-ai-c">vibe check</h1>
      </a>
    </Link>
    <nav aria-label="Site Menu">
      <Link href="/about">
        <a href="/about" className={styles.about}>
          about
        </a>
      </Link>
    </nav>
  </header>
);

export default Header;

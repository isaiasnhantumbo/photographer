import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.icons}>
        <Image
          src="/icons/facebook.svg"
          width={25}
          height={25}
          alt="Logo do Facebook"
        />
        <Image
          src="/icons/instagram.svg"
          width={25}
          height={25}
          alt="Logo do Facebook"
        />
        <Image
          src="/icons/twitter.svg"
          width={25}
          height={25}
          alt="Logo do Facebook"
        />
        <Image
          src="/icons/pinterest.svg"
          width={25}
          height={25}
          alt="Logo do Facebook"
        />
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">About</a>
          </li>
          <li>
            <p>Brenda Masiba</p>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

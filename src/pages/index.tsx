/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Brenda Masiba | Home</title>
      </Head>
      <Header />

      <main className={styles.main} id="home">
        <img src="/images/personal-pic.png" alt="Brenda Masiba photo" />

        <div className={styles.heroText}>
          <h2>About Me</h2>
          <p>
            I picked up a camera one day and never put it down. I love to save
            moments in photography. Keep them around for generations to come
          </p>
          <Button title="Let's chat" />
        </div>
      </main>

      <div className={styles.services} id="services">
        <Card
          imgSrc="/images/photoshot.png"
          imgAlt="Photoshop"
          serviceTitle="Photoshop"
          servicePrice="100"
          serviceDescription="A pamper photo day for yourself"
        />
        <Card
          imgSrc="/images/nature.png"
          imgAlt="Nature"
          serviceTitle="Nature"
          servicePrice="200"
          serviceDescription="That sunset/sunrise on a safari"
        />
        <Card
          imgSrc="/images/moments.png"
          imgAlt="Moments"
          serviceTitle="Moments"
          servicePrice="100"
          serviceDescription="Save every moment in a photo"
        />
      </div>
      <Form />
      <div className={styles.socialProve}>
        <h2>Clients feedback</h2>
        <p>
          Amazing work ethic and great quality of work! Work was delivered
          earlier than the set time and saying the photos beat my expectation is
          an understatement because My God!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        </p>
      </div>

      <div className={styles.gallery}>
        <h2>Follow me @BrendaMasiba</h2>
        <div className={styles.photos}>
          <img src="/images/personal-pic.png" alt="Brenda Masiba photo" />
          <img src="/images/florest.png" alt="Florest photo" />
          <img src="/images/woman-in-mouth.png" alt="Brenda Masiba photo" />
          <img src="/images/glasses-woman.png" alt="Brenda Masiba photo" />
        </div>
      </div>

      <footer className={styles.footer}>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#home">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
            <li>
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
            </li>
          </ul>
        </nav>
        <p>COPYRIGHT @ 2021 | BRENDA MASIBA</p>
      </footer>
    </>
  );
}

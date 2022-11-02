'use client';

import { Frame } from '../components';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

export default function Page(props: any) {
  return (
    <div className={styles.container}>
      <Frame title="NextJS Starter">
        <main className={styles.main}>
          <Fade direction="down">
            <Link href="/hooks">Hooks</Link>
            <Link href="/fetch">Fetch demo</Link>
            <Link href="/form">Form demo</Link>
          </Fade>

          <p>
            Public environment variable: {process.env.NEXT_PUBLIC_ENV_VARIABLE}
          </p>
        </main>
      </Frame>
    </div>
  );
}

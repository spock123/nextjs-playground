import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import { Fade } from 'react-awesome-reveal';
import { Frame } from '../components';

export default function Home(props: any) {
  //const { locale, locales, defaultLocale } = useRouter();

  const { locale, locales, defaultLocale } = props.context;
  const { t, lang } = useTranslation('common');

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Frame title="NextJS Starter">
        <main className={styles.main}>
          <Fade direction="down">
            <h1 className="text-3xl font-bold  my-6">{t('common:hello')}</h1>

            <p>Locale: {locale}</p>

            {locales.map((lang: string, idx: number) => (
              <Link href="/" key={idx} locale={lang}>
                {lang}
              </Link>
            ))}

            <Link href="/hooks">Hooks</Link>
          </Fade>

          <p>
            Public environment variable: {process.env.NEXT_PUBLIC_ENV_VARIABLE}
          </p>
        </main>
      </Frame>
    </div>
  );
}

export async function getStaticProps(context: any) {
  return {
    props: {
      context
    }
  };
}

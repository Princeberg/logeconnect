// pages/_app.js
import '@/styles/globals.css';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Page prête → désactive le loader
    setLoading(false);

    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Loge Connect - Immobilier au Congo-Brazzaville</title>
        <meta
          name="description"
          content="Achetez, vendez ou louez vos propriétés avec Loge Connect au Congo-Brazzaville"
        />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {loading ? (
        <div style={styles.loaderContainer}>
          <Player
            autoplay
            loop
            src="/lotties/loading.json" 
            style={{ height: 200, width: 200 }}
          />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;

const styles = {
  loaderContainer: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white', 
  },
};

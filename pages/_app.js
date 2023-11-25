import '../styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;

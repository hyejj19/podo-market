import '../styles/globals.css';

function MyApp({Component, pageProps}) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

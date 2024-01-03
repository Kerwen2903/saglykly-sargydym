import "../styles/globals.css";
// bg-gradient-to-br from-green-300 to-green-500
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-green-100 min-h-screen p-0 m-0 border-box overflow-y-hidden">
      <Component {...pageProps}/>;

    </div>
  )
}

export default MyApp;

import GlobalsStyles from "../components/globals-styles"
function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalsStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

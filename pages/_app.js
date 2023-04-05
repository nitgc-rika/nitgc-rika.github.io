import '../styles/globals.css'
import '../styles/header.css'
import '../styles/footer.css'
import '../styles/nav.css'

import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

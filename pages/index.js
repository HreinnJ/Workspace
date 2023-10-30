import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Under construction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Website under construction." />
        <p className="description">
          This website is currently under construction, updates will come up soon. 
        </p>
      </main>

      <Footer />
    </div>
  )
}

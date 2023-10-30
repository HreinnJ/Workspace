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
<figure>
	<div class="case-study__overlay">


	<video width="auto" height="auto" controls autoplay="1" loop muted>
	<source src="/public/0001-0450.webm" type="video/webm" />
	</video>
      <Footer />
    </div>
  )
}

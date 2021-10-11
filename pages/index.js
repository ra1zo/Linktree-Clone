import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samuel_Britto</title>
        <meta name="description" content="Personal LinkTree" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>

        <img className="image" src="https://media-exp1.licdn.com/dms/image/C4E03AQGidUb-2AD1cg/profile-displayphoto-shrink_800_800/0/1628780827676?e=1639612800&v=beta&t=II9ge6YUWcy5mRBXPH9G7SKsWEjGix8lP9B0iFT4TWw" />
        <h1 className="description">Samuel Britto</h1>
        <p className="description">Aspiring Web Developer | SDE | Craving for Tech | Esport Athelete </p>

        <div className="grid">
          
          <a href="https://rebrand.ly/samuel_britto_linkedin/" target="_blank" className="card">
            <h3>Linkedin</h3>
          </a>

          <a href="https://rebrand.ly/samuel_britto_github/" target="_blank" className="card">
            <h3>Github</h3>
          </a>

          <a href="https://rebrand.ly/Useful-Inspiration-tools"  target="_blank" className="card">
            <h3>Useful Design Inspiration Tools</h3>
          </a>

          <a href="https://rebrand.ly/FreeGoogleCloud/" target="_blank" className="card">
            <h3>Google Cloud free on Coursera for One month (Nov 6,2021)</h3>
          </a>
          
          <a href="https://rebrand.ly/samuel_britto_resume" target="_blank" className="card">
            <h3>Portfolio(Working)/Resume Download</h3>
          </a>

        </div>

      </main>

    </div>
  )
}

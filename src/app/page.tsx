import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hello and welcome. Your one stop shop for all your software solutions.
        </p>
      </div>

      <div className={styles.center}>
        <h1>
          ActiveBiz Information Systems Limited UK
        </h1>
      </div>

      <div className={styles.grid}>
      </div>
    </main>
  )
}

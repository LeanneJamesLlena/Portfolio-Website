import styles from './Home.module.css'

function Home() {

  return (
    
    <section className={styles.homeContainer}>
      <div className={styles.textSection}>
        <h3>Hello, It's Me</h3>
        <h1>Leanne James Llena</h1>
        <h2>Software Engineering Student @ LUT University</h2>
        <p>
          Passionate about learning, creating, and bringing ideas to life through code.
        </p>
        <a href="/cv/LeanneJamesLlena_CV.pdf" target="_blank" rel="noopener noreferrer">
          <button className={styles.cvButton}>Check My CV</button>
        </a>
      </div>

      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <img src="/professionalPhotoOfMe.jpg" alt="Leanne James Llena" />
        </div>
      </div>
    </section>
  )
}

export default Home;

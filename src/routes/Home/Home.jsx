import s from './Home.module.css'

/**
 * Home Component
 * Landing section, introduction and role.
 * Includes a text block (intro + call-to-action) and
 * profile image
 */

function Home() {

  return (
    
    <section className={s.homeContainer}>
      <div className={s.textSection}>
        <h3>Hello, It's Me</h3>
        <h1>Leanne James Llena</h1>
        <h2>Software Engineering Student @ LUT University</h2>
        <p>
          Passionate about learning, creating, and bringing ideas to life through code.
        </p>
        <a href="/cv/LeanneJamesLlena_CV.pdf" target="_blank" rel="noopener noreferrer">
          <button className={s.cvButton}>Check My CV</button>
        </a>
      </div>

      <div className={s.imageSection}>
        <div className={s.imageWrapper}>
          <img src="/professionalPhotoOfMe.jpg" alt="Leanne James Llena" />
        </div>
      </div>
    </section>
  )
}

export default Home;

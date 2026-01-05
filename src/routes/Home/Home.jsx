import { Link } from 'react-router-dom'
import s from './Home.module.css'

/**
 * Home Component
 * Landing section, introduction and role.
 * Includes a text block (intro + call-to-action) and
 * profilee image
 */

function Home() {

  return (
    
    <section className={s.homeContainer}>
      <div className={s.textSection}>
        <h3>Hello, It's Me</h3>
        <h1>Leanne James Llena</h1>
        <h2>Full-Stack Software Engineer | Student @ LUT University</h2>
        <p>
          Passionate about learning, creating, and bringing ideas to life through code.
        </p>
        <div className={s.buttonContainer}>
          <a href="/cv/Resume_LeanneJamesLlena_2026.pdf" target="_blank" rel="noopener noreferrer">
            <button className={s.cvButton}>Check My CV</button>
          </a>
          <Link to="/projects">
            <button className={s.cvButton}>View My Projects</button>
          </Link>
        </div>
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

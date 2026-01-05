import s from "./About.module.css";

/**
 * Skill categories grouped by area.
 * Each skill includes a short 'hint' shown as a tooltip or for accessibility context.
 */
const skills = {
  Frontend: [
    { label: "React", hint: "TanStack Query, Zustand, Router, custom hooks" },
    { label: "TypeScript", hint: "Strict typing, Zod validation, type-safe components" },
    { label: "Tailwind CSS", hint: "Utility-first styling, responsive design" },
    { label: "JavaScript", hint: "ES6+, async/await, modules" },
  ],
  Backend: [
    { label: "Node.js", hint: "RESTful APIs, middleware, async patterns" },
    { label: "TypeScript", hint: "Type-safe APIs, Zod schemas, interfaces" },
    { label: "Express", hint: "Routing, error handling, security middlewares, Express Validators" },
    { label: "MongoDB", hint: "Mongoose, aggregation pipelines, indexing" },
    { label: "PostgreSQL", hint: "SQL basics, querying" },
    { label: "SQLite", hint: "Lightweight database, embedded systems, local storage" },
  ],
  DevOps: [
    { label: "Docker", hint: "Compose, multi-container apps, dev environments" },
    { label: "Git & GitHub", hint: "Branching, PRs, collaboration workflows" },
    { label: "CI/CD", hint: "GitHub Actions, automated testing & deployment" },
    { label: "Testing", hint: "Vitest, unit & integration tests" },
    { label: "Azure", hint: "Cloud services, app deployment, resource management" },
  ],
  Languages: [
    { label: "Python", hint: "IoT data processing, Matplotlib, scripting" },
    { label: "Java", hint: "OOP fundamentals, university coursework" },
    { label: "C", hint: "Memory management, low-level programming" },
  ],
};
/**
 * About Component
 * Displays a personal introduction, skills overview, education timeline,
 * and interests beyond coding.
 */
function About() {
  return (
    <section className={`container ${s.wrap}`}>
      {/* Intro */}
      <header className={s.head}>
        <h1 className={s.title}>
          About <span className={s.accent}>Me</span>
        </h1>
        <p className={s.lead}>
          I've always been curious about technology — even as a kid, I liked
          figuring out how things worked. That curiosity slowly turned into a
          love for building things and solving problems through code. Now I'm a
          Software Engineering student at LUT University, still
          learning every day and exploring new technologies along the way.
        </p>
      </header>

      {/* Divider */}
      <div className={s.sectionRule} />

      {/* Skills */}
      <section className={s.section}>
        <div className={s.sectionHead}>
          <h2 className={s.sectionTitleGlow}>Skills</h2>
        </div>

        <div className={s.skillCols}>
          {Object.entries(skills).map(([group, items]) => (
            <div className={s.skillCol} key={group}>
              <h3 className={s.groupTitle}>{group}</h3>
              <ul className={s.skillList} role="list">
                {items.map((it) => (
                  <li key={it.label}>
                    <span className={s.chip} data-hint={it.hint}>
                      {it.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className={s.sectionRule} />

      {/* Education */}
      <section className={s.section} aria-labelledby="edu-heading">
        <div className={s.sectionHead}>
          <h2 id="edu-heading" className={s.sectionTitleGlow}>Education</h2>
        </div>

        <ol className={s.timeline}>
          <li className={s.eduItem}>
            <span className={s.dot} aria-hidden />
            <div className={s.eduBlock}>
              <div className={s.eduHeading}>
                Bachelor of Science (BSc), Software Engineering
              </div>
              <div className={s.eduMeta}>LUT University • 2023 – Present</div>
              <p className={s.eduFocus}>
                Focusing on full-stack web development, software architecture, and quality assurance
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* Divider */}
      <div className={s.sectionRule} />

      {/* Outside of code / interests */}
      <section className={s.section} aria-labelledby="life-heading">
        <div className={s.sectionHead}>
          <h2 id="life-heading" className={s.sectionTitleGlow}>Beyond Code</h2>
        </div>

        <div className={s.lifeCard}>
          <div className={s.lifeAccent} aria-hidden />
          <p className={s.lifeText}>
            Outside of code, I enjoy staying active through sports and the gym,
            and I love exploring new places whenever I can.
          </p>

          {/* little interest chips  */}
          <ul className={s.lifeChips} role="list">
            <li className={s.lifeChip}>🏋️ Gym</li>
            <li className={s.lifeChip}>⚽ Sports</li>
            <li className={s.lifeChip}>🗺️ Travel</li>
            <li className={s.lifeChip}>📷 Photos</li>
          </ul>
        </div>
      </section>



    </section>
  );
}

export default About;
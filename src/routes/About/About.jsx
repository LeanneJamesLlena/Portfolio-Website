import s from "./About.module.css";


const skills = {
  Frontend: [
    { label: "React", hint: "(hooks, routing, dynamic component-based UIs)" },
    { label: "JavaScript", hint: "ES6+, async/await, modules" },
    { label: "HTML", hint: "Semantic, accessible HTML" },
    { label: "CSS", hint: "Responsive Designs, CSS Modules" },
  ],
  Backend: [
    { label: "Node.js", hint: "Express APIs, auth" },
    { label: "Express", hint: "REST, middleware" },
    { label: "MongoDB", hint: "Mongoose, schema design" },
    { label: "PostgreSQL", hint: "SQL basics, querying" },
  ],
  Other: [
    { label: "Git", hint: "Feature branches, PRs" },
    { label: "Python", hint: "Scripting, basics" },
    { label: "C", hint: "Foundations, memory basics" },
  ],
};

function About() {
  return (
    <section className={`container ${s.wrap}`}>
      {/* Intro */}
      <header className={s.head}>
        <h1 className={s.title}>
          About <span className={s.accent}>Me</span>
        </h1>
        <p className={s.lead}>
          I’ve always been curious about technology — even as a kid, I liked
          figuring out how things worked. That curiosity slowly turned into a
          love for building things and solving problems through code. Now I’m a
          third-year Software Engineering student at LUT University, still
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
                Tietotekniikan kandidaatti (BSc, Software Engineering)
              </div>
              <div className={s.eduMeta}>LUT University • 2023 – ongoing</div>
              <p className={s.eduFocus}>
                Currently focusing on full-stack web development and QA testing.
              </p>
            </div>
          </li>

          <li className={s.eduItem}>
            <span className={s.dot} aria-hidden />
            <div className={s.eduBlock}>
              <div className={s.eduHeading}>Helsingin Media Lukio</div>
              <div className={s.eduMeta}>2019 – 2022</div>
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

          {/* optional little interest chips — delete if you want only the sentence */}
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
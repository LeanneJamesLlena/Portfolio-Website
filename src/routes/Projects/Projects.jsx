import s from "./Projects.module.css";

/**
 * Projects Component
 * Showcases featured and other projects with detailed information,
 * tech stacks, and links to live demos and repositories.
 */
function Projects() {
  return (
    <section className={`container ${s.wrap}`}>
      {/* Hero/Intro Section */}
      <header className={s.head}>
        <h1 className={s.title}>
          My <span className={s.accent}>Projects</span>
        </h1>
        <p className={s.lead}>
          A collection of full-stack applications I've built, from food waste reduction to nutrition tracking. 
          Each project demonstrates modern development practices including TypeScript, Docker, CI/CD, and comprehensive testing.
        </p>
      </header>

      {/* Divider */}
      <div className={s.sectionRule} />

      {/* Featured Project - REF */}
      <article className={s.featuredProject}>
        <a 
          href="/projectsImages/REF/RecipePage1.png" 
          target="_blank" 
          rel="noopener noreferrer"
          className={s.projectImageLink}
          aria-label="View full-size REF recipe page screenshot"
        >
          <div className={s.projectImage}>
            <img 
              src="/projectsImages/REF/RecipePage1.png" 
              alt="REF app dashboard showing recipe suggestions based on inventory" 
            />
            <div className={s.clickIndicator}>
              <span className={s.clickText}>Click to explore</span>
            </div>
          </div>
        </a>

        <div className={s.projectContent}>
          <h2 className={s.projectTitle}>REF – Smart Fridge & Pantry App</h2>
          <p className={s.tagline}>
            Reduce food waste through intelligent inventory tracking and recipe suggestions
          </p>

          <div className={s.techStack}>
            <span className={s.techPill}>TypeScript</span>
            <span className={s.techPill}>React</span>
            <span className={s.techPill}>Node.js</span>
            <span className={s.techPill}>Express</span>
            <span className={s.techPill}>TailwindCSS</span>
            <span className={s.techPill}>MongoDB</span>
            <span className={s.techPill}>Vitest</span>
            <span className={s.techPill}>Docker</span>
            <span className={s.techPill}>CI/CD</span>
          </div>

          <div className={s.highlights}>
            <h3 className={s.highlightsTitle}>Key Features</h3>
            <ul className={s.highlightsList}>
              <li>
                <strong>Normalized Ingredient Matching:</strong> Engineered search system accurately matching 550+ recipes regardless of naming variations
              </li>
              <li>
                <strong>Complete Inventory Management:</strong> Track items across fridge, freezer, and pantry with expiration monitoring and automated grocery list generation from missing recipe ingredients
              </li>
              <li>
                <strong>Secure Authentication:</strong> JWT with refresh token rotation, rate limiting, Helmet security, and MongoDB injection protection
              </li>
              <li>
                <strong>Containerized Deployment:</strong> Docker Compose multi-service architecture with automated CI/CD via GitHub Actions
              </li>
              <li>
                <strong>Comprehensive Testing:</strong> 85% coverage using Vitest with unit, integration, and API endpoint tests
              </li>
            </ul>
          </div>

          <div className={s.projectActions}>
            <a 
              href="https://ref-khaki.vercel.app/" 
              className={s.btnPrimary}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View REF live demo"
            >
              View Live Demo
            </a>
            <a 
              href="https://github.com/LeanneJamesLlena/REF" 
              className={s.btnSecondary}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View REF source code on GitHub"
            >
              View Code
            </a>
          </div>
        </div>

        {/* Screenshot Gallery - Showcasing Clean, Modern UI */}
        <div className={s.screenshotGallery}>
          <h3 className={s.galleryTitle}>Clean & Modern Interface</h3>
          <p className={s.gallerySubtitle}>User-friendly design with intuitive navigation and seamless user experience</p>
          <div className={s.galleryGrid}>
            <a 
              href="/projectsImages/REF/RecipeDetails1.png" 
              target="_blank" 
              rel="noopener noreferrer"
              className={s.galleryItem}
              aria-label="View full-size REF recipe details screenshot"
            >
              <img 
                src="/projectsImages/REF/RecipeDetails1.png" 
                alt="REF recipe details page showing ingredient matching and instructions" 
              />
              <span className={s.galleryLabel}>Recipe Details</span>
            </a>
            <a 
              href="/projectsImages/REF/RecipeDetails2.png" 
              target="_blank" 
              rel="noopener noreferrer"
              className={s.galleryItem}
              aria-label="View full-size REF recipe instructions screenshot"
            >
              <img 
                src="/projectsImages/REF/RecipeDetails2.png" 
                alt="REF recipe instructions page with step-by-step cooking guide" 
              />
              <span className={s.galleryLabel}>Step-by-Step Instructions</span>
            </a>
            <a 
              href="/projectsImages/REF/GroceryListPage.png" 
              target="_blank" 
              rel="noopener noreferrer"
              className={s.galleryItem}
              aria-label="View full-size REF grocery list screenshot"
            >
              <img 
                src="/projectsImages/REF/GroceryListPage.png" 
                alt="REF grocery list page with organized shopping checklist" 
              />
              <span className={s.galleryLabel}>Smart Grocery List</span>
            </a>
            <a 
              href="/projectsImages/REF/ExpringPage.png" 
              target="_blank" 
              rel="noopener noreferrer"
              className={s.galleryItem}
              aria-label="View full-size REF expiring items screenshot"
            >
              <img 
                src="/projectsImages/REF/ExpringPage.png" 
                alt="REF expiring items page showing expired and expiring soon items" 
              />
              <span className={s.galleryLabel}>Expiring Items Tracker</span>
            </a>
          </div>
        </div>
      </article>

      {/* Divider */}
      <div className={s.sectionRule} />

      {/* Other Projects Section */}
      <section className={s.section} aria-labelledby="other-projects-heading">
        <div className={s.sectionHead}>
          <h2 id="other-projects-heading" className={s.sectionTitleGlow}>Other Projects</h2>
        </div>

        <div className={s.projectGrid}>
          {/* NutriTrack Card */}
          <article className={s.projectCard}>
            <div className={s.cardImage}>
              <img 
                src="/projects/nutritrack.png" 
                alt="NutriTrack calorie tracking dashboard" 
              />
            </div>
            <div className={s.cardContent}>
              <h3 className={s.cardTitle}>NutriTrack – Calorie Tracking App</h3>
              <p className={s.cardDescription}>
                Full-stack nutrition tracker with USDA API integration, meal logging, and interactive data visualizations 
                for monitoring daily calorie intake and nutritional goals.
              </p>
              <div className={s.cardTech}>
                <span className={s.cardTechPill}>React</span>
                <span className={s.cardTechPill}>Node.js</span>
                <span className={s.cardTechPill}>MongoDB</span>
                <span className={s.cardTechPill}>JWT Auth</span>
              </div>
              <div className={s.cardActions}>
                <a 
                  href="#" 
                  className={s.cardBtn}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View NutriTrack live demo"
                >
                  Live Demo
                </a>
                <a 
                  href="#" 
                  className={s.cardBtn}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View NutriTrack source code on GitHub"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>

          {/* Cleaning Business Website Card */}
          <article className={s.projectCard}>
            <div className={s.cardImage}>
              <img 
                src="/projects/cleaning-site.png" 
                alt="Small business website homepage" 
              />
            </div>
            <div className={s.cardContent}>
              <h3 className={s.cardTitle}>Small Business Website</h3>
              <p className={s.cardDescription}>
                Responsive website for local cleaning service with contact forms, service showcase, mobile-first design, 
                and optimized performance achieving 95+ Lighthouse score.
              </p>
              <div className={s.cardTech}>
                <span className={s.cardTechPill}>React</span>
                <span className={s.cardTechPill}>Tailwind CSS</span>
                <span className={s.cardTechPill}>Netlify</span>
              </div>
              <div className={s.cardActions}>
                <a 
                  href="#" 
                  className={s.cardBtn}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View cleaning business website live site"
                >
                  Live Site
                </a>
                <a 
                  href="#" 
                  className={s.cardBtn}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View cleaning business website source code on GitHub"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Divider */}
      <div className={s.sectionRule} />

      {/* GitHub CTA Section */}
      <section className={s.githubSection}>
        <p className={s.githubText}>
          Want to see more? Check out my GitHub for additional projects and contributions.
        </p>
        <a 
          href="https://github.com/LeanneJamesLlena" 
          className={s.githubBtn}
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="View Leanne James Llena's GitHub profile"
        >
          View GitHub Profile
        </a>
      </section>
    </section>
  );
}

export default Projects;

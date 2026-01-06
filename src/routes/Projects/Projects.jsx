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
        Full-stack applications showcasing modern development practices. 
        Projects range from food waste reduction with TypeScript, Docker, Comprehensive Testing, and CI/CD to nutrition tracking and small business solutions
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
            <span className={s.techPill}>Vercel</span>
            <span className={s.techPill}>Render</span>
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
          {/* Caloriq Card */}
          <article className={s.projectCard}>
            <a 
              href="/projectsImages/calorie-tracker/Diary-view1(withData).png" 
              target="_blank" 
              rel="noopener noreferrer"
              className={s.cardImageLink}
              aria-label="View full-size Caloriq diary view screenshot"
            >
              <div className={s.cardImage}>
                <img 
                  src="/projectsImages/calorie-tracker/Diary-view1(withData).png" 
                  alt="Caloriq calorie tracking diary view with daily intake" 
                />
              </div>
            </a>
            <div className={s.cardContent}>
              <h3 className={s.cardTitle}>Caloriq – Calorie Tracking App</h3>
              <p className={s.cardDescription}>
                Full-stack nutrition tracker with USDA API integration, meal logging, and interactive data visualizations 
                for monitoring daily calorie intake and nutritional goals.
              </p>
              <div className={s.cardTech}>
                <span className={s.cardTechPill}>React</span>
                <span className={s.cardTechPill}>JavaScript</span>
                <span className={s.cardTechPill}>Node.js</span>
                <span className={s.cardTechPill}>Express</span>
                <span className={s.cardTechPill}>MongoDB</span>
                <span className={s.cardTechPill}>CSS Modules</span>
                <span className={s.cardTechPill}>Vercel</span>
                <span className={s.cardTechPill}>Render</span>
              </div>
              <div className={s.cardActions}>
                <a 
                  href="https://calorie-tracker-frontend-ecru.vercel.app/" 
                  className={s.btnPrimary}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View Caloriq live demo"
                >
                  View Live Demo
                </a>
                <a 
                  href="https://github.com/LeanneJamesLlena/calorie-tracker" 
                  className={s.btnSecondary}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View Caloriq source code on GitHub"
                >
                  View Code
                </a>
              </div>
            </div>
          </article>

          {/* Cleaning Business Website Card */}
          <article className={s.projectCard}>
            <a 
              href="/projectsImages/Amara/Amara_FrontpageView.png" 
              target="_blank" 
              rel="noopener noreferrer"
              className={s.cardImageLink}
              aria-label="View full-size Amara business website screenshot"
            >
              <div className={s.cardImage}>
                <img 
                  src="/projectsImages/Amara/Amara_FrontpageView.png" 
                  alt="Small business website homepage" 
                />
              </div>
            </a>
            <div className={s.cardContent}>
              <h3 className={s.cardTitle}>Cleaning Service Business Website</h3>
              <p className={s.cardDescription}>
              Responsive business website for a local cleaning service, featuring 
              service showcases, contact form, and mobile-optimized design to 
              drive customer inquiries.
              </p>
              <div className={s.cardTech}>
                <span className={s.cardTechPill}>JavaScript</span>
                <span className={s.cardTechPill}>HTML</span>
                <span className={s.cardTechPill}>CSS</span>
                <span className={s.cardTechPill}>Vercel</span>
                <span className={s.cardTechPill}>EmailJS</span>
              </div>
              <div className={s.cardActions}>
                <a 
                  href="https://amarasiivous.com" 
                  className={s.btnPrimary}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View cleaning business website live site"
                >
                  View Live Site
                </a>
                <a 
                  href="https://github.com/LeanneJamesLlena/Amara-website" 
                  className={s.btnSecondary}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View cleaning business website source code on GitHub"
                >
                  View Code
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
        Want to see the code? Check out my GitHub to explore the implementation details and architecture behind these projects
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

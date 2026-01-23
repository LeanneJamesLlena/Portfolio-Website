import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import s from "./Contact.module.css";
/**
 * Contact Component
 * Renders a two-column contact section:
 * - Left side: personal contact info, email, and links
 * - Right side: validated contact form using EmailJS
 */

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const validateForm = (form) => {
    const firstName = form.first_name.value.trim();
    const lastName = form.last_name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName || !lastName || !email || !message) {
      return "Please fill in all required fields.";
    }
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      return "Name fields should only contain letters.";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    return null; 
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    const form = formRef.current;
    const validationError = validateForm(form);

    if (validationError) {
      setStatus({ type: "err", msg: validationError });
      return; 
    }

    setLoading(true);
    try {
      const SERVICE_ID = "service_1233x6i";
      const TEMPLATE_ID = "template_xlop9rw";
      const PUBLIC_KEY = "ya0eBRQpfA7pF9nUh";

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);

      setStatus({ type: "ok", msg: "Thanks! Your message has been sent." });
      form.reset();
    } catch (err) {
      setStatus({
        type: "err",
        msg: "Oops—something went wrong. Please try again or email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`container ${s.wrap}`}>
      {/* LEFT: intro + contact info */}
      <aside className={s.infoCard}>
        <h1 className={s.title}>
          Let's <span className={s.accent}>Connect</span>
        </h1>
        <p className={s.sub}>I’d love to hear from you.</p>
        <p className={s.lead}>
          Whether you're a recruiter, a fellow developer, or someone with a cool idea.
          Feel free to reach out via the form or email me directly.
        </p>

        <div className={s.meta}>
          <a href="mailto:leannellena@yahoo.com" className={s.mail}>
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path
                fill="currentColor"
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4l-8 5L4 8V6l8 5l8-5z"
              />
            </svg>
            leannellena@yahoo.com
          </a>

          <div className={s.socials}>
            <a href="https://github.com/LeanneJamesLlena" target="_blank" rel="noreferrer" className={s.social}>
              GitHub
            </a>
            {/* <span className={s.dot} aria-hidden>•</span>
            <a href="/cv/Resume_LeanneJamesLlena_2026.pdf" target="_blank" rel="noreferrer" className={s.social}>
              Check my CV
            </a> */}
          </div>
        </div>
      </aside>

      {/* RIGHT: form */}
      <div className={s.formCard}>
        <form ref={formRef} onSubmit={onSubmit} className={s.form} noValidate>
          <div className={s.row}>
            <label className={s.field}>
              <span className={s.label}>First Name</span>
              <input name="first_name" type="text" autoComplete="given-name" required />
            </label>
            <label className={s.field}>
              <span className={s.label}>Last Name</span>
              <input name="last_name" type="text" autoComplete="family-name" required />
            </label>
          </div>

          <label className={s.field}>
            <span className={s.label}>
              Email<span className={s.req}>*</span>
            </span>
            <input name="email" type="email" required autoComplete="email" />
          </label>

          <label className={s.field}>
            <span className={s.label}>Message</span>
            <textarea name="message" rows={6} required />
          </label>

          {/* Hidden field for date */}
          <input type="hidden" name="date" value={new Date().toLocaleString()} />

          <div className={s.actions}>
            <button className={s.btn} type="submit" disabled={loading}>
              {loading ? "Sending…" : "Send"}
            </button>
            {status.msg && (
              <span className={`${s.status} ${status.type === "ok" ? s.ok : s.err}`}>
                {status.msg}
              </span>
            )}
          </div>

        </form>
      </div>

        {/* Footer info section */}
        <div className={s.bottomNote}>
        <p className={s.location}>📍 Based in Finland · Open to remote opportunities</p>
        <p className={s.note}>Thanks for visiting — looking forward to connecting!</p>
        </div>

    </section>
  );
}

export default Contact;
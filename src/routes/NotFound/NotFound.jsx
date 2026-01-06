import { Link } from 'react-router-dom';
import s from './NotFound.module.css';

function NotFound() {
  return (
    <section className={`container ${s.wrap}`}>
      <div className={s.content}>
        <h1 className={s.title}>
          404 <span className={s.accent}>Not Found</span>
        </h1>
        <p className={s.message}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className={s.button}>
          Go Back Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;


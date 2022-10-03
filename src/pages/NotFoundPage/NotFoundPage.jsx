import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <main>
      <div className="container">
        <div className={s.position_container}>
          <div className={s.images}></div>
          <h3 className={s.title}>404 Page not found</h3>
          <Link to="/">
            <button type="button" className={s.button}>
              Go to main page
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;

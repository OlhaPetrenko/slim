import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './RegistrationForm.module.scss';

function RegistrationForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    const data = { email, password, username: name };
    onSubmit(data);
    setName('');
    setEmail('');
    setPassword('');
  }

  function handleChange(event) {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.formItem}>
        <input
          className={s.formInput}
          type="text"
          name="name"
          value={name}
          id="name"
          required
          pattern="[A-Za-z0-9]{6,}"
          title="Name cannot be less than 6 Latin characters or numbers. For example - butterfly01"
          onChange={handleChange}
        />
        <label className={s.formLabel} htmlFor="name">
          Name *
        </label>
        <div className={s.formText}>
          cannot be less than 6 Latin characters or numbers. For example -
          butterfly01
        </div>
      </div>
      <div className={s.formItem}>
        <input
          className={s.formInput}
          type="email"
          name="email"
          value={email}
          id="email"
          required
          pattern="\S+@[a-z]+\.[a-z]+"
          title="The email must contain only Latin lowercase letters, @ and  a dot without spaces.  For example - butterfly@mail.com"
          onChange={handleChange}
        />
        <label className={s.formLabel} htmlFor="email">
          Email *
        </label>
        <div className={s.formText}>
          must contain only Latin lowercase letters, @ and a dot without spaces.
          For example - butterfly@mail.com
        </div>
      </div>
      <div className={s.formItem}>
        <input
          className={s.formInput}
          type="password"
          name="password"
          value={password}
          id="password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="The password cannot be less than 8 characters and must contain at least one number, one lowercase, and one uppercase Latin letter. For example - Butterfly01"
          onChange={handleChange}
        />
        <label className={s.formLabel} htmlFor="password">
          Password *
        </label>
        <div className={s.formText}>
          cannot be less than 8 characters and must contain at least one number,
          one lowercase, and one uppercase Latin letter. For example -
          Butterfly01
        </div>
      </div>

      <div className={s.btnGroup}>
        <button type="submit" className={s.btn}>
          Register
        </button>
        <button
          type="button"
          className={s.btn}
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

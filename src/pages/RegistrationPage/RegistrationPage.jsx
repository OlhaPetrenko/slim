import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { registerUser } from 'redux/auth/auth-operation';
import s from './RegistrationPage.module.scss';

function RegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = data => {
    navigate('/login');
    dispatch(registerUser(data));
  };

  return (
    <div className={s.section}>
      <div className="container">
        <h3 className={s.formTitle}>Register</h3>
        <RegistrationForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default RegistrationPage;

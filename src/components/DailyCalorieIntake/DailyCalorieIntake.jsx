import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import s from './DailyCalorieIntake.module.scss';

import {
  dailyRateState,
  dailyRateNotAllowedProd,
  dailyRateIsLoading,
} from 'redux/dailyRate/dailyRate.selectors';

import { userIsLogIn } from 'redux/user/user-selector';

const DailyCalorieIntake = () => {
  const dailyRate = useSelector(dailyRateState);
  const summNotAllowed = useSelector(dailyRateNotAllowedProd);
  const isLoading = useSelector(dailyRateIsLoading);
  const LogInUser = useSelector(userIsLogIn);
  const navigate = useNavigate();

  const navigation = () => {
    if (LogInUser) {
      return navigate('/diary');
    }
    return navigate('/registration');
  };
  return (
    <>
      <h2 className={s.title}>
        Your recommended daily
        <br /> calorie intake is
      </h2>
      <div className={s.wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <p className={s.dailyRate}>
            {Number.parseInt(dailyRate)} <span className={s.kcal}>kcal</span>
          </p>
        )}
        <h3 className={s.titleList}>Foods you should not eat</h3>
        <ol className={s.list}>
          <li className={s.item}>{summNotAllowed[0]}</li>
          <li className={s.item}>{summNotAllowed[1]}</li>
          <li className={s.item}>{summNotAllowed[2]}</li>
          <li className={s.item}>{summNotAllowed[3]}</li>
        </ol>
      </div>

      <button className={s.button} onClick={navigation}>
        Start losing weight
      </button>
    </>
  );
};

export default DailyCalorieIntake;

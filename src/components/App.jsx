import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './App.module.scss';

import Header from './Header/Header';
import UserRoutes from './UserRouts/UserRoutes';
import { refreshUser } from 'redux/auth/auth-operation';
import { userIsLoading } from 'redux/user/user-selector';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(userIsLoading);

  useEffect(() => {
    dispatch(refreshUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      {isLoadingUser ? (
        <div className={css.loader_container}>
          <Loader />
        </div>
      ) : (
        <UserRoutes />
      )}
    </>
  );
};

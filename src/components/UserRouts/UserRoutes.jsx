import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const Login = lazy(() => import('pages/LoginPage/LoginPage'));
const Registration = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const Main = lazy(() => import('pages/MainPage/MainPage'));
const Diary = lazy(() => import('pages/DiaryPage/DiaryPage'));
const Calculator = lazy(() => import('pages/CalculatorPage/CalculatorPage'));
const NotFound = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const userRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/diary" element={<Diary />} />
          <Route path="/calculator" element={<Calculator />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default userRoutes;

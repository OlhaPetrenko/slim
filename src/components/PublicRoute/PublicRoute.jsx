import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { userIsLogIn } from 'redux/user/user-selector';

const PublicRoute = () => {
  const LogInUser = useSelector(userIsLogIn);

  if (LogInUser) {
    return <Navigate to="/calculator" />;
  }
  return <Outlet />;
};

export default PublicRoute;

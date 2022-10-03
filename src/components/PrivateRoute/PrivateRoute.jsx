import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { userIsLogIn } from 'redux/user/user-selector';

const PrivateRoute = () => {
  const LogInUser = useSelector(userIsLogIn);
  if (LogInUser) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;

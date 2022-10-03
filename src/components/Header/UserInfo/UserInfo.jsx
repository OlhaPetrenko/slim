import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './UserInfo.module.scss';

import useResizeScreen from 'shared/hooks/useResizeScreen';
const activeNav = ({ isActive }) => {
  return isActive ? `${s.headerNavLink} ${s.active}` : s.headerNavLink;
};

const UserInfo = ({ closeSideBar }) => {
  const mediaScreen = useResizeScreen();
  const { isMobile, isTablet } = mediaScreen;

  if (isMobile || isTablet) {
    return (
      <div className={s.headerNavContainer}>
        <NavLink
          className={activeNav}
          to="/diary"
          onClick={() => closeSideBar()}
        >
          Diary
        </NavLink>
        <NavLink
          className={activeNav}
          to="/calculator"
          onClick={() => closeSideBar()}
        >
          Calculator
        </NavLink>
      </div>
    );
  }
  return (
    <div className={s.headerNavContainer}>
      <NavLink className={activeNav} to="/diary">
        Diary
      </NavLink>
      <NavLink className={activeNav} to="/calculator">
        Calculator
      </NavLink>
    </div>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  close: PropTypes.func,
};

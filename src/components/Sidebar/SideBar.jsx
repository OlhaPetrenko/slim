import { createPortal } from 'react-dom';
import css from './SideBar.module.scss';
import PropTypes from 'prop-types';
const sideBarNav = document.getElementById('sidebar');

const SideBar = ({ children }) => {
  return createPortal(
    <div className={css.menuContainer}>{children}</div>,
    sideBarNav
  );
};

export default SideBar;
SideBar.propTypes = {
  children: PropTypes.element.isRequired,
};

import PropTypes from 'prop-types';
import s from './Burger.module.scss';

const Burger = ({ toggleMenuIsOpen }) => {
  return (
    <>
      <button
        className={s.burger}
        type="button"
        onClick={() => toggleMenuIsOpen()}
      ></button>
    </>
  );
};

export default Burger;

Burger.propTypes = {
  toggleMenuIsOpen: PropTypes.func,
};

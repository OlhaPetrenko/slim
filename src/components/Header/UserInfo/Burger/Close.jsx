import s from './Burger.module.scss';

const Close = ({ toggleMenuIsOpen }) => {
  return (
    <>
      <button
        className={s.close}
        type="button"
        onClick={() => toggleMenuIsOpen()}
      ></button>
    </>
  );
};

export default Close;

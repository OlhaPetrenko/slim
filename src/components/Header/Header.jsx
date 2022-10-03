import { useSelector } from 'react-redux';
import { useState } from 'react';

import { Logo, UserInfo, Navigation, MobileNav, Burger, Close } from '/';
import s from './Header.module.scss';
import SideBar from 'components/Sidebar/SideBar';
import useResizeScreen from 'shared/hooks/useResizeScreen';

import { userIsLogIn } from 'redux/user/user-selector';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLogIn = useSelector(userIsLogIn);
  const mediaScreen = useResizeScreen();

  const onClickToggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  if (mediaScreen.isMobile || mediaScreen.isTablet) {
    return (
      <header className={s.header}>
        <div className="container">
          <div className={s.navContainer}>
            <Logo />
            <nav className={s.nav}>{!isLogIn && <Navigation />}</nav>
            {isLogIn && (
              <>
                <MobileNav />
                {isOpen ? (
                  <Close toggleMenuIsOpen={onClickToggleIsOpen} />
                ) : (
                  <Burger toggleMenuIsOpen={onClickToggleIsOpen} />
                )}
              </>
            )}
            {isOpen && (
              <SideBar>
                <UserInfo closeSideBar={onClickToggleIsOpen} />
              </SideBar>
            )}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.navContainer}>
          <Logo />
          <nav className={s.nav}>
            {!isLogIn ? <Navigation /> : <UserInfo />}
          </nav>
          {isLogIn && (
            <>
              <MobileNav />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

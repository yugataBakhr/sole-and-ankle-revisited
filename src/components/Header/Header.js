import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Nav>
          <NavLink href="/sale">SALE</NavLink>
          <NavLink href="/new">NEW&nbsp;RELEASES</NavLink>
          <NavLink href="/men">MEN</NavLink>
          <NavLink href="/women">WOMEN</NavLink>
          <NavLink href="/kids">KIDS</NavLink>
          <NavLink href="/collections">COLLECTIONS</NavLink>
        </Nav>
        <Side />
        <MenuContainer>
          <li>
            <SelectWrapper>
              <NativeSelect></NativeSelect>
              <DisplayedBit>
                <Icon id="shopping-bag" color="var(--color-gray-900)" />
              </DisplayedBit>
              <VisuallyHidden>Shopping Bag Icon</VisuallyHidden>
            </SelectWrapper>
          </li>
          <li>
            <SelectWrapper>
              <NativeSelect></NativeSelect>
              <DisplayedBit>
                <Icon id="search" color="var(--color-gray-900)" />
              </DisplayedBit>
              <VisuallyHidden>Search Icon</VisuallyHidden>
            </SelectWrapper>
          </li>
          <li onClick={() => showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true)}>
            <SelectWrapper>
              <NativeSelect></NativeSelect>
              <DisplayedBit>
                <Icon id="menu" color="var(--color-gray-900)" />
              </DisplayedBit>
              <VisuallyHidden>Menu Icon</VisuallyHidden>
            </SelectWrapper>
          </li>
        </MenuContainer>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
 
  @media ${QUERIES.tabletMax} {
    border-top: 4px solid var(--color-gray-900);
    justify-content: space-between;
  }
  
  @media ${QUERIES.mobileMax} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    2rem,
    11.5vw - 4.5rem,
    8rem
  );
  margin: 0px 48px;
  @media ${QUERIES.tabletMax} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
  
  @media ${QUERIES.tabletMax} {
    display: none;
  }
`;

const LogoContainer = styled.div`
  display: none;

  @media ${QUERIES.tabletMax} {
    display: block;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weights-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MenuContainer = styled.ul`
  display: none;
  @media ${QUERIES.tabletMax} {
    display: flex;
    justify-content: space-around;
    gap: 2.5rem;
    & > li:hover {
      cursor: pointer;
    }
  }

  @media ${QUERIES.tabletMax} {
    gap: 2rem;
  }

  @media ${QUERIES.mobileMax} {
    gap: 1.5rem;
  }

`;

const SelectWrapper = styled.div`
  position: relative;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const DisplayedBit = styled.span`
  ${NativeSelect}:focus ~ & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export default Header;
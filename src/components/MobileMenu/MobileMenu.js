/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import {QUERIES} from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {

  return (
    <Overlay isOpen={isOpen}>
      <Content>
        <ButtonWrapper onClick={onDismiss}>
          <NativeSelect></NativeSelect>
          <DisplayedBit>
            <Icon id="close" color="var(--color-gray-900)" />
          </DisplayedBit>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </ButtonWrapper>
        <Filler />
        <NavWrapper>
          <a href="/sale">SALE</a>
          <a href="/new">NEW&nbsp;RELEASES</a>
          <a href="/men">MEN</a>
          <a href="/women">WOMEN</a>
          <a href="/kids">KIDS</a>
          <a href="/collections">COLLECTIONS</a>
        </NavWrapper> 
        <FooterWrapper>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </FooterWrapper>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 80vw;
  padding-left: 3rem;
  background-color: var(--color-white);
  opacity: 1;

  @media (${QUERIES.mobileMax}) {
    padding-left: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px; // makes a larger target to tap the button easily.
  // And why it is set to be @ position of 'right 16px, top 26px' which seems unnatural
  // is that because it is exactly where the toggle button is when closing the menu.
  // you can see when you play the mobile. That is an awesome tip.
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

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  font-weight: var(--weights-medium);
  gap: 1rem;

  & > a {
    color: var(--color-gray-900);
    text-decoration: none;
  }

  & > a:first-child {
    color: var(--color-secondary);
  }
`;

const FooterWrapper = styled.footer`
  flex: 1;
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  font-size: 0.75rem;

  & > a {
    color: var(--color-gray-900);
    text-decoration: none;
  }
`;

const Filler = styled.div`
  flex: 1;
  padding: 1rem;
  
`;

export default MobileMenu;

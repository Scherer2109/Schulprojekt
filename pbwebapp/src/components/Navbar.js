import React from 'react';
import styled from 'styled-components/macro';
import Img from '../assets/logo.png';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Spielfelder from './Spielfelder';
import Spieler from './Spieler';
import Gruppen from './Gruppen';
import Hilfe from './Hilfe';
import Startseite from './Startseite';
import Register from './Register';
import Login from './Login'

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 20;
  background: #fff;
`;

const NavbarWrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 100px;
  height: 70px;
  background: url(${Img}) 0 45% no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
`;

const Nav = styled.nav`
  flex: 1;
  position: relative;
  padding-left: 50px;
`;

const NavLink = styled(Link)`
  color: #000;
  padding: 0 15px;
  font-size: 16px;
  line-height: 80px;
  font-weight: 700;
  text-decoration: none;
`;

const Search = styled.div`
  right: 235px;
  position: absolute;
`;

const SearchWrap = styled.div`
  width: 220px;
  height: 36px;
  position: relative;
  box-sizing: border-box;
  background: rgba(179, 191, 201, 0.15);
  line-height: 33px;
  padding-left: 37px;
  border-radius: 19px;
`;

const Input = styled.input`
  color: #000;
  width: 196px;
  border: transparent;
  font-size: 12px;
  background: transparent;
  outline: none;
  &::placeholder {
    color: #d1d8de;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.div`
  width: 110px;
  color: #fff;
  cursor: pointer;
  height: 36px;
  font-size: 16px;
  box-sizing: border-box;
  background: #007cff;
  text-align: center;
  line-height: 36px;
  border-radius: 21px;
`;

const Navbar = () => {
  return (
    <Router>
    <NavbarContainer>
      <NavbarWrap>
        <Logo />
        <Nav>
          <NavLink to='/Startseite'>Startseite</NavLink>
          <NavLink to='/Spielfelder'>Spielfelder</NavLink>
          <NavLink to='/Gruppen'>Gruppen</NavLink>
          <NavLink to='/Spieler'>Spieler</NavLink>
          <NavLink to='/Hilfe'>Hilfe</NavLink>
        </Nav>
        <Search>
          <SearchWrap>
            <Input type='text' placeholder='Suche' />
          </SearchWrap>
        </Search>
        <ButtonContainer>
          <Button  
            css={`
              color: #037cff;
              background: #fff;
            `}
            >
              
            Registrieren
          </Button>
          <Button href='register' target='register'>Anmelden</Button>
          </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>

    <Switch>
          <Redirect exact from="/" to="/startseite"/>
          <Route path="/Startseite">
            <Startseite />
          </Route>
          <Route path="/Spielfelder">
            <Spielfelder />
          </Route>
          <Route path="/Gruppen">
            <Gruppen />
          </Route>
          <Route path="/Spieler">
            <Spieler />
          </Route>
          <Route path="/Hilfe">
            <Hilfe />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Switch>
    </Router>
  );
};

export default Navbar;
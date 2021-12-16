import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../assets/images/logo-200px.png';
import { ReactComponent as MenuIcon } from '../assets/images/menu-icon.svg';
import LogoRepoProvas from './LogoRepoProvas';

export default function Navbar() {
  return (
    <Bar>
      <div>
        <Link to='/'>
          <LogoRepoProvas src={LogoImage} alt="RepoProvas" />
        </Link>
        <LinkAndMenuIcon>
          {useLocation().pathname.includes('contribua') ? (
            <DynamicLink to="/">Busque uma prova</DynamicLink>
          ) : (
            <DynamicLink to="/contribua">Envie sua prova</DynamicLink>
          )}
          <MenuIconStyled />
        </LinkAndMenuIcon>
      </div>
    </Bar>
  );
}

const MenuIconStyled = styled(MenuIcon)`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  path {
    fill: #fffaef;
  }
  @media(max-width: 435px) {
    width: 25px;
    margin-left: 10px;
  }
`;

const Bar = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  padding: 0 25px;

  > div {
    display: flex;
    width: 1200px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
`;

const LinkAndMenuIcon = styled.div`
  display: flex;
  align-items: center;
`;

const DynamicLink = styled(Link)`
  text-decoration: none;
  color: #fffaef;
  font-size: 22px;
  @media(max-width: 435px) {
    font-size: 16px;
  }
`;

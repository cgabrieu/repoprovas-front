import React from 'react';
import { Presets } from 'react-component-transition';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../assets/images/logo-200px.png';
import LogoRepoProvas from './LogoRepoProvas';
import Sidebar from './Sidebar';
import MenuIcon from './MenuIcon';

export default function Navbar({ showSidebar, setShowSidebar }) {
  return (
    <>
      <Bar>
        <div>
          <Link to="/">
            <LogoRepoProvas src={LogoImage} alt="RepoProvas" />
          </Link>
          <LinkAndMenuIcon>
            {useLocation().pathname.includes('contribua') ? (
              <DynamicLink to="/">Busque uma prova</DynamicLink>
            ) : (
              <DynamicLink to="/contribua">Envie sua prova</DynamicLink>
            )}
            <Presets.TransitionRotateY>
              {!showSidebar && (
                <MenuIcon onClick={() => setShowSidebar(true)} />
              )}
            </Presets.TransitionRotateY>
          </LinkAndMenuIcon>
        </div>
      </Bar>
      <Presets.TransitionSlideRight>
        {showSidebar && (
          <Sidebar />
        )}
      </Presets.TransitionSlideRight>
    </>
  );
}

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
  @media (max-width: 435px) {
    font-size: 16px;
  }
`;

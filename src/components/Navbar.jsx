import React from 'react';
import styled from 'styled-components';
import {ReactComponent as LogoRepoProvas} from '../assets/images/logo.svg';

export default function Navbar({ type }) {
  return (
    <Bar>
      <LogoRepoProvas />
      <h4>{type}</h4>
    </Bar>
  )
}

const Bar = styled.div`
  display: fixed;
  width: 100%;
  height: 70px;
  background-color: red;
`;

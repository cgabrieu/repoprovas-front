import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LoadingIcon } from '../assets/images/loading.svg';
import PageContainer from './PageContainer';

const LoadingMain = () => (
  <PageContainer>
    <Loading />
  </PageContainer>
);

export default LoadingMain;

const Loading = styled(LoadingIcon)`
  margin-top: 100px;
  width: 100px;
  height: 100px;
  circle {
    stroke: #ffffff;
  }
`;

import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LoadingIcon } from '../assets/images/loading.svg';

const LoadingButton = () => <Loading />;

export default LoadingButton;

const Loading = styled(LoadingIcon)`
  width: 30px;
  height: 30px;
`;

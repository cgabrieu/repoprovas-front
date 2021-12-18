import React from 'react';
import styled from 'styled-components';

export default function PageContainer({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 85px auto;
  padding: 15px;
`;

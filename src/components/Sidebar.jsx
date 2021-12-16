import React from 'react';
import styled from 'styled-components';

export default function Sidebar() {
  return (
    <Bar>
      COISAS AQUI
    </Bar>
  );
}

const Bar = styled.div`
  position: fixed;
  right: 0;
  width: 300px;
  height: 90vh;
  background-color: #fffaef;
  margin: 10px;
  border-radius: 5px;
`;

import React from 'react';
import Select, { Option } from 'rc-select';
import styled from 'styled-components';

export default ({ setPeriod }) => (
  <SelectStyled onChange={(e) => setPeriod(e.value.target)}>
    <OptionStyled value={1}>1º</OptionStyled>
    <OptionStyled value={2}>2º</OptionStyled>
    <OptionStyled value={3}>3º</OptionStyled>
    <OptionStyled value={4}>4º</OptionStyled>
    <OptionStyled value={5}>5º</OptionStyled>
    <OptionStyled value={6}>6º</OptionStyled>
    <OptionStyled value={7}>7º</OptionStyled>
    <OptionStyled value={8}>8º</OptionStyled>
    <OptionStyled value={9}>9º</OptionStyled>
    <OptionStyled value={10}>10º</OptionStyled>
  </SelectStyled>
);

const SelectStyled = styled(Select)`
  background-color: red;
  width: 300px;
  z-index: 500;
`;

const OptionStyled = styled(Option)`
  background-color: white;
  width: 20px;
  z-index: 500;
`;

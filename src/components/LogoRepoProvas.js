import styled from "styled-components";

export default styled.img`
  width: 150px;
  border-radius: 5px;
  cursor: pointer;

  @media(max-width: 435px) {
    width: 100px;
    border-radius: 0px;
  }
`;

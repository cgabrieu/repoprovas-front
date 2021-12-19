import styled from "styled-components";

export default styled.div`
  position: absolute;
  right: 0;
  top: -2px;
  padding: 5px;
  font-size: 20px;
  background-color: #fffaef;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  @media (max-width: 700px) {
    position: relative;
    width: 220px;
    margin: 20px 0;
  }
`;
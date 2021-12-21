import styled from "styled-components";
import { ReactComponent as MenuIcon } from '../assets/images/menu-icon.svg';

export default styled(MenuIcon)`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  cursor: pointer;
  path {
    fill: #FFFAEF;
  }
  @media (max-width: 435px) {
    width: 25px;
    margin-left: 10px;
  }
`;
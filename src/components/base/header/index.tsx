import { FunctionComponent } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 14px !important;
    font-weight: 400 !important;
    color: #fff;
    text-transform: capitalize;
  }
`;

interface IHeaderProps {
  title: string;
}

const Header: FunctionComponent<IHeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <h2>{title}</h2>
    </HeaderContainer>
  );
};

export default Header;

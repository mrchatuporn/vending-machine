import { FunctionComponent } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div<{ fontSize: string }>`
  width: 100%
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;

  strong {
    font-size: ${props => props.fontSize};
    font-weight: bold;
    color: #fff;
    text-transform: capitalize;
    text-transform: uppercase;
  }
`;

interface IHeaderProps {
  title: string;
  fontSize: string;
}

const Header: FunctionComponent<IHeaderProps> = ({ title, fontSize }) => {
  return (
    <HeaderContainer fontSize={fontSize}>
      <strong>{title}</strong>
    </HeaderContainer>
  );
};

export default Header;

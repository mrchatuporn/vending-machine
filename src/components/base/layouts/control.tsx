import { FunctionComponent } from 'react';
import styled from 'styled-components';

const LayoutControlContainer = styled.div`
  padding: 0.5rem;
  background: #393c40;
  border-radius: 7px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: 2px solid #dcdcdc;
`;

interface LayoutControlProps {
  children: JSX.Element[] | JSX.Element;
}

const LayoutControl: FunctionComponent<LayoutControlProps> = ({ children }) => {
  return <LayoutControlContainer>{children}</LayoutControlContainer>;
};

export default LayoutControl;

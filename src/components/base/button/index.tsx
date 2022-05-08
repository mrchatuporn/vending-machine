import { FunctionComponent } from 'react';
import styled from 'styled-components';

const ButtonDeposit = styled.div`
  margin: 0.25rem 0;
  background: #dcdcdc;
  border: 1px solid #696969;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #696969;
  cursor: pointer;
`;

const ButtonSelection = styled.div<{ active: boolean }>`
  margin: 0.25rem 0;
  background: ${props => (props.active ? '#198754' : '#dcdcdc')};
  border: 1px solid #696969;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  width: 48px;
  height: 48px;
  color: ${props => (props.active ? '#fff' : '#696969')};
  cursor: pointer;
`;

interface IButtonProps {
  type: string;
  name: number | string;
  active?: boolean;
  handlerClick?: () => void;
}

const Button: FunctionComponent<IButtonProps> = ({ type, name, active, handlerClick }) => {
  switch (type) {
    case 'deposit':
      return <ButtonDeposit onClick={handlerClick}>{name}</ButtonDeposit>;
    case 'selection':
      return (
        <ButtonSelection active={active ? true : false} onClick={handlerClick}>
          {name}
        </ButtonSelection>
      );
    default:
      return <button>{name}</button>;
  }
};

export default Button;

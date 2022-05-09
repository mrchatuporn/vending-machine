import { FunctionComponent } from 'react';
import styled from 'styled-components';

const ButtonDeposit = styled.button`
  margin: 0.25rem 0;
  width: 100%;
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

const ButtonSelection = styled.button<{ active: boolean }>`
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

const ButtonIcon = styled.button<{ height: string }>`
  width: 100%;
  border-radius: 3px;
  border: 1px solid #696969;
  background: #696969;
  height: ${props => props.height};

  span {
    font-size: 16px;
    color: #dcdcdc;
    font-weight: 500;
  }
`;

interface IButtonProps {
  type?: string;
  name: number | string;
  active?: boolean;
  color?: string;
  height?: string;
  handlerClick?: () => void;
}

const Button: FunctionComponent<IButtonProps> = ({ type, name, active, height, handlerClick }) => {
  switch (type) {
    case 'deposit':
      return (
        <ButtonDeposit type='button' onClick={handlerClick}>
          <span>{name}</span>
        </ButtonDeposit>
      );
    case 'selection':
      return (
        <ButtonSelection type='button' active={active ? true : false} onClick={handlerClick}>
          <span>{name}</span>
        </ButtonSelection>
      );
    default:
      return (
        <ButtonIcon type='button' height={height ? height : 'auto'} onClick={handlerClick}>
          <span>{name}</span>
        </ButtonIcon>
      );
  }
};

export default Button;

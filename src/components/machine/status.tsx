import { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { verifyQuantity } from '../../helper/verify';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 20px;
  flex-direction: row;
  border-radius: 10px;

  span {
    font-size: 12px;
    padding-left: 0.5rem;
    font-weight: 500;
    color: ${props => props.color};
  }

  .status {
    width: 10px;
    height: 10px;
    background: ${props => props.color} !important;
    border-radius: 50%;
  }
`;

interface IStatusProps {
  active: boolean;
  code: string;
}

const Status: FunctionComponent<IStatusProps> = ({ active, code }) => {
  const [color, setColor] = useState<string>('#198754');

  useEffect(() => {
    const { color } = verifyQuantity(active);
    setColor(color);
  }, []);

  return (
    <Container color={color}>
      <div className='status' />
      <span>{code}</span>
    </Container>
  );
};

export default Status;
